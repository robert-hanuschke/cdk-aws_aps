import { Token } from 'aws-cdk-lib';
import { CfnAnomalyDetector, CfnAnomalyDetectorProps, IWorkspaceRef } from 'aws-cdk-lib/aws-aps';
import { Construct } from 'constructs';
import {
  AnomalyDetectorBase,
  AnomalyDetectorConfiguration,
  AnomalyDetectorLabel,
  IAnomalyDetector,
  MissingDataAction,
} from './anomaly-detector-base';

/**
 * Properties for an Amazon Managed Service for Prometheus anomaly detector.
 */
export interface AnomalyDetectorProps {
  /**
   * A user-friendly name for the detector.
   */
  readonly alias: string;

  /**
   * The algorithm configuration.
   */
  readonly configuration: AnomalyDetectorConfiguration;

  /**
   * The interval, in seconds, between evaluations.
   *
   * Literal values must be integers from 30 through 86,400. Unresolved values are validated by
   * the service after deployment.
   *
   * @default 60
   */
  readonly evaluationIntervalInSeconds?: number;

  /**
   * Metric labels associated with the detector.
   *
   * @default - no labels
   */
  readonly labels?: AnomalyDetectorLabel[];

  /**
   * The action to take when evaluation data is missing.
   *
   * @default - service default
   */
  readonly missingDataAction?: MissingDataAction;

  /**
   * The workspace whose metrics are evaluated.
   */
  readonly workspace: IWorkspaceRef;

  /**
   * Tags to apply to the anomaly detector.
   *
   * @default - no tags
   */
  readonly tags?: { [key: string]: string };
}

/**
 * An Amazon Managed Service for Prometheus anomaly detector.
 */
export class AnomalyDetector extends AnomalyDetectorBase {
  /**
   * Reference an existing anomaly detector by ARN.
   */
  public static fromAnomalyDetectorArn(scope: Construct, id: string, anomalyDetectorArn: string): IAnomalyDetector {
    class Import extends AnomalyDetectorBase {
      public readonly anomalyDetectorArn = anomalyDetectorArn;

      public constructor() {
        super(scope, id, { environmentFromArn: anomalyDetectorArn });
      }
    }

    return new Import();
  }

  /**
   * The ARN of the anomaly detector.
   */
  public readonly anomalyDetectorArn: string;

  private readonly anomalyDetector: CfnAnomalyDetector;

  public constructor(scope: Construct, id: string, props: AnomalyDetectorProps) {
    super(scope, id);

    validateEvaluationInterval(props.evaluationIntervalInSeconds);

    const randomCutForest = props.configuration.randomCutForest;
    const cfnAnomalyDetectorProps: CfnAnomalyDetectorProps = {
      alias: props.alias,
      configuration: {
        randomCutForest: {
          ignoreNearExpectedFromAbove: randomCutForest.ignoreNearExpectedFromAbove?._bind(),
          ignoreNearExpectedFromBelow: randomCutForest.ignoreNearExpectedFromBelow?._bind(),
          query: randomCutForest.query,
          sampleSize: randomCutForest.sampleSize,
          shingleSize: randomCutForest.shingleSize,
        },
      },
      evaluationIntervalInSeconds: props.evaluationIntervalInSeconds,
      labels: props.labels?.map((label) => ({ key: label.key, value: label.value })),
      missingDataAction: renderMissingDataAction(props.missingDataAction),
      tags: props.tags
        ? Object.entries(props.tags).map(([key, value]) => ({ key, value }))
        : undefined,
      workspace: props.workspace.workspaceRef.workspaceArn,
    };

    this.anomalyDetector = new CfnAnomalyDetector(this, 'Resource', cfnAnomalyDetectorProps);
    this.node.defaultChild = this.anomalyDetector;
    this.anomalyDetectorArn = this.anomalyDetector.attrArn;
  }
}

function renderMissingDataAction(action?: MissingDataAction): CfnAnomalyDetector.MissingDataActionProperty | undefined {
  switch (action) {
    case MissingDataAction.MARK_AS_ANOMALY:
      return { markAsAnomaly: true };
    case MissingDataAction.SKIP:
      return { skip: true };
    case undefined:
      return undefined;
  }
}

function validateEvaluationInterval(value: number | undefined): void {
  if (
    value !== undefined &&
    !Token.isUnresolved(value) &&
    (!Number.isFinite(value) || !Number.isInteger(value) || value < 30 || value > 86_400)
  ) {
    throw new Error(
      `evaluationIntervalInSeconds must be an integer from 30 through 86400, got ${value}`,
    );
  }
}
