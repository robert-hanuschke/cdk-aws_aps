import { ArnFormat, Fn, Lazy, Stack, Tags, Token } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { Key } from 'aws-cdk-lib/aws-kms';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Workspace } from '../src';

let stack: Stack;

beforeEach(() => {
  stack = new Stack(undefined, undefined, {
    env: { account: '123456789012', region: 'us-east-1' },
  });
});

describe('Workspace', () => {
  test('creates a workspace with no optional properties', () => {
    new Workspace(stack, 'Workspace');

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::APS::Workspace', 1);
    template.hasResourceProperties('AWS::APS::Workspace', {
      AlertManagerDefinition: Match.absent(),
      Alias: Match.absent(),
      KmsKeyArn: Match.absent(),
      LoggingConfiguration: Match.absent(),
      QueryLoggingConfiguration: Match.absent(),
      Tags: Match.absent(),
      WorkspaceConfiguration: Match.absent(),
    });
  });

  test('maps a full set of properties', () => {
    const key = new Key(stack, 'Key');
    const rulesLogGroup = new LogGroup(stack, 'RulesLogGroup');
    const queryLogGroup = new LogGroup(stack, 'QueryLogGroup');

    new Workspace(stack, 'Workspace', {
      alertManagerDefinition: 'alertmanager_config: {}',
      alias: 'production-metrics',
      kmsKey: key,
      loggingConfiguration: { logGroup: rulesLogGroup },
      queryLoggingConfiguration: {
        logGroup: queryLogGroup,
        qspThreshold: 10_000,
      },
      workspaceConfiguration: {
        labelSets: [{
          labels: [{ name: 'environment', value: 'production' }],
          limits: { maxSeries: 50_000 },
        }],
        outOfOrderTimeWindowInSeconds: 300,
        retentionPeriodInDays: 365,
        ruleQueryOffsetInSeconds: 60,
      },
      tags: {
        environment: 'production',
        team: 'observability',
      },
    });

    Template.fromStack(stack).hasResourceProperties('AWS::APS::Workspace', {
      AlertManagerDefinition: 'alertmanager_config: {}',
      Alias: 'production-metrics',
      KmsKeyArn: stack.resolve(key.keyArn),
      LoggingConfiguration: {
        LogGroupArn: stack.resolve(rulesLogGroup.logGroupArn),
      },
      QueryLoggingConfiguration: {
        Destinations: [{
          CloudWatchLogs: {
            LogGroupArn: stack.resolve(queryLogGroup.logGroupArn),
          },
          Filters: { QspThreshold: 10_000 },
        }],
      },
      WorkspaceConfiguration: {
        LimitsPerLabelSets: [{
          LabelSet: [{ Name: 'environment', Value: 'production' }],
          Limits: { MaxSeries: 50_000 },
        }],
        OutOfOrderTimeWindowInSeconds: 300,
        RetentionPeriodInDays: 365,
        RuleQueryOffsetInSeconds: 60,
      },
      Tags: Match.arrayWith([
        { Key: 'environment', Value: 'production' },
        { Key: 'team', Value: 'observability' },
      ]),
    });
  });

  test('uses zero as the default query logging threshold', () => {
    const logGroup = new LogGroup(stack, 'QueryLogGroup');

    new Workspace(stack, 'Workspace', {
      queryLoggingConfiguration: { logGroup },
    });

    Template.fromStack(stack).hasResourceProperties('AWS::APS::Workspace', {
      QueryLoggingConfiguration: {
        Destinations: [{ Filters: { QspThreshold: 0 } }],
      },
    });
  });

  test('propagates tags added with Tags.of', () => {
    const workspace = new Workspace(stack, 'Workspace');

    Tags.of(workspace).add('cost-center', '1234');

    Template.fromStack(stack).hasResourceProperties('AWS::APS::Workspace', {
      Tags: Match.arrayWith([{ Key: 'cost-center', Value: '1234' }]),
    });
  });

  test('accepts unresolved values without eager schema validation', () => {
    expect(() => {
      new Workspace(stack, 'Workspace', {
        alias: Lazy.string({ produce: () => 'resolved-alias' }),
        workspaceConfiguration: {
          outOfOrderTimeWindowInSeconds: Lazy.number({ produce: () => 300 }),
          ruleQueryOffsetInSeconds: Lazy.number({ produce: () => 60 }),
        },
      });
      Template.fromStack(stack);
    }).not.toThrow();
  });

  test('exposes all CloudFormation attributes as tokens', () => {
    const workspace = new Workspace(stack, 'Workspace');

    expect(Token.isUnresolved(workspace.workspaceArn)).toBe(true);
    expect(Token.isUnresolved(workspace.workspaceId)).toBe(true);
    expect(Token.isUnresolved(workspace.prometheusEndpoint)).toBe(true);
    expect(workspace.workspaceRef.workspaceArn).toBe(workspace.workspaceArn);
  });

  describe('references', () => {
    test('parses a concrete workspace ARN and derives its endpoint', () => {
      const workspaceArn = 'arn:aws:aps:us-east-1:123456789012:workspace/ws-abc123';

      const workspace = Workspace.fromWorkspaceArn(stack, 'Imported', workspaceArn);

      expect(workspace.workspaceArn).toBe(workspaceArn);
      expect(workspace.workspaceId).toBe('ws-abc123');
      expect(workspace.prometheusEndpoint).toBe(
        'https://aps-workspaces.us-east-1.amazonaws.com/workspaces/ws-abc123/',
      );
    });

    test('accepts an unresolved workspace ARN', () => {
      const workspaceArn = stack.formatArn({
        service: 'aps',
        resource: 'workspace',
        resourceName: Fn.ref('WorkspaceId'),
        arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
      });

      const workspace = Workspace.fromWorkspaceArn(stack, 'Imported', workspaceArn);

      expect(workspace.workspaceArn).toBe(workspaceArn);
      expect(Token.isUnresolved(workspace.workspaceId)).toBe(true);
    });

    test('accepts an explicit endpoint', () => {
      const workspace = Workspace.fromWorkspaceAttributes(stack, 'Imported', {
        workspaceArn: 'arn:aws:aps:us-east-1:123456789012:workspace/ws-abc123',
        prometheusEndpoint: 'https://example.test/api/v1/',
      });

      expect(workspace.prometheusEndpoint).toBe('https://example.test/api/v1/');
    });
  });
});
