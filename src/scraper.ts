import { CfnScraper, CfnScraperProps } from 'aws-cdk-lib/aws-aps';
import { Construct } from 'constructs';
import {
  IScraper,
  ScrapeConfiguration,
  ScraperBase,
  ScraperDestination,
  ScraperLoggingConfiguration,
  ScraperRoleConfiguration,
  ScraperSource,
} from './scraper-base';

/**
 * Properties for an Amazon Managed Service for Prometheus scraper.
 */
export interface ScraperProps {
  /**
   * A user-assigned alias for the scraper.
   *
   * @default - no alias
   */
  readonly alias?: string;

  /**
   * The destination for collected metrics.
   */
  readonly destination: ScraperDestination;

  /**
   * IAM roles used to access the source and destination.
   *
   * Required for cross-account collection and for workspaces encrypted with a customer-managed
   * KMS key. The caller is responsible for the roles' trust and permissions.
   *
   * @default - service-created roles
   */
  readonly roleConfiguration?: ScraperRoleConfiguration;

  /**
   * The Prometheus scrape configuration.
   */
  readonly scrapeConfiguration: ScrapeConfiguration;

  /**
   * Diagnostic logging configuration.
   *
   * @default - scraper diagnostic logging is disabled
   */
  readonly loggingConfiguration?: ScraperLoggingConfiguration;

  /**
   * The source from which metrics are collected.
   */
  readonly source: ScraperSource;

  /**
   * Tags to apply to the scraper.
   *
   * @default - no tags
   */
  readonly tags?: { [key: string]: string };
}

/**
 * An Amazon Managed Service for Prometheus scraper.
 */
export class Scraper extends ScraperBase {
  /**
   * Reference an existing scraper by ARN.
   */
  public static fromScraperArn(scope: Construct, id: string, scraperArn: string): IScraper {
    class Import extends ScraperBase {
      public readonly scraperArn = scraperArn;
      public readonly scraperId = this.scraperIdFromArn(scraperArn);

      public constructor() {
        super(scope, id, { environmentFromArn: scraperArn });
      }
    }

    return new Import();
  }

  /**
   * The ARN of the scraper.
   */
  public readonly scraperArn: string;

  /**
   * The unique ID of the scraper.
   */
  public readonly scraperId: string;

  /**
   * The ARN of the service-created scraper role.
   *
   * This attribute is available on scrapers created by this construct. It is intentionally not on
   * `IScraper`, because the role ARN cannot be derived when referencing a scraper by ARN alone.
   */
  public readonly scraperRoleArn: string;

  private readonly scraper: CfnScraper;

  public constructor(scope: Construct, id: string, props: ScraperProps) {
    super(scope, id);

    if (props.source._requiresCloudWatchDestination() && !props.destination._isCloudWatch()) {
      throw new Error('A VPC scraper source requires a CloudWatch dataset destination');
    }

    const cfnScraperProps: CfnScraperProps = {
      alias: props.alias,
      destination: props.destination._bind(),
      roleConfiguration: props.roleConfiguration
        ? {
          sourceRoleArn: props.roleConfiguration.sourceRole?.roleRef.roleArn,
          targetRoleArn: props.roleConfiguration.targetRole?.roleRef.roleArn,
        }
        : undefined,
      scrapeConfiguration: {
        configurationBlob: props.scrapeConfiguration._bind(),
      },
      scraperLoggingConfiguration: props.loggingConfiguration
        ? {
          loggingDestination: {
            cloudWatchLogs: {
              logGroupArn: props.loggingConfiguration.logGroup.logGroupRef.logGroupArn,
            },
          },
          scraperComponents: props.loggingConfiguration.components.map((component) => ({
            config: component.options ? { options: component.options } : undefined,
            type: component.type,
          })),
        }
        : undefined,
      source: props.source._bind(),
      tags: props.tags
        ? Object.entries(props.tags).map(([key, value]) => ({ key, value }))
        : undefined,
    };

    this.scraper = new CfnScraper(this, 'Resource', cfnScraperProps);
    this.node.defaultChild = this.scraper;

    this.scraperArn = this.scraper.attrArn;
    this.scraperId = this.scraper.attrScraperId;
    this.scraperRoleArn = this.scraper.attrRoleArn;
  }
}
