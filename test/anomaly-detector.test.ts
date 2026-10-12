import { Lazy, Stack, Token } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import {
  AnomalyDetector,
  IgnoreNearExpected,
  MissingDataAction,
  Workspace,
} from '../src';

let stack: Stack;
const workspaceArn = 'arn:aws:aps:us-east-1:123456789012:workspace/ws-abc123';

beforeEach(() => {
  stack = new Stack(undefined, undefined, {
    env: { account: '123456789012', region: 'us-east-1' },
  });
});

describe('AnomalyDetector', () => {
  test('maps a full detector configuration', () => {
    const workspace = Workspace.fromWorkspaceArn(stack, 'Workspace', workspaceArn);

    new AnomalyDetector(stack, 'Detector', {
      alias: 'request-latency',
      configuration: {
        randomCutForest: {
          query: 'histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))',
          ignoreNearExpectedFromAbove: IgnoreNearExpected.amount(2),
          ignoreNearExpectedFromBelow: IgnoreNearExpected.ratio(0.05),
          sampleSize: 512,
          shingleSize: 16,
        },
      },
      evaluationIntervalInSeconds: 120,
      labels: [{ key: 'service', value: 'api' }],
      missingDataAction: MissingDataAction.MARK_AS_ANOMALY,
      workspace,
      tags: { environment: 'test' },
    });

    Template.fromStack(stack).hasResourceProperties('AWS::APS::AnomalyDetector', {
      Alias: 'request-latency',
      Configuration: {
        RandomCutForest: {
          Query: 'histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))',
          IgnoreNearExpectedFromAbove: { Amount: 2 },
          IgnoreNearExpectedFromBelow: { Ratio: 0.05 },
          SampleSize: 512,
          ShingleSize: 16,
        },
      },
      EvaluationIntervalInSeconds: 120,
      Labels: [{ Key: 'service', Value: 'api' }],
      MissingDataAction: { MarkAsAnomaly: true },
      Workspace: workspaceArn,
      Tags: [{ Key: 'environment', Value: 'test' }],
    });
  });

  test('maps the skip missing-data action and omits optional properties', () => {
    new AnomalyDetector(stack, 'Detector', {
      alias: 'request-rate',
      configuration: { randomCutForest: { query: 'sum(rate(requests_total[5m]))' } },
      missingDataAction: MissingDataAction.SKIP,
      workspace: Workspace.fromWorkspaceArn(stack, 'Workspace', workspaceArn),
    });

    Template.fromStack(stack).hasResourceProperties('AWS::APS::AnomalyDetector', {
      MissingDataAction: { Skip: true },
      EvaluationIntervalInSeconds: Match.absent(),
      Labels: Match.absent(),
      Tags: Match.absent(),
    });
  });

  test('accepts unresolved numeric values', () => {
    expect(() => {
      new AnomalyDetector(stack, 'Detector', {
        alias: Lazy.string({ produce: () => 'resolved-alias' }),
        configuration: {
          randomCutForest: {
            query: Lazy.string({ produce: () => 'up' }),
            ignoreNearExpectedFromAbove: IgnoreNearExpected.amount(
              Lazy.number({ produce: () => 1 }),
            ),
            sampleSize: Lazy.number({ produce: () => 512 }),
          },
        },
        evaluationIntervalInSeconds: Lazy.number({ produce: () => 60 }),
        workspace: Workspace.fromWorkspaceArn(stack, 'Workspace', workspaceArn),
      });
      Template.fromStack(stack);
    }).not.toThrow();
  });

  test('rejects service-invalid literal tolerances and evaluation intervals', () => {
    expect(() => IgnoreNearExpected.amount(-1)).toThrow('amount must be a non-negative finite number');
    expect(() => IgnoreNearExpected.ratio(Number.NaN)).toThrow('ratio must be a non-negative finite number');
    expect(() => new AnomalyDetector(stack, 'Detector', {
      alias: 'request-rate',
      configuration: { randomCutForest: { query: 'up' } },
      evaluationIntervalInSeconds: 29,
      workspace: Workspace.fromWorkspaceArn(stack, 'Workspace', workspaceArn),
    })).toThrow('evaluationIntervalInSeconds must be an integer from 30 through 86400');
  });

  test('exposes the detector ARN and reference', () => {
    const detector = new AnomalyDetector(stack, 'Detector', {
      alias: 'request-rate',
      configuration: { randomCutForest: { query: 'up' } },
      workspace: Workspace.fromWorkspaceArn(stack, 'Workspace', workspaceArn),
    });

    expect(Token.isUnresolved(detector.anomalyDetectorArn)).toBe(true);
    expect(detector.anomalyDetectorRef.anomalyDetectorArn).toBe(detector.anomalyDetectorArn);
  });

  test('references an existing detector by ARN', () => {
    const arn = 'arn:aws:aps:us-east-1:123456789012:anomalydetector/ad-abc123';

    const detector = AnomalyDetector.fromAnomalyDetectorArn(stack, 'Imported', arn);

    expect(detector.anomalyDetectorArn).toBe(arn);
    expect(detector.anomalyDetectorRef.anomalyDetectorArn).toBe(arn);
  });
});
