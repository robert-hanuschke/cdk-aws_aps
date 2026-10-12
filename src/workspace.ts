import { CfnWorkspace, CfnWorkspaceProps } from 'aws-cdk-lib/aws-aps';
import { IKeyRef } from 'aws-cdk-lib/aws-kms';
import { Construct } from 'constructs';
import {
  IWorkspace,
  WorkspaceBase,
  WorkspaceConfiguration,
  WorkspaceLoggingConfiguration,
  WorkspaceQueryLoggingConfiguration,
} from './workspace-base';

/**
 * Properties for an Amazon Managed Service for Prometheus workspace.
 */
export interface WorkspaceProps {
  /**
   * The alert manager definition as YAML.
   *
   * @default - no alert manager definition
   */
  readonly alertManagerDefinition?: string;

  /**
   * A user-assigned alias for the workspace.
   *
   * @default - no alias
   */
  readonly alias?: string;

  /**
   * The customer-managed KMS key used to encrypt workspace data.
   *
   * A managed scraper writing to a workspace encrypted with a customer-managed key requires an
   * explicit scraper role configuration, even when the scraper and workspace share an account.
   * Resource-policy principals also require access to this key.
   *
   * @default - an AWS-owned key
   */
  readonly kmsKey?: IKeyRef;

  /**
   * Rules and alerting logging configuration.
   *
   * @default - rules and alerting logs are not published
   */
  readonly loggingConfiguration?: WorkspaceLoggingConfiguration;

  /**
   * Query logging configuration.
   *
   * @default - queries are not logged
   */
  readonly queryLoggingConfiguration?: WorkspaceQueryLoggingConfiguration;

  /**
   * Workspace retention and ingestion settings.
   *
   * @default - service defaults
   */
  readonly workspaceConfiguration?: WorkspaceConfiguration;

  /**
   * Tags to apply to the workspace.
   *
   * @default - no tags
   */
  readonly tags?: { [key: string]: string };
}

/**
 * Attributes for referencing an existing workspace.
 */
export interface WorkspaceAttributes {
  /**
   * The ARN of the workspace.
   */
  readonly workspaceArn: string;

  /**
   * The Prometheus-compatible query endpoint.
   *
   * @default - derived from the workspace ARN
   */
  readonly prometheusEndpoint?: string;
}

/**
 * An Amazon Managed Service for Prometheus workspace.
 */
export class Workspace extends WorkspaceBase {
  /**
   * Reference an existing workspace by ARN.
   */
  public static fromWorkspaceArn(scope: Construct, id: string, workspaceArn: string): IWorkspace {
    return Workspace.fromWorkspaceAttributes(scope, id, { workspaceArn });
  }

  /**
   * Reference an existing workspace from its attributes.
   */
  public static fromWorkspaceAttributes(scope: Construct, id: string, attrs: WorkspaceAttributes): IWorkspace {
    class Import extends WorkspaceBase {
      public readonly workspaceArn = attrs.workspaceArn;
      public readonly workspaceId = this.workspaceIdFromArn(attrs.workspaceArn);
      public readonly prometheusEndpoint = attrs.prometheusEndpoint ?? this.prometheusEndpointFromArn(attrs.workspaceArn);

      public constructor() {
        super(scope, id, { environmentFromArn: attrs.workspaceArn });
      }
    }

    return new Import();
  }

  /**
   * The ARN of the workspace.
   */
  public readonly workspaceArn: string;

  /**
   * The unique ID of the workspace.
   */
  public readonly workspaceId: string;

  /**
   * The Prometheus-compatible query endpoint for the workspace.
   */
  public readonly prometheusEndpoint: string;

  private readonly workspace: CfnWorkspace;

  public constructor(scope: Construct, id: string, props: WorkspaceProps = {}) {
    super(scope, id);

    const cfnWorkspaceProps: CfnWorkspaceProps = {
      alertManagerDefinition: props.alertManagerDefinition,
      alias: props.alias,
      kmsKeyArn: props.kmsKey?.keyRef.keyArn,
      loggingConfiguration: props.loggingConfiguration
        ? { logGroupArn: props.loggingConfiguration.logGroup.logGroupRef.logGroupArn }
        : undefined,
      queryLoggingConfiguration: props.queryLoggingConfiguration
        ? {
          destinations: [{
            cloudWatchLogs: {
              logGroupArn: props.queryLoggingConfiguration.logGroup.logGroupRef.logGroupArn,
            },
            filters: {
              qspThreshold: props.queryLoggingConfiguration.qspThreshold ?? 0,
            },
          }],
        }
        : undefined,
      tags: props.tags
        ? Object.entries(props.tags).map(([key, value]) => ({ key, value }))
        : undefined,
      workspaceConfiguration: props.workspaceConfiguration
        ? {
          limitsPerLabelSets: props.workspaceConfiguration.labelSets?.map((labelSet) => ({
            labelSet: labelSet.labels.map((label) => ({
              name: label.name,
              value: label.value,
            })),
            limits: {
              maxSeries: labelSet.limits.maxSeries,
            },
          })),
          outOfOrderTimeWindowInSeconds: props.workspaceConfiguration.outOfOrderTimeWindowInSeconds,
          retentionPeriodInDays: props.workspaceConfiguration.retentionPeriodInDays,
          ruleQueryOffsetInSeconds: props.workspaceConfiguration.ruleQueryOffsetInSeconds,
        }
        : undefined,
    };

    this.workspace = new CfnWorkspace(this, 'Resource', cfnWorkspaceProps);
    this.node.defaultChild = this.workspace;

    this.workspaceArn = this.workspace.attrArn;
    this.workspaceId = this.workspace.attrWorkspaceId;
    this.prometheusEndpoint = this.workspace.attrPrometheusEndpoint;
  }
}
