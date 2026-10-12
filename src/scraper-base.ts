import { ArnFormat, IResource, Resource, ResourceProps } from 'aws-cdk-lib';
import { CfnScraper, IScraperRef, IWorkspaceRef, ScraperReference } from 'aws-cdk-lib/aws-aps';
import { ISecurityGroupRef, ISubnetRef } from 'aws-cdk-lib/aws-ec2';
import { IClusterRef } from 'aws-cdk-lib/aws-eks';
import { IRoleRef } from 'aws-cdk-lib/aws-iam';
import { ILogGroupRef } from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';

/**
 * A destination for metrics collected by a scraper.
 */
export abstract class ScraperDestination {
  /**
   * Send collected metrics from an Amazon EKS source to an Amazon Managed Service for Prometheus
   * workspace.
   *
   * VPC sources must use {@link cloudWatch} instead.
   */
  public static amp(workspace: IWorkspaceRef): ScraperDestination {
    return new AmpScraperDestination(workspace);
  }

  /**
   * Send collected metrics from an EKS or VPC source to a CloudWatch dataset.
   */
  public static cloudWatch(datasetArn: string): ScraperDestination {
    return new CloudWatchScraperDestination(datasetArn);
  }

  /** @internal */
  public abstract _bind(): CfnScraper.DestinationProperty;

  /** @internal */
  public abstract _isCloudWatch(): boolean;
}

class AmpScraperDestination extends ScraperDestination {
  public constructor(private readonly workspace: IWorkspaceRef) {
    super();
  }

  public _bind(): CfnScraper.DestinationProperty {
    return {
      ampConfiguration: {
        workspaceArn: this.workspace.workspaceRef.workspaceArn,
      },
    };
  }

  public _isCloudWatch(): boolean {
    return false;
  }
}

class CloudWatchScraperDestination extends ScraperDestination {
  public constructor(private readonly datasetArn: string) {
    super();
  }

  public _bind(): CfnScraper.DestinationProperty {
    return {
      cloudWatchConfiguration: {
        datasetArn: this.datasetArn,
      },
    };
  }

  public _isCloudWatch(): boolean {
    return true;
  }
}

/**
 * Options for collecting metrics from an Amazon EKS cluster.
 */
export interface EksScraperSourceOptions {
  /**
   * The EKS cluster from which metrics are collected.
   *
   * The cluster must have private endpoint access and VPC DNS enabled. Automatic scraper access
   * entries require EKS authentication mode `API` or `API_AND_CONFIG_MAP`; otherwise configure the
   * required Kubernetes RBAC permissions manually.
   */
  readonly cluster: IClusterRef;

  /**
   * Security groups used to reach scrape targets.
   *
   * `undefined` omits `securityGroupIds` and leaves selection to the service. An explicit empty
   * array is preserved in the synthesized resource. Supply only groups whose rules allow the
   * intended private scrape traffic.
   *
   * @default - no explicit security groups
   */
  readonly securityGroups?: ISecurityGroupRef[];

  /**
   * Subnets used to reach scrape targets. Each subnet must have an available IP address.
   */
  readonly subnets: ISubnetRef[];
}

/**
 * Options for collecting metrics from resources reachable in a VPC.
 */
export interface VpcScraperSourceOptions {
  /**
   * Security groups used to reach scrape targets.
   */
  readonly securityGroups: ISecurityGroupRef[];

  /**
   * Subnets used to reach scrape targets. Prefer private subnets and narrowly scoped security
   * group rules for the intended Prometheus endpoints.
   */
  readonly subnets: ISubnetRef[];
}

/**
 * A source from which a scraper collects metrics.
 */
export abstract class ScraperSource {
  /**
   * Collect metrics from an Amazon EKS cluster.
   */
  public static eks(options: EksScraperSourceOptions): ScraperSource {
    return new EksScraperSource(options);
  }

  /**
   * Collect metrics from resources reachable in a VPC.
   *
   * This source must be paired with {@link ScraperDestination.cloudWatch}.
   */
  public static vpc(options: VpcScraperSourceOptions): ScraperSource {
    return new VpcScraperSource(options);
  }

  /** @internal */
  public abstract _bind(): CfnScraper.SourceProperty;

  /** @internal */
  public abstract _requiresCloudWatchDestination(): boolean;
}

class EksScraperSource extends ScraperSource {
  public constructor(private readonly options: EksScraperSourceOptions) {
    super();
  }

