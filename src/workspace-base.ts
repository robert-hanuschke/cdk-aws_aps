import { IResource, Resource } from 'aws-cdk-lib';
import { IKey } from 'aws-cdk-lib/aws-kms';
import { ILogGroup } from 'aws-cdk-lib/aws-logs';

/**
 * Contains information about the rules and alerting logging configuration for the workspace.
 */
export interface LoggingConfiguration {
  /**
   * The CloudWatch log group to which the vended log data will be published.
   */
  readonly logGroup?: ILogGroup;
}

/**
 * Configuration details for logging to CloudWatch Logs.
 */
export interface CloudWatchLogDestination {
  /**
   * The CloudWatch log group.
   */
  readonly logGroup: ILogGroup;
}

/**
 * Filtering criteria that determine which queries are logged.
 */
export interface LoggingFilter {
  /**
   * Integer.
   *
   * Minimum 0
   */
  readonly qspThreshold: number;
}

/**
 * The logging destination in an Amazon Managed Service for Prometheus workspace.
 */
export interface LoggingDestination {
  /**
   * Configuration details for logging to CloudWatch Logs.
   */
  readonly cloudWatchLogs: CloudWatchLogDestination;
  /**
   * Filtering criteria that determine which queries are logged.
   */
  readonly filters: LoggingFilter;
}

/**
 * The query logging configuration in an Amazon Managed Service for Prometheus workspace.
 */
export interface QueryLoggingConfiguration {
  /**
   * Defines a destination and its associated filtering criteria for query logging.
   *
   * Minimum 1 and maximum 1 item in array.
   */
  readonly destinations: LoggingDestination[];
}

/**
 *  This structure contains the limits that apply to time series that match one label set.
 */
export interface LimitsPerLabelSetEntry {
  /**
   * The maximum number of active series that can be ingested that match this label set.
   * Setting this to 0 causes no label set limit to be enforced, but it does cause Amazon Managed
   * Service for Prometheus to vend label set metrics to CloudWatch Logs.
   *
   * Minimum 0
   */
  readonly maxSeries?: number;
}

/**
 * A label is a name:value pair used to add context to ingested metrics. This structure defines the
 * name and value for one label that is used in a label set. You can set ingestion limits on time
 * series that match defined label sets, to help prevent a workspace from being overwhelmed with
 * unexpected spikes in time series ingestion.
 */
export interface Label {
  /**
   * The name for this label.
   *
   * Pattern: ^[a-zA-Z_][a-zA-Z0-9_]*$
   *
   * At least one character.
   */
  readonly name: string;
  /**
   * The value for this label.
   *
   * At least one character.
   */
  readonly value: string;
}

/**
 * This defines a label set for the workspace, and defines the ingestion limit for active time
 * series that match that label set. Each label name in a label set must be unique.
 */
export interface LimitsPerLabelSet {
  /**
   * This defines one label set that will have an enforced ingestion limit. You can set ingestion
   * limits on time series that match defined label sets, to help prevent a workspace from being
   * overwhelmed with unexpected spikes in time series ingestion.
   *
   * Label values accept all UTF-8 characters with one exception. If the label name is metric
   * name label __name__, then the metric part of the name must conform to the following pattern:
   * [a-zA-Z_:][a-zA-Z0-9_:]*
   *
   * Minimum 0
   */
  readonly labelSet: Label[];

  /**
   * This structure contains the information about the limits that apply to time series that
   * match this label set.
   */
  readonly limits: LimitsPerLabelSetEntry;
}

/**
 * Use this structure to define label sets and the ingestion limits for time series that match
 * label sets, and to specify the retention period of the workspace.
 */
export interface WorkspaceConfiguration {
  /**
   * This is an array of structures, where each structure defines a label set for the workspace,
   * and defines the ingestion limit for active time series for each of those label sets. Each
   * label name in a label set must be unique.
   *
   * Minimum 0
   */
  readonly limitsPerLabelSets?: LimitsPerLabelSet[];

  /**
   * Specifies how many days that metrics will be retained in the workspace.
   *
   * Minimum 1
   */
  readonly retentionPeriodInDays?: number;
}

export interface IWorkspace extends IResource {
  /**
   * The alert manager definition, a YAML configuration for the alert manager in your Amazon
   * Managed Service for Prometheus workspace.
   */
  readonly alertManagerDefinition?: string;

  /**
   * The alias that is assigned to this workspace to help identify it. It does not need to be
   * unique.
   */
  readonly alias?: string;

  /**
   * The customer managed AWS KMS key to use for encrypting data within your workspace.
   */
  readonly kmsKey?: IKey;

  /**
   * Contains information about the current rules and alerting logging configuration for the
   * workspace.
   *
   * Note: These logging configurations are only for rules and alerting logs.
   */
  readonly loggingConfiguration?: LoggingConfiguration;

  /**
   * The definition of logging configuration in an Amazon Managed Service for Prometheus workspace.
   */
  readonly queryLoggingConfiguration?: QueryLoggingConfiguration;

  /**
   * Use this structure to define label sets and the ingestion limits for time series that match
   * label sets, and to specify the retention period of the workspace.
   */
  readonly workspaceConfiguration?: WorkspaceConfiguration;

  /**
   * The unique ID for the workspace.
   * @attribute
   */
  readonly workspaceId: string;

  /**
   * The ARN of the workspace.
   * @attribute
   */
  readonly workspaceArn: string;
}

export abstract class WorkspaceBase extends Resource implements IWorkspace {
  /**
   * The alert manager definition, a YAML configuration for the alert manager in your Amazon
   * Managed Service for Prometheus workspace.
   */
  public abstract readonly alertManagerDefinition?: string;

  /**
   * The alias that is assigned to this workspace to help identify it. It does not need to be
   * unique.
   */
  public abstract readonly alias?: string;

  /**
   * The customer managed AWS KMS key to use for encrypting data within your workspace.
   */
  public abstract readonly kmsKey?: IKey;

  /**
   * Contains information about the current rules and alerting logging configuration for the
   * workspace.
   *
   * Note: These logging configurations are only for rules and alerting logs.
   */
  public abstract readonly loggingConfiguration?: LoggingConfiguration;

  /**
   * The definition of logging configuration in an Amazon Managed Service for Prometheus workspace.
   */
  public abstract readonly queryLoggingConfiguration?: QueryLoggingConfiguration;

  /**
   * Use this structure to define label sets and the ingestion limits for time series that match
   * label sets, and to specify the retention period of the workspace.
   */
  public abstract readonly workspaceConfiguration?: WorkspaceConfiguration;

  /**
   * The unique ID for the workspace.
   */
  public abstract readonly workspaceId: string;

  /**
   * The ARN of the workspace.
   */
  public abstract readonly workspaceArn: string;

  protected getWorkspaceId(workspaceArn: string) {
    return workspaceArn.substring(workspaceArn.lastIndexOf('/') + 1);
  }
}