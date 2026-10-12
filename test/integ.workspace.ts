/**
 * Deploy-backed control-plane integration test for all APS L2 resources in this package.
 *
 * The VPC scraper writes to the account's implicit CloudWatch `dataset/default`, uses a nonexistent
 * private target, and has no outbound network access. This verifies scraper creation, configuration,
 * identity, and ACTIVE state without standing up an internet-reachable Prometheus endpoint or
 * claiming to validate metric collection.
 *
 * Run `yarn integ:snapshot` for synthesis-only verification. Run `yarn integ` only with a confirmed
 * non-production AWS profile in us-east-1; the runner deploys the resource stack, performs the
 * read-only assertions below, and destroys both resource and assertion stacks in a finally block.
 * The README documents the non-production profile requirement.
 */
import {
  ExpectedResult,
  IntegTest,
  Match,
} from '@aws-cdk/integ-tests-alpha';
import { App, ArnFormat, Duration, Fn, Stack } from 'aws-cdk-lib';
import { SecurityGroup, SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { AccountPrincipal, PolicyDocument, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import {
  AnomalyDetector,
  MissingDataAction,
  ResourcePolicy,
  RuleGroupsNamespace,
  ScrapeConfiguration,
  Scraper,
  ScraperDestination,
  ScraperSource,
  Workspace,
} from '../src';

const app = new App();
const stack = new Stack(app, 'aps-resources-integ');

const workspace = new Workspace(stack, 'Workspace', {
  alias: 'cdk-aps-integ',
  tags: { purpose: 'integration-test' },
});

const ruleGroupsData = `groups:
  - name: availability
    rules:
      - record: service:up:sum
        expr: sum(up)
`;
new RuleGroupsNamespace(stack, 'Rules', {
  workspace,
  name: 'availability',
  data: ruleGroupsData,
});

const anomalyDetector = new AnomalyDetector(stack, 'Detector', {
  workspace,
  alias: 'availability',
  configuration: {
    randomCutForest: { query: 'sum(up)' },
  },
  missingDataAction: MissingDataAction.SKIP,
});

new ResourcePolicy(stack, 'ResourcePolicy', {
  workspace,
  policyDocument: new PolicyDocument({
    statements: [new PolicyStatement({
      actions: ['aps:QueryMetrics'],
      principals: [new AccountPrincipal(stack.account)],
      resources: [workspace.workspaceArn],
    })],
  }),
});

const vpc = new Vpc(stack, 'Vpc', {
  maxAzs: 2,
  natGateways: 0,
  subnetConfiguration: [{
    name: 'isolated',
    subnetType: SubnetType.PRIVATE_ISOLATED,
    cidrMask: 24,
  }],
});
const scraperSecurityGroup = new SecurityGroup(stack, 'ScraperSecurityGroup', {
  vpc,
  allowAllOutbound: false,
});

const scraperConfiguration = `global:
  scrape_interval: 60s
  scrape_timeout: 10s
scrape_configs:
  - job_name: unreachable-private-target
    static_configs:
      - targets:
          - '10.0.255.254:9090'
`;
const cloudWatchDatasetArn = stack.formatArn({
  service: 'cloudwatch',
  resource: 'dataset',
  resourceName: 'default',
  arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
});
const scraper = new Scraper(stack, 'Scraper', {
  destination: ScraperDestination.cloudWatch(cloudWatchDatasetArn),
  source: ScraperSource.vpc({
    securityGroups: [scraperSecurityGroup],
    subnets: vpc.isolatedSubnets,
  }),
  scrapeConfiguration: ScrapeConfiguration.fromString(scraperConfiguration),
});

const integ = new IntegTest(app, 'aps-resources-test', {
  testCases: [stack],
});
const waitOptions = {
  interval: Duration.seconds(10),
  totalTimeout: Duration.minutes(10),
  backoffRate: 1,
};

integ.assertions.awsApiCall('amp', 'DescribeWorkspace', {
  workspaceId: workspace.workspaceId,
}).expect(ExpectedResult.objectLike({
  workspace: Match.objectLike({
    workspaceId: workspace.workspaceId,
    arn: workspace.workspaceArn,
    alias: 'cdk-aps-integ',
    prometheusEndpoint: workspace.prometheusEndpoint,
    status: Match.objectLike({ statusCode: 'ACTIVE' }),
    tags: Match.objectLike({ purpose: 'integration-test' }),
  }),
})).waitForAssertions(waitOptions);

integ.assertions.awsApiCall('amp', 'DescribeRuleGroupsNamespace', {
  workspaceId: workspace.workspaceId,
  name: 'availability',
}, ['ruleGroupsNamespace.status.statusCode']);

const anomalyDetectorId = Fn.select(
  2,
  Fn.split('/', anomalyDetector.anomalyDetectorArn),
);
integ.assertions.awsApiCall('amp', 'DescribeAnomalyDetector', {
  workspaceId: workspace.workspaceId,
  anomalyDetectorId,
}).expect(ExpectedResult.objectLike({
  anomalyDetector: Match.objectLike({
    arn: anomalyDetector.anomalyDetectorArn,
    anomalyDetectorId,
    alias: 'availability',
    configuration: Match.objectLike({
      randomCutForest: Match.objectLike({ query: 'sum(up)' }),
    }),
    missingDataAction: Match.objectLike({ skip: true }),
    status: Match.objectLike({ statusCode: 'ACTIVE' }),
  }),
})).waitForAssertions(waitOptions);

integ.assertions.awsApiCall('amp', 'DescribeResourcePolicy', {
  workspaceId: workspace.workspaceId,
}).expect(ExpectedResult.objectLike({
  policyStatus: 'ACTIVE',
  policyDocument: Match.serializedJson(Match.objectLike({
    Version: '2012-10-17',
    Statement: Match.arrayWith([
      Match.objectLike({
        Effect: 'Allow',
        Action: 'aps:QueryMetrics',
        Resource: workspace.workspaceArn,
      }),
    ]),
  })),
})).waitForAssertions(waitOptions);

integ.assertions.awsApiCall('amp', 'DescribeScraper', {
  scraperId: scraper.scraperId,
}, ['scraper.status.statusCode']);

app.synth();
