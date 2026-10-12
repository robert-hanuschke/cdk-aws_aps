import { ArnFormat, Fn, Stack, Tags, Token } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { CfnWorkspace } from 'aws-cdk-lib/aws-aps';
import { SecurityGroup, Subnet } from 'aws-cdk-lib/aws-ec2';
import { Cluster } from 'aws-cdk-lib/aws-eks';
import { ArnPrincipal, PolicyDocument, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import {
  AnomalyDetector,
  ResourcePolicy,
  RuleGroupsNamespace,
  ScrapeConfiguration,
  Scraper,
  ScraperDestination,
  ScraperSource,
  Workspace,
} from '../src';

let stack: Stack;
const account = '123456789012';
const region = 'us-east-1';
const rules = `groups:
  - name: availability
    rules:
      - record: service:up:sum
        expr: sum(up)
`;

beforeEach(() => {
  stack = new Stack(undefined, undefined, {
    env: { account, region },
  });
});

describe('generated reference interoperability', () => {
  test('accepts a generated CfnWorkspace in every dependent L2', () => {
    const workspace = new CfnWorkspace(stack, 'L1Workspace');
    const securityGroup = SecurityGroup.fromSecurityGroupId(stack, 'SecurityGroup', 'sg-0123456789abcdef0');
    const subnet = Subnet.fromSubnetId(stack, 'Subnet', 'subnet-0123456789abcdef0');
    const cluster = Cluster.fromClusterAttributes(stack, 'Cluster', {
      clusterName: 'metrics-cluster',
    });

    new RuleGroupsNamespace(stack, 'Rules', {
      workspace,
      name: 'availability',
      data: rules,
    });
    new AnomalyDetector(stack, 'Detector', {
      workspace,
      alias: 'availability',
      configuration: { randomCutForest: { query: 'sum(up)' } },
    });
    new ResourcePolicy(stack, 'Policy', {
      workspace,
      policyDocument: new PolicyDocument({
        statements: [new PolicyStatement({
          actions: ['aps:QueryMetrics'],
          principals: [new ArnPrincipal('arn:aws:iam::210987654321:root')],
          resources: [workspace.attrArn],
        })],
      }),
    });
    new Scraper(stack, 'Scraper', {
      destination: ScraperDestination.amp(workspace),
      source: ScraperSource.eks({
        cluster,
        securityGroups: [securityGroup],
        subnets: [subnet],
      }),
      scrapeConfiguration: ScrapeConfiguration.fromString('scrape_configs: []'),
    });

    const workspaceReferenceArn = stack.resolve(workspace.workspaceRef.workspaceArn);
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::APS::RuleGroupsNamespace', {
      Workspace: workspaceReferenceArn,
    });
    template.hasResourceProperties('AWS::APS::AnomalyDetector', {
      Workspace: workspaceReferenceArn,
    });
    template.hasResourceProperties('AWS::APS::ResourcePolicy', {
      WorkspaceArn: workspaceReferenceArn,
    });
    template.hasResourceProperties('AWS::APS::Scraper', {
      Destination: {
        AmpConfiguration: { WorkspaceArn: workspaceReferenceArn },
      },
    });
  });
});

describe('tag propagation', () => {
  test('combines props and aspect tags for all taggable L2 resources', () => {
    const workspace = new Workspace(stack, 'Workspace', {
      tags: { source: 'props' },
    });
    Tags.of(workspace).add('aspect', 'workspace');

    const rulesNamespace = new RuleGroupsNamespace(stack, 'Rules', {
      workspace,
      name: 'availability',
      data: rules,
      tags: { source: 'props' },
    });
    Tags.of(rulesNamespace).add('aspect', 'rules');

    const detector = new AnomalyDetector(stack, 'Detector', {
      workspace,
      alias: 'availability',
      configuration: { randomCutForest: { query: 'sum(up)' } },
      tags: { source: 'props' },
    });
    Tags.of(detector).add('aspect', 'detector');

    const securityGroup = SecurityGroup.fromSecurityGroupId(stack, 'SecurityGroup', 'sg-0123456789abcdef0');
    const subnet = Subnet.fromSubnetId(stack, 'Subnet', 'subnet-0123456789abcdef0');
    const cluster = Cluster.fromClusterAttributes(stack, 'Cluster', {
      clusterName: 'metrics-cluster',
    });
    const scraper = new Scraper(stack, 'Scraper', {
      destination: ScraperDestination.amp(workspace),
      source: ScraperSource.eks({
        cluster,
        securityGroups: [securityGroup],
        subnets: [subnet],
      }),
      scrapeConfiguration: ScrapeConfiguration.fromString('scrape_configs: []'),
      tags: { source: 'props' },
    });
    Tags.of(scraper).add('aspect', 'scraper');

    const template = Template.fromStack(stack);
    for (const [resourceType, aspect] of [
      ['AWS::APS::Workspace', 'workspace'],
      ['AWS::APS::RuleGroupsNamespace', 'rules'],
      ['AWS::APS::AnomalyDetector', 'detector'],
      ['AWS::APS::Scraper', 'scraper'],
    ]) {
      template.hasResourceProperties(resourceType, {
        Tags: Match.arrayWith([
          { Key: 'aspect', Value: aspect },
          { Key: 'source', Value: 'props' },
        ]),
      });
    }
  });
});

describe('tokenized references', () => {
  test('preserves unresolved IDs and imported environments', () => {
    const workspaceArn = stack.formatArn({
      service: 'aps',
      resource: 'workspace',
      resourceName: Fn.ref('WorkspaceId'),
      arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
    });
    const scraperArn = stack.formatArn({
      service: 'aps',
      resource: 'scraper',
      resourceName: Fn.ref('ScraperId'),
      arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
    });

    const workspace = Workspace.fromWorkspaceArn(stack, 'ImportedWorkspace', workspaceArn);
    const scraper = Scraper.fromScraperArn(stack, 'ImportedScraper', scraperArn);

    expect(Token.isUnresolved(workspace.workspaceId)).toBe(true);
    expect(workspace.env.account).toBe(account);
    expect(workspace.env.region).toBe(region);
    expect(Token.isUnresolved(scraper.scraperId)).toBe(true);
    expect(scraper.env.account).toBe(account);
    expect(scraper.env.region).toBe(region);
  });
});