  public _bind(): CfnScraper.SourceProperty {
    return {
      eksConfiguration: {
        clusterArn: this.options.cluster.clusterRef.clusterArn,
        securityGroupIds: this.options.securityGroups?.map((securityGroup) => securityGroup.securityGroupRef.securityGroupId),
        subnetIds: this.options.subnets.map((subnet) => subnet.subnetRef.subnetId),
      },
    };
  }

  public _requiresCloudWatchDestination(): boolean {
    return false;
  }
}

class VpcScraperSource extends ScraperSource {
  public constructor(private readonly options: VpcScraperSourceOptions) {
    super();
  }

  public _bind(): CfnScraper.SourceProperty {
    return {
      vpcConfiguration: {
        securityGroupIds: this.options.securityGroups.map((securityGroup) => securityGroup.securityGroupRef.securityGroupId),
        subnetIds: this.options.subnets.map((subnet) => subnet.subnetRef.subnetId),
      },
    };
  }

  public _requiresCloudWatchDestination(): boolean {
    return true;
  }
}

/**
 * A Prometheus scrape configuration.
 */
export abstract class ScrapeConfiguration {
  /**
   * Create a scrape configuration from Prometheus YAML.
   *
   * The CloudFormation resource provider accepts raw YAML and serializes it to the service API's
   * blob shape. Do not base64-encode this value.
   */
  public static fromString(configuration: string): ScrapeConfiguration {
    return new InlineScrapeConfiguration(configuration);
  }

  /** @internal */
  public abstract _bind(): string;
}

class InlineScrapeConfiguration extends ScrapeConfiguration {
  public constructor(private readonly configurationBlob: string) {
    super();
  }

  public _bind(): string {
    return this.configurationBlob;
  }
}

/**
 * IAM roles used by a scraper to access its source and destination.
 *
 * Supply both roles for cross-account collection. The caller owns the roles' trust and permissions.
 * Both roles are also required when writing to a workspace encrypted with a customer-managed KMS
 * key, including same-account collection.
 */
export interface ScraperRoleConfiguration {
  /**
   * The role used to access the metric source.
   *
   * @default - a service role is created by Amazon Managed Service for Prometheus
   */
  readonly sourceRole?: IRoleRef;

  /**
   * The role used to write to the destination.
   *
   * @default - a service role is created by Amazon Managed Service for Prometheus
   */
  readonly targetRole?: IRoleRef;
}

/**
 * A scraper component that can emit diagnostic logs.
 */
export interface ScraperComponent {
  /**
   * The component type.
   */
  readonly type: ScraperComponentType;

  /**
   * Component-specific logging options.
   *
   * @default - no component-specific options
   */
  readonly options?: { [key: string]: string };
}

/**
 * Components of a scraper that support diagnostic logging.
 */
export enum ScraperComponentType {
  /**
   * Service discovery.
   */
  SERVICE_DISCOVERY = 'SERVICE_DISCOVERY',

  /**
   * Metric collection.
   */
  COLLECTOR = 'COLLECTOR',

  /**
   * Metric export.
   */
  EXPORTER = 'EXPORTER',
}

/**
 * Diagnostic logging configuration for a scraper.
 */
export interface ScraperLoggingConfiguration {
  /**
   * The CloudWatch log group that receives scraper logs.
   */
  readonly logGroup: ILogGroupRef;

  /**
   * The scraper components for which logging is enabled.
   */
  readonly components: ScraperComponent[];
}

/**
 * An Amazon Managed Service for Prometheus scraper.
 */
export interface IScraper extends IResource, IScraperRef {
  /**
   * The ARN of the scraper.
   *
   * @attribute
   */
  readonly scraperArn: string;

  /**
   * The unique ID of the scraper.
   *
   * @attribute
   */
  readonly scraperId: string;
}

/**
 * Base implementation shared by owned and referenced scrapers.
 *
 * @internal
 */
export abstract class ScraperBase extends Resource implements IScraper {
  public abstract readonly scraperArn: string;
  public abstract readonly scraperId: string;

  public get scraperRef(): ScraperReference {
    return { scraperArn: this.scraperArn };
  }

  protected constructor(scope: Construct, id: string, props: ResourceProps = {}) {
    super(scope, id, props);
  }

  protected scraperIdFromArn(scraperArn: string): string {
    const resourceName = this.stack.splitArn(scraperArn, ArnFormat.SLASH_RESOURCE_NAME).resourceName;
    if (!resourceName) {
      throw new Error(`Scraper ARN must include a resource name: ${scraperArn}`);
    }
    return resourceName;
  }
}
