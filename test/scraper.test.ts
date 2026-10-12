import { Stack, Token } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { SecurityGroup, Subnet, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Cluster } from 'aws-cdk-lib/aws-eks';
import { Role } from 'aws-cdk-lib/aws-iam';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import {
  ScrapeConfiguration,
  Scraper,
  ScraperComponentType,
  ScraperDestination,
  ScraperSource,
  Workspace,
} from '../src';

let stack: Stack;
const workspaceArn = 'arn:aws:aps:us-east-1:123456789012:workspace/ws-abc123';

beforeEach(() => {
  stack = new Stack(undefined, undefined, {
    env: { account: '123456789012', region: 'us-east-1' },
  });
});

function eksSource() {
  const cluster = Cluster.fromClusterAttributes(stack, 'Cluster', {
    clusterName: 'metrics-cluster',
  });
  const subnet = Subnet.fromSubnetId(stack, 'Subnet', 'subnet-0123456789abcdef0');
  const securityGroup = SecurityGroup.fromSecurityGroupId(stack, 'SecurityGroup', 'sg-0123456789abcdef0');

  return {
    source: ScraperSource.eks({
      cluster,
      securityGroups: [securityGroup],
      subnets: [subnet],
    }),
    cluster,
  };
}

describe('Scraper', () => {
  test('maps an AMP destination and EKS source', () => {
    const workspace = Workspace.fromWorkspaceArn(stack, 'Workspace', workspaceArn);
    const { source, cluster } = eksSource();
    const sourceRole = Role.fromRoleArn(stack, 'SourceRole', 'arn:aws:iam::123456789012:role/source-role');
    const targetRole = Role.fromRoleArn(stack, 'TargetRole', 'arn:aws:iam::123456789012:role/target-role');
    const logGroup = LogGroup.fromLogGroupArn(
      stack,
      'LogGroup',
      'arn:aws:logs:us-east-1:123456789012:log-group:/aws/aps/scraper:*',
    );

    const scraper = new Scraper(stack, 'Scraper', {
      alias: 'cluster-metrics',
      destination: ScraperDestination.amp(workspace),
      roleConfiguration: { sourceRole, targetRole },
      scrapeConfiguration: ScrapeConfiguration.fromString('scrape_configs: []'),
      loggingConfiguration: {
        logGroup,
        components: [
          { type: ScraperComponentType.SERVICE_DISCOVERY },
          { type: ScraperComponentType.COLLECTOR, options: { level: 'debug' } },
        ],
      },
      source,
      tags: { environment: 'test' },
    });

    Template.fromStack(stack).hasResourceProperties('AWS::APS::Scraper', {
      Alias: 'cluster-metrics',
      Destination: {
        AmpConfiguration: { WorkspaceArn: workspaceArn },
        CloudWatchConfiguration: Match.absent(),
      },
      RoleConfiguration: {
        SourceRoleArn: 'arn:aws:iam::123456789012:role/source-role',
        TargetRoleArn: 'arn:aws:iam::123456789012:role/target-role',
      },
      ScrapeConfiguration: { ConfigurationBlob: 'scrape_configs: []' },
      ScraperLoggingConfiguration: {
        LoggingDestination: {
          CloudWatchLogs: {
            LogGroupArn: 'arn:aws:logs:us-east-1:123456789012:log-group:/aws/aps/scraper:*',
          },
        },
        ScraperComponents: [
          { Type: 'SERVICE_DISCOVERY' },
          { Type: 'COLLECTOR', Config: { Options: { level: 'debug' } } },
        ],
      },
      Source: {
        EksConfiguration: {
          ClusterArn: stack.resolve(cluster.clusterArn),
          SecurityGroupIds: ['sg-0123456789abcdef0'],
          SubnetIds: ['subnet-0123456789abcdef0'],
        },
        VpcConfiguration: Match.absent(),
      },
      Tags: [{ Key: 'environment', Value: 'test' }],
    });

    expect(Token.isUnresolved(scraper.scraperArn)).toBe(true);
    expect(Token.isUnresolved(scraper.scraperId)).toBe(true);
    expect(Token.isUnresolved(scraper.scraperRoleArn)).toBe(true);
    expect(scraper.scraperRef.scraperArn).toBe(scraper.scraperArn);
  });

  test('omits optional role, logging, and tag properties', () => {
    const { source } = eksSource();

    new Scraper(stack, 'Scraper', {
      destination: ScraperDestination.amp(Workspace.fromWorkspaceArn(stack, 'Workspace', workspaceArn)),
      scrapeConfiguration: ScrapeConfiguration.fromString('scrape_configs: []'),
      source,
    });

    Template.fromStack(stack).hasResourceProperties('AWS::APS::Scraper', {
      RoleConfiguration: Match.absent(),
      ScraperLoggingConfiguration: Match.absent(),
      Tags: Match.absent(),
    });
  });

  test('maps a CloudWatch destination and VPC source', () => {
    const vpc = new Vpc(stack, 'Vpc', { maxAzs: 2, natGateways: 0 });
    const securityGroup = new SecurityGroup(stack, 'SecurityGroup', { vpc });

    new Scraper(stack, 'Scraper', {
      destination: ScraperDestination.cloudWatch(
        'arn:aws:cloudwatch:us-east-1:123456789012:dataset/example',
      ),
      scrapeConfiguration: ScrapeConfiguration.fromString('scrape_configs: []'),
      source: ScraperSource.vpc({
        securityGroups: [securityGroup],
        subnets: vpc.publicSubnets,
      }),
    });

    Template.fromStack(stack).hasResourceProperties('AWS::APS::Scraper', {
      Destination: {
        AmpConfiguration: Match.absent(),
        CloudWatchConfiguration: {
          DatasetArn: 'arn:aws:cloudwatch:us-east-1:123456789012:dataset/example',
        },
      },
      Source: {
        EksConfiguration: Match.absent(),
        VpcConfiguration: {
          SecurityGroupIds: [stack.resolve(securityGroup.securityGroupId)],
          SubnetIds: vpc.publicSubnets.map((subnet) => stack.resolve(subnet.subnetId)),
        },
      },
    });
  });

  test('rejects an AMP destination for a VPC source', () => {
    const vpc = new Vpc(stack, 'Vpc', { maxAzs: 2, natGateways: 0 });
    const securityGroup = new SecurityGroup(stack, 'SecurityGroup', { vpc });

    expect(() => new Scraper(stack, 'Scraper', {
      destination: ScraperDestination.amp(Workspace.fromWorkspaceArn(stack, 'Workspace', workspaceArn)),
      scrapeConfiguration: ScrapeConfiguration.fromString('scrape_configs: []'),
      source: ScraperSource.vpc({
        securityGroups: [securityGroup],
        subnets: vpc.publicSubnets,
      }),
    })).toThrow('A VPC scraper source requires a CloudWatch dataset destination');
  });

  test('passes inline scrape configuration as raw YAML', () => {
    const { source } = eksSource();

    new Scraper(stack, 'Scraper', {
      destination: ScraperDestination.amp(Workspace.fromWorkspaceArn(stack, 'Workspace', workspaceArn)),
      scrapeConfiguration: ScrapeConfiguration.fromString('scrape_configs: []'),
      source,
    });

    Template.fromStack(stack).hasResourceProperties('AWS::APS::Scraper', {
      ScrapeConfiguration: {
        ConfigurationBlob: 'scrape_configs: []',
      },
    });
  });

  test('references an existing scraper by ARN', () => {
    const scraperArn = 'arn:aws:aps:us-east-1:123456789012:scraper/s-abc123';

    const scraper = Scraper.fromScraperArn(stack, 'Imported', scraperArn);

    expect(scraper.scraperArn).toBe(scraperArn);
    expect(scraper.scraperId).toBe('s-abc123');
    expect(scraper.scraperRef.scraperArn).toBe(scraperArn);
  });
});
