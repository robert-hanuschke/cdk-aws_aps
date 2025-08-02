import { CfnWorkspace, CfnWorkspaceProps } from 'aws-cdk-lib/aws-aps';
import { IKey } from 'aws-cdk-lib/aws-kms';
import { Construct } from 'constructs';
import { validateAlertManagerDefinition, validateAlias, validateLoggingConfiguration, validateQueryLoggingConfiguration, validateWorkspaceConfiguration } from './validation/workspace-base';
import { IWorkspace, LoggingConfiguration, QueryLoggingConfiguration, WorkspaceBase, WorkspaceConfiguration } from './workspace-base';

/**
 * Properties for creating an Amazon Managed Service for Prometheus Workspace.
 */
export interface WorkspaceProps {
  /**
   * The alert manager definition, a YAML configuration for the alert manager in your Amazon
   * Managed Service for Prometheus workspace.
   */
  readonly alertManagerDefinition?: string;

  /**
   * The alias that is assigned to this workspace to help identify it. It does not need to be
   * unique.
   *
   * 0 to 100 characters
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
}

/**
 * Properties for importing an Amazon Managed Service for Prometheus Workspace from attributes.
 */
export interface WorkspaceAttributes {
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
   * The arn of this workspace.
   */
  readonly workspaceArn: string;
}

const IS_WORKSPACE = Symbol.for('@robhan-cdk-lib/aws_aps.Workspace');

export class Workspace extends WorkspaceBase {
  public static isWorkspace(x: any): x is Workspace {
    return IS_WORKSPACE in x;
  }

  public static fromWorkspaceAttributes(scope: Construct, id: string, attrs: WorkspaceAttributes): IWorkspace {
    class Import extends WorkspaceBase {
      public readonly alertManagerDefinition?: string;
      public readonly alias?: string;
      public readonly kmsKey?: IKey;
      public readonly loggingConfiguration?: LoggingConfiguration;
      public readonly queryLoggingConfiguration?: QueryLoggingConfiguration;
      public readonly workspaceConfiguration?: WorkspaceConfiguration;
      public readonly workspaceId: string;
      public readonly workspaceArn: string;
      constructor(attributes: WorkspaceAttributes) {
        super(scope, id);

        this.alertManagerDefinition = attributes.alertManagerDefinition;
        this.alias = attributes.alias;
        this.kmsKey = attributes.kmsKey;
        this.loggingConfiguration = attributes.loggingConfiguration;
        this.queryLoggingConfiguration = attributes.queryLoggingConfiguration;
        this.workspaceConfiguration = attributes.workspaceConfiguration;
        this.workspaceId = this.getWorkspaceId(attributes.workspaceArn);
        this.workspaceArn = attributes.workspaceArn;

      }
    }
    return new Import(attrs);
  }

  /**
   * Validates all workspace properties.
   *
   * @param props - The workspace properties to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * This method aggregates validation results from all individual property validators.
   * It throws an error if props is not an object.
   */
  private static validateProps(props: unknown): string[] {
    const errors: string[] = [];

    if (!props || typeof props !== 'object') {
      throw new Error('Workspace constructor properties must be an object');
    }
    const workspaceProps = props as WorkspaceProps;

    if (
      workspaceProps.alertManagerDefinition !== undefined
    ) {
      errors.push(...validateAlertManagerDefinition(workspaceProps.alertManagerDefinition).map((e) => `alertManagerDefinition: ${e}`));
    }

    if (
      workspaceProps.alias !== undefined
    ) {
      errors.push(...validateAlias(workspaceProps.alias).map((e) => `alias: ${e}`));
    }

    if (
      workspaceProps.loggingConfiguration !== undefined
    ) {
      errors.push(...validateLoggingConfiguration(workspaceProps.loggingConfiguration).map((e) => `loggingConfiguration: ${e}`));
    }

    if (
      workspaceProps.queryLoggingConfiguration !== undefined
    ) {
      errors.push(...validateQueryLoggingConfiguration(workspaceProps.queryLoggingConfiguration).map((e) => `queryLoggingConfiguration: ${e}`));
    }

    if (
      workspaceProps.workspaceConfiguration !== undefined
    ) {
      errors.push(...validateWorkspaceConfiguration(workspaceProps.workspaceConfiguration).map((e) => `workspaceConfiguration: ${e}`));
    }

    return errors;
  }

  /**
   * The alert manager definition, a YAML configuration for the alert manager in your Amazon
   * Managed Service for Prometheus workspace.
   */
  public readonly alertManagerDefinition?: string;

  /**
   * The alias that is assigned to this workspace to help identify it. It does not need to be
   * unique.
   */
  public readonly alias?: string;

  /**
   * The customer managed AWS KMS key to use for encrypting data within your workspace.
   */
  public readonly kmsKey?: IKey;

  /**
   * Contains information about the current rules and alerting logging configuration for the
   * workspace.
   *
   * Note: These logging configurations are only for rules and alerting logs.
   */
  public readonly loggingConfiguration?: LoggingConfiguration;

  /**
   * The definition of logging configuration in an Amazon Managed Service for Prometheus workspace.
   */
  public readonly queryLoggingConfiguration?: QueryLoggingConfiguration;

  /**
   * Use this structure to define label sets and the ingestion limits for time series that match
   * label sets, and to specify the retention period of the workspace.
   */
  public readonly workspaceConfiguration?: WorkspaceConfiguration;

  /**
   * The underlying CloudFormation resource.
   */
  private readonly workspace: CfnWorkspace;

  /**
   * The unique ID for the workspace.
   */
  public readonly workspaceId: string;

  /**
   * The ARN of the workspace.
   */
  public readonly workspaceArn: string;

  /**
   * The Prometheus endpoint available for this workspace..
   */
  public readonly prometheusEndpoint: string;

  constructor(scope: Construct, id: string, props: WorkspaceProps) {
    super(scope, id);

    Object.defineProperty(this, IS_WORKSPACE, { value: true });

    const errors = Workspace.validateProps(props);

    if (errors.length > 0) {
      throw new Error(`Invalid props:\n${errors.join('\n')}`);
    }

    this.alertManagerDefinition = props.alertManagerDefinition;
    this.alias = props.alias;
    this.kmsKey = props.kmsKey;
    this.loggingConfiguration = props.loggingConfiguration;
    this.queryLoggingConfiguration = props.queryLoggingConfiguration;
    this.workspaceConfiguration = props.workspaceConfiguration;

    let cfnWorkspaceProps: CfnWorkspaceProps = {
      alertManagerDefinition: props.alertManagerDefinition,
      alias: props.alias,
      kmsKeyArn: props.kmsKey?.keyArn,
      loggingConfiguration: props.loggingConfiguration && props.loggingConfiguration.logGroup ? {
        logGroupArn: props.loggingConfiguration.logGroup.logGroupArn,
      } : undefined,
      queryLoggingConfiguration: props.queryLoggingConfiguration ? {
        destinations: props.queryLoggingConfiguration.destinations.map((d) => ({
          cloudWatchLogs: {
            logGroupArn: d.cloudWatchLogs.logGroup.logGroupArn,
          },
          filters: d.filters,
        })),
      } : undefined,
      workspaceConfiguration: props.workspaceConfiguration,

    };

    this.workspace = new CfnWorkspace(this, 'Resource', cfnWorkspaceProps);
    this.node.defaultChild = this.workspace;

    this.workspaceId = this.workspace.attrWorkspaceId;
    this.workspaceArn = this.workspace.attrArn;
    this.prometheusEndpoint = this.workspace.attrPrometheusEndpoint;
  }
}
