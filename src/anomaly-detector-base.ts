import {
  IResource,
  Resource,
  ResourceProps,
  Token,
} from 'aws-cdk-lib';
import {
  AnomalyDetectorReference,
  CfnAnomalyDetector,
  IAnomalyDetectorRef,
} from 'aws-cdk-lib/aws-aps';
import { Construct } from 'constructs';

/**
 * Threshold settings for values close to the expected value.
 */
export abstract class IgnoreNearExpected {
  /**
   * Ignore values within a non-negative absolute amount of the expected value.
   */
  public static amount(amount: number): IgnoreNearExpected {
    validateNonNegativeTolerance('amount', amount);
    return new IgnoreNearExpectedAmount(amount);
  }

  /**
   * Ignore values within a non-negative ratio of the expected value.
   */
  public static ratio(ratio: number): IgnoreNearExpected {
    validateNonNegativeTolerance('ratio', ratio);
    return new IgnoreNearExpectedRatio(ratio);
  }

  /** @internal */
  public abstract _bind(): CfnAnomalyDetector.IgnoreNearExpectedProperty;
}

class IgnoreNearExpectedAmount extends IgnoreNearExpected {
  public constructor(private readonly amountValue: number) {
    super();
  }

  public _bind(): CfnAnomalyDetector.IgnoreNearExpectedProperty {
    return { amount: this.amountValue };
  }
}

class IgnoreNearExpectedRatio extends IgnoreNearExpected {
  public constructor(private readonly ratioValue: number) {
    super();
  }

  public _bind(): CfnAnomalyDetector.IgnoreNearExpectedProperty {
    return { ratio: this.ratioValue };
  }
}

/**
 * Random Cut Forest configuration for anomaly detection.
 */
export interface RandomCutForestConfiguration {
  /**
   * Values above the expected value that should not be treated as anomalies.
   *
   * @default - no upper tolerance
   */
  readonly ignoreNearExpectedFromAbove?: IgnoreNearExpected;

  /**
   * Values below the expected value that should not be treated as anomalies.
   *
   * @default - no lower tolerance
   */
  readonly ignoreNearExpectedFromBelow?: IgnoreNearExpected;

  /**
   * The PromQL query evaluated by the detector.
   *
   * The service requires the query to be wrapped by one of these aggregation operators: `avg`,
   * `count`, `group`, `max`, `min`, `quantile`, `stddev`, `stdvar`, or `sum`. Query syntax and
   * aggregation semantics are validated by Amazon Managed Service for Prometheus.
   */
  readonly query: string;

  /**
   * The number of data points sampled by the algorithm.
   *
   * @default 256
   */
  readonly sampleSize?: number;

  /**
   * The number of consecutive data points in each shingle.
   *
   * @default 8
   */
  readonly shingleSize?: number;
}

/**
 * Algorithm configuration for an anomaly detector.
 */
export interface AnomalyDetectorConfiguration {
  /**
   * Random Cut Forest algorithm settings.
   */
  readonly randomCutForest: RandomCutForestConfiguration;
}

/**
 * A metric label associated with an anomaly detector.
 */
export interface AnomalyDetectorLabel {
  /**
   * The label key.
   */
  readonly key: string;

  /**
   * The label value.
   */
  readonly value: string;
}

/**
 * The action to take when evaluation data is missing.
 */
export enum MissingDataAction {
  /**
   * Treat the missing data point as anomalous.
   */
  MARK_AS_ANOMALY = 'MARK_AS_ANOMALY',

  /**
   * Skip evaluation for the missing data point.
   */
  SKIP = 'SKIP',
}

/**
 * An Amazon Managed Service for Prometheus anomaly detector.
 */
export interface IAnomalyDetector extends IResource, IAnomalyDetectorRef {
  /**
   * The ARN of the anomaly detector.
   *
   * @attribute
   */
  readonly anomalyDetectorArn: string;
}

/**
 * Base implementation shared by owned and referenced anomaly detectors.
 *
 * @internal
 */
export abstract class AnomalyDetectorBase extends Resource implements IAnomalyDetector {
  public abstract readonly anomalyDetectorArn: string;

  public get anomalyDetectorRef(): AnomalyDetectorReference {
    return { anomalyDetectorArn: this.anomalyDetectorArn };
  }

  protected constructor(scope: Construct, id: string, props: ResourceProps = {}) {
    super(scope, id, props);
  }
}

function validateNonNegativeTolerance(name: string, value: number): void {
  if (!Token.isUnresolved(value) && (!Number.isFinite(value) || value < 0)) {
    throw new Error(`${name} must be a non-negative finite number, got ${value}`);
  }
}
