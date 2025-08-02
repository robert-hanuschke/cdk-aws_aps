import { IResource, Resource } from 'aws-cdk-lib';
import { ISecurityGroup, ISubnet } from 'aws-cdk-lib/aws-ec2';
import { ICluster } from 'aws-cdk-lib/aws-eks';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { IWorkspace } from './workspace-base';

/**
 * The AmpConfiguration structure defines the Amazon Managed Service for Prometheus instance a scraper should send metrics to.
 */
export interface AmpConfiguration {
  /**
   * The Amazon Managed Service for Prometheus workspace
   */
  readonly workspace: IWorkspace;
}

/**
 * Where to send the metrics from a scraper.
 */
export interface Destination {
  /**
   * The Amazon Managed Service for Prometheus workspace to send metrics to.
   */
  readonly ampConfiguration: AmpConfiguration;
}

/**
 * The role configuration in an Amazon Managed Service for Prometheus scraper.
 */
export interface RoleConfiguration {
  /**
   * The source role
   */
  readonly sourceRole?: IRole;

  /**
   * The target role
   */
  readonly targetRole?: IRole;
}

/**
 * A scrape configuration for a scraper, base 64 encoded.
 */
export interface ScrapeConfiguration {
  /**
   * The base 64 encoded scrape configuration file.
   */
  readonly configurationBlob: string;
}

/**
 * The EksConfiguration structure describes the connection to the Amazon EKS cluster from which a scraper collects metrics.
 */
export interface EksConfiguration {
  /**
   * The Amazon EKS cluster
   */
  readonly cluster: ICluster;

  /**
   * A list of the security group IDs for the Amazon EKS cluster VPC configuration.
   *
   * Min 1, max 5.
   */
  readonly securityGroups?: ISecurityGroup[];

  /**
   * A list of subnets for the Amazon EKS cluster VPC configuration.
   *
   * Min 1, max 5.
   */
  readonly subnets: ISubnet[];
}

/**
 * The source of collected metrics for a scraper.
 */
export interface Source {
  /**
   * The Amazon EKS cluster from which a scraper collects metrics.
   */
  readonly eksConfiguration: EksConfiguration;
}

export interface IScraper extends IResource {
  /**
   * An optional user-assigned scraper alias.
   *
   * 1-100 characters.
   *
   * Pattern: ^[0-9A-Za-z][-.0-9A-Z_a-z]*$
   */
  readonly alias?: string;

  /**
   * The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.
   */
  readonly destination: Destination;

  /**
   * The role configuration in an Amazon Managed Service for Prometheus scraper.
   */
  readonly roleConfiguration?: RoleConfiguration;

  /**
   * The configuration in use by the scraper.
   */
  readonly scrapeConfiguration: ScrapeConfiguration;

  /**
   * The Amazon EKS cluster from which the scraper collects metrics.
   */
  readonly source: Source;

  /**
   * The ID of the scraper.
   * @attribute
   */
  readonly scraperId: string;

  /**
   * The ARN of the scraper.
   * @attribute
   */
  readonly scraperArn: string;

}

export abstract class ScraperBase extends Resource implements IScraper {
  /**
   * An optional user-assigned scraper alias.
   *
   * 1-100 characters.
   *
   * Pattern: ^[0-9A-Za-z][-.0-9A-Z_a-z]*$
   */
  public abstract readonly alias?: string;

  /**
   * The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.
   */
  public abstract readonly destination: Destination;

  /**
   * The role configuration in an Amazon Managed Service for Prometheus scraper.
   */
  public abstract readonly roleConfiguration?: RoleConfiguration;

  /**
   * The configuration in use by the scraper.
   */
  public abstract readonly scrapeConfiguration: ScrapeConfiguration;

  /**
   * The Amazon EKS cluster from which the scraper collects metrics.
   */
  public abstract readonly source: Source;

  /**
   * The ID of the scraper.
   */
  public abstract readonly scraperId: string;

  /**
   * The ARN of the scraper.
   */
  public abstract readonly scraperArn: string;

  protected getScraperId(scraperArn: string) {
    return scraperArn.substring(scraperArn.lastIndexOf('/') + 1);
  }
}