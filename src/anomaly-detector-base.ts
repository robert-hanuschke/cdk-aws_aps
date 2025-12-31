import { IResource, Resource } from 'aws-cdk-lib';
import { IWorkspace } from './workspace-base';

/**
 * Configuration for threshold settings that determine when values near expected values should be ignored during anomaly detection.
 */
export interface IgnoreNearExpected {
  /**
   * The absolute amount by which values can differ from expected values before being considered anomalous.
   */
  readonly amount?: number;

  /**
   * The ratio by which values can differ from expected values before being considered anomalous.
   */
  readonly ratio?: number;
}

/**
 * Configuration for the Random Cut Forest algorithm used for anomaly detection in time-series data.
 */
export interface RandomCutForestConfiguration {
  /**
   * Configuration for ignoring values that are near expected values from above during anomaly detection.
   */
  readonly ignoreNearExpectedFromAbove?: IgnoreNearExpected;

  /**
   * Configuration for ignoring values that are near expected values from below during anomaly detection.
   */
  readonly ignoreNearExpectedFromBelow?: IgnoreNearExpected;

  /**
   * The Prometheus query used to retrieve the time-series data for anomaly detection. 1 to 8192 characters length.
   */
  readonly query: string;

  /**
   * The number of data points sampled from the input stream for the Random Cut Forest algorithm. The default number is 256 consecutive data points.
   *
   * Minimum: 256
   * Maximum: 1024
   */
  readonly sampleSize?: number;

  /**
   * The number of consecutive data points used to create a shingle for the Random Cut Forest algorithm. The default number is 8 consecutive data points.
   *
   * Minimum: 2
   * Maximum: 1024
   */
  readonly shingleSize?: number;
}

/**
 * The configuration for the anomaly detection algorithm.
 */
export interface AnomalyDetectorConfiguration {
  /**
   * The Random Cut Forest algorithm configuration for anomaly detection.
   */
  readonly randomCutForest: RandomCutForestConfiguration;
}

/**
 * The Amazon Managed Service for Prometheus metric labels associated with the anomaly detector.
 */
export interface Label {
  /**
   * The key of the label. 1 to 128 characters length.
   */
  readonly key: string;

  /**
   * The value for this label. 0 to 256 characters length.
   */
  readonly value: string;
}

/**
 * Specifies the action to take when data is missing during anomaly detection evaluation.
 */
export interface MissingDataAction {
  /**
   * Marks missing data points as anomalies.
   */
  readonly markAsAnomaly?: boolean;

  /**
   * Skips evaluation when data is missing.
   */
  readonly skip?: boolean;
}

export interface IAnomalyDetector extends IResource {
  /**
   * The user-friendly name of the anomaly detector. 1 to 128 characters length.
   *
   * Minimum length of 1. Maximum length of 64.
   * Pattern: [0-9A-Za-z][-.0-9A-Z_a-z]*
   */
  readonly alias: string;

  /**
   * The algorithm configuration of the anomaly detector.
   */
  readonly configuration: AnomalyDetectorConfiguration;

  /**
   * The frequency, in seconds, at which the anomaly detector evaluates metrics.
   *
   * Minimum value of 30. Maximum value of 86400.
   */
  readonly evaluationIntervalInSeconds?: number;

  /**
   * The Amazon Managed Service for Prometheus metric labels associated with the anomaly detector.
   *
   * Map Entries: Minimum number of 0 items. Maximum number of 140 items.
   * Key Length Constraints: Minimum length of 1. Maximum length of 7168.
   * Key Pattern: (?!__)[a-zA-Z_][a-zA-Z0-9_]*
   * Value Length Constraints: Minimum length of 1. Maximum length of 7168.
   */
  readonly labels?: Label[];

  /**
   * The action taken when data is missing during evaluation.
   */
  readonly missingDataAction?: MissingDataAction;

  /**
   * An Amazon Managed Service for Prometheus workspace is a logical and isolated Prometheus server dedicated to ingesting, storing, and querying your Prometheus-compatible metrics.
   */
  readonly workspace: IWorkspace;

  /**
   * The Amazon Resource Name (ARN) of the anomaly detector.
   * @attribute
   */
  readonly anomalyDetectorArn: string;
}

export abstract class AnomalyDetectorBase extends Resource implements IAnomalyDetector {
  /**
   * The user-friendly name of the anomaly detector. 1 to 64 characters length.
   *
   * Minimum length of 1. Maximum length of 64.
   * Pattern: [0-9A-Za-z][-.0-9A-Z_a-z]*
   */
  public abstract readonly alias: string;

  /**
   * The algorithm configuration of the anomaly detector.
   */
  public abstract readonly configuration: AnomalyDetectorConfiguration;

  /**
   * The frequency, in seconds, at which the anomaly detector evaluates metrics.
   *
   * Minimum value of 30. Maximum value of 86400.
   */
  public abstract readonly evaluationIntervalInSeconds?: number;

  /**
   * The Amazon Managed Service for Prometheus metric labels associated with the anomaly detector.
   *
   * Map Entries: Minimum number of 0 items. Maximum number of 140 items.
   * Key Length Constraints: Minimum length of 1. Maximum length of 7168.
   * Key Pattern: (?!__)[a-zA-Z_][a-zA-Z0-9_]*
   * Value Length Constraints: Minimum length of 1. Maximum length of 7168.
   */
  public abstract readonly labels?: Label[];

  /**
   * The action taken when data is missing during evaluation.
   */
  public abstract readonly missingDataAction?: MissingDataAction;

  /**
   * An Amazon Managed Service for Prometheus workspace is a logical and isolated Prometheus server dedicated to ingesting, storing, and querying your Prometheus-compatible metrics.
   */
  public abstract readonly workspace: IWorkspace;

  /**
   * The Amazon Resource Name (ARN) of the anomaly detector.
   * @attribute
   */
  public abstract readonly anomalyDetectorArn: string;
}