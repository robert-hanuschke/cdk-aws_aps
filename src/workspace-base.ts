import { ArnFormat, IResource, Resource, ResourceProps, Token } from 'aws-cdk-lib';
import { IWorkspaceRef, WorkspaceReference } from 'aws-cdk-lib/aws-aps';
import { ILogGroupRef } from 'aws-cdk-lib/aws-logs';
import { RegionInfo } from 'aws-cdk-lib/region-info';
import { Construct } from 'constructs';

/**
 * The rules and alerting log destination for an Amazon Managed Service for Prometheus workspace.
 */
export interface WorkspaceLoggingConfiguration {
  /**
   * The CloudWatch log group to which rules and alerting logs are published.
   */
  readonly logGroup: ILogGroupRef;
}

/**
 * The query log destination and filtering criteria for a workspace.
 */
export interface WorkspaceQueryLoggingConfiguration {
  /**
   * The CloudWatch log group to which query logs are published.
   */
  readonly logGroup: ILogGroupRef;

  /**
   * The Query Samples Processed threshold above which queries are logged.
   *
   * When query logging is enabled, the default `0` makes every query that processes one or more
   * samples eligible for logging. Consider log volume, cost, and query-content sensitivity when
   * choosing this value.
   *
   * @default 0
   */
  readonly qspThreshold?: number;
}

/**
 * The limits that apply to time series matching a workspace label set.
 */
export interface WorkspaceLabelSetLimits {
  /**
   * The maximum number of active series that can be ingested for the label set.
   *
   * A value of `0` disables the limit while still publishing label-set metrics.
   *
   * @default 0
   */
  readonly maxSeries?: number;
}

/**
 * A label used to identify a set of ingested time series.
 */
export interface WorkspaceLabel {
  /**
   * The label name.
   */
  readonly name: string;

  /**
   * The label value.
   */
  readonly value: string;
}

/**
 * A label set and the ingestion limits that apply to matching time series.
 */
export interface WorkspaceLabelSet {
  /**
   * The labels that identify matching time series.
   */
  readonly labels: WorkspaceLabel[];

  /**
   * The limits for time series matching this label set.
   */
  readonly limits: WorkspaceLabelSetLimits;
}

/**
 * Workspace-level retention, query, and ingestion settings.
 */
export interface WorkspaceConfiguration {
  /**
   * Label sets with individual active-series limits.
   *
   * @default - no label-set-specific limits
   */
  readonly labelSets?: WorkspaceLabelSet[];

  /**
   * The time window, in seconds, during which out-of-order samples are accepted.
   *
   * @default - the service default
   */
  readonly outOfOrderTimeWindowInSeconds?: number;

  /**
   * The number of days to retain metrics.
   *
   * @default - the service default
   */
  readonly retentionPeriodInDays?: number;

  /**
   * The duration, in seconds, by which rule evaluation queries are offset into the past.
   *
   * @default - the service default
   */
  readonly ruleQueryOffsetInSeconds?: number;
}

/**
 * An Amazon Managed Service for Prometheus workspace.
 */
export interface IWorkspace extends IResource, IWorkspaceRef {
  /**
   * The ARN of the workspace.
   *
   * @attribute
   */
  readonly workspaceArn: string;

  /**
   * The unique ID of the workspace.
   *
   * @attribute
   */
  readonly workspaceId: string;

  /**
   * The Prometheus-compatible query endpoint for the workspace.
   *
   * @attribute
   */
  readonly prometheusEndpoint: string;
}

/**
 * Base implementation shared by owned and referenced workspaces.
 *
 * @internal
 */
export abstract class WorkspaceBase extends Resource implements IWorkspace {
  public abstract readonly workspaceArn: string;
  public abstract readonly workspaceId: string;
  public abstract readonly prometheusEndpoint: string;

  public get workspaceRef(): WorkspaceReference {
    return { workspaceArn: this.workspaceArn };
  }

  protected constructor(scope: Construct, id: string, props: ResourceProps = {}) {
    super(scope, id, props);
  }

  protected workspaceIdFromArn(workspaceArn: string): string {
    const resourceName = this.stack.splitArn(workspaceArn, ArnFormat.SLASH_RESOURCE_NAME).resourceName;
    if (!resourceName) {
      throw new Error(`Workspace ARN must include a resource name: ${workspaceArn}`);
    }
    return resourceName;
  }

  protected prometheusEndpointFromArn(workspaceArn: string): string {
    const arn = this.stack.splitArn(workspaceArn, ArnFormat.SLASH_RESOURCE_NAME);
    const workspaceId = this.workspaceIdFromArn(workspaceArn);
    if (!arn.region) {
      throw new Error(`Workspace ARN must include a region: ${workspaceArn}`);
    }
    const domainSuffix = Token.isUnresolved(arn.region)
      ? this.stack.urlSuffix
      : RegionInfo.get(arn.region).domainSuffix ?? this.stack.urlSuffix;
    return `https://aps-workspaces.${arn.region}.${domainSuffix}/workspaces/${workspaceId}/`;
  }
}
