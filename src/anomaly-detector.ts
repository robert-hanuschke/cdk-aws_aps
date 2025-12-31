import { validateObjectAttributes } from '@robhan-cdk-lib/utils';
import { CfnAnomalyDetector } from 'aws-cdk-lib/aws-aps';
import { Construct } from 'constructs';
import { AnomalyDetectorBase, AnomalyDetectorConfiguration, Label, MissingDataAction } from './anomaly-detector-base';
import { validateAlias, validateAnomalyDetectorConfiguration, validateEvaluationIntervalInSeconds, validateLabel, validateMissingDataAction } from './validation/anomaly-detector-base';
import { IWorkspace } from './workspace-base';

/**
 * Properties for creating an Amazon Managed Service for Prometheus Anomaly Detector.
 */
export interface AnomalyDetectorProps {
  /**
   * The user-friendly name of the anomaly detector. 1 to 128 characters length.
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
}

const IS_ANOMALY_DETECTOR = Symbol.for('@robhan-cdk-lib/aws_aps.AnomalyDetector');

export class AnomalyDetector extends AnomalyDetectorBase {
  public static isAnomalyDetector(x: any): x is AnomalyDetector {
    return IS_ANOMALY_DETECTOR in x;
  }

  /**
   * Validates all anomaly detector properties.
   *
   * @param props - The anomaly detector properties to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * This method aggregates validation results from all individual property validators.
   * It throws an error if props is not an object.
   */
  private static validateProps(props: unknown): string[] {
    const errors: string[] = [];

    if (!props || typeof props !== 'object') {
      throw new Error('AnomalyDetector constructor properties must be an object');
    }
    const anomalyDetectorProps = props as AnomalyDetectorProps;

    errors.push(...validateObjectAttributes({
      inputObject: anomalyDetectorProps,
      mandatoryAttributes: ['alias', 'configuration', 'workspace'],
      optionalAttributes: ['evaluationIntervalInSeconds', 'labels', 'missingDataAction'],
    }));


    if (anomalyDetectorProps.alias !== undefined) {
      errors.push(...validateAlias(anomalyDetectorProps.alias).map((e) => `alias: ${e}`));
    }

    if (anomalyDetectorProps.configuration !== undefined) {
      errors.push(...validateAnomalyDetectorConfiguration(anomalyDetectorProps.configuration).map((e) => `configuration: ${e}`));
    }

    if (anomalyDetectorProps.evaluationIntervalInSeconds !== undefined) {
      errors.push(...validateEvaluationIntervalInSeconds(anomalyDetectorProps.evaluationIntervalInSeconds).map((e) => `evaluationIntervalInSeconds: ${e}`));
    }

    if (anomalyDetectorProps.labels !== undefined) {
      errors.push(...anomalyDetectorProps.labels.map((l, i) => {
        return validateLabel(l).map((err) => `labels[${i}]: ${err}`);
      }).flat());
    }

    if (anomalyDetectorProps.missingDataAction !== undefined) {
      errors.push(...validateMissingDataAction(anomalyDetectorProps.missingDataAction).map((e) => `missingDataAction: ${e}`));
    }


    return errors;
  }

  /**
   * The user-friendly name of the anomaly detector. 1 to 64 characters length.
   *
   * Minimum length of 1. Maximum length of 64.
   * Pattern: [0-9A-Za-z][-.0-9A-Z_a-z]*
   */
  public readonly alias: string;

  /**
   * The algorithm configuration of the anomaly detector.
   */
  public readonly configuration: AnomalyDetectorConfiguration;

  /**
   * The frequency, in seconds, at which the anomaly detector evaluates metrics.
   *
   * Minimum value of 30. Maximum value of 86400.
   */
  public readonly evaluationIntervalInSeconds?: number;

  /**
   * The Amazon Managed Service for Prometheus metric labels associated with the anomaly detector.
   *
   * Map Entries: Minimum number of 0 items. Maximum number of 140 items.
   * Key Length Constraints: Minimum length of 1. Maximum length of 7168.
   * Key Pattern: (?!__)[a-zA-Z_][a-zA-Z0-9_]*
   * Value Length Constraints: Minimum length of 1. Maximum length of 7168.
   */
  public readonly labels?: Label[];

  /**
   * The action taken when data is missing during evaluation.
   */
  public readonly missingDataAction?: MissingDataAction;

  /**
   * An Amazon Managed Service for Prometheus workspace is a logical and isolated Prometheus server dedicated to ingesting, storing, and querying your Prometheus-compatible metrics.
   */
  public readonly workspace: IWorkspace;

  /**
   * The Amazon Resource Name (ARN) of the anomaly detector.
   */
  public readonly anomalyDetectorArn: string;

  constructor(scope: Construct, id: string, props: AnomalyDetectorProps) {
    super(scope, id);

    Object.defineProperty(this, IS_ANOMALY_DETECTOR, { value: true });

    const errors = AnomalyDetector.validateProps(props);

    if (errors.length > 0) {
      throw new Error(`Invalid props:\n${errors.join('\n')}`);
    }

    this.alias = props.alias;
    this.configuration = props.configuration;
    this.evaluationIntervalInSeconds = props.evaluationIntervalInSeconds;
    this.labels = props.labels;
    this.missingDataAction = props.missingDataAction;
    this.workspace = props.workspace;

    const resource = new CfnAnomalyDetector(this, 'Resource', {
      alias: props.alias,
      configuration: props.configuration,
      evaluationIntervalInSeconds: props.evaluationIntervalInSeconds,
      labels: props.labels,
      missingDataAction: props.missingDataAction,
      workspace: props.workspace.workspaceArn,
    });
    this.anomalyDetectorArn = resource.attrArn;
  }
}