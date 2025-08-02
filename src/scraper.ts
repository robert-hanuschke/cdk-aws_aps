import { validateObjectAttributes } from '@robhan-cdk-lib/utils';
import { CfnScraper, CfnScraperProps } from 'aws-cdk-lib/aws-aps';
import { Construct } from 'constructs';
import { Destination, IScraper, RoleConfiguration, ScrapeConfiguration, ScraperBase, Source } from './scraper-base';
import { validateAlias, validateDestination, validateRoleConfiguration, validateScrapeConfiguration, validateSource } from './validation/scraper-base';

/**
 * Properties for creating an Amazon Managed Service for Prometheus Scraper.
 */
export interface ScraperProps {
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
}

/**
 * Properties for importing an Amazon Managed Service for Prometheus Scraper from attributes.
 */
export interface ScraperAttributes {
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
   * The ARN of the scraper.
   */
  readonly scraperArn: string;
}

const IS_SCRAPER = Symbol.for('@robhan-cdk-lib/aws_aps.Scraper');

export class Scraper extends ScraperBase {
  public static isScraper(x: any): x is Scraper {
    return IS_SCRAPER in x;
  }

  public static fromScraperAttributes(scope: Construct, id: string, attrs: ScraperAttributes): IScraper {
    class Import extends ScraperBase {
      public readonly alias?: string;
      public readonly destination: Destination;
      public readonly roleConfiguration?: RoleConfiguration;
      public readonly scrapeConfiguration: ScrapeConfiguration;
      public readonly source: Source;
      public readonly scraperId: string;
      public readonly scraperArn: string;
      constructor(attributes: ScraperAttributes) {
        super(scope, id);

        this.alias = attributes.alias;
        this.destination = attributes.destination;
        this.roleConfiguration = attributes.roleConfiguration;
        this.scrapeConfiguration = attributes.scrapeConfiguration;
        this.source = attributes.source;
        this.scraperId = this.getScraperId(attributes.scraperArn);
        this.scraperArn = attributes.scraperArn;
      }
    }
    return new Import(attrs);
  }

  /**
   * Validates all scraper properties.
   *
   * @param props - The scraper properties to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * This method aggregates validation results from all individual property validators.
   * It throws an error if props is not an object.
   */
  private static validateProps(props: unknown): string[] {
    const errors: string[] = [];

    if (!props || typeof props !== 'object') {
      throw new Error('Scraper constructor properties must be an object');
    }

    errors.push(...validateObjectAttributes({
      inputObject: props,
      mandatoryAttributes: ['destination', 'scrapeConfiguration', 'source'],
      optionalAttributes: ['alias', 'roleConfiguration'],
    }));


    const scraperProps = props as ScraperProps;

    if (
      scraperProps.alias !== undefined) {
      errors.push(...validateAlias(scraperProps.alias).map((e) => `alias: ${e}`));
    }

    if (
      scraperProps.destination !== undefined) {
      errors.push(...validateDestination(scraperProps.destination).map((e) => `destination: ${e}`));
    }

    if (
      scraperProps.roleConfiguration !== undefined) {
      errors.push(...validateRoleConfiguration(scraperProps.roleConfiguration).map((e) => `roleConfiguration: ${e}`));
    }

    if (
      scraperProps.scrapeConfiguration !== undefined) {
      errors.push(...validateScrapeConfiguration(scraperProps.scrapeConfiguration).map((e) => `scrapeConfiguration: ${e}`));
    }

    if (
      scraperProps.source !== undefined) {
      errors.push(...validateSource(scraperProps.source).map((e) => `source: ${e}`));
    }

    return errors;
  }

  /**
   * An optional user-assigned scraper alias.
   */
  public readonly alias?: string;

  /**
   * The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.
   */
  public readonly destination: Destination;

  /**
   * The role configuration in an Amazon Managed Service for Prometheus scraper.
   */
  public readonly roleConfiguration?: RoleConfiguration;

  /**
   * The configuration in use by the scraper.
   */
  public readonly scrapeConfiguration: ScrapeConfiguration;

  /**
   * The Amazon EKS cluster from which the scraper collects metrics.
   */
  public readonly source: Source;

  /**
   * The ID of the scraper.
   */
  public readonly scraperId: string;

  /**
   * The ARN of the scraper.
   */
  public readonly scraperArn: string;

  /**
   * The underlying CloudFormation resource.
   */
  private readonly scraper: CfnScraper;

  constructor(scope: Construct, id: string, props: ScraperProps) {
    super(scope, id);

    Object.defineProperty(this, IS_SCRAPER, { value: true });

    const errors = Scraper.validateProps(props);

    if (errors.length > 0) {
      throw new Error(`Invalid props:\n${errors.join('\n')}`);
    }

    this.alias = props.alias;
    this.destination = props.destination;
    this.roleConfiguration = props.roleConfiguration;
    this.scrapeConfiguration = props.scrapeConfiguration;
    this.source = props.source;

    let cfnScraperProps: CfnScraperProps = {
      alias: props.alias,
      destination: {
        ampConfiguration: {
          workspaceArn: props.destination.ampConfiguration.workspace.workspaceArn,
        },
      },
      roleConfiguration: {
        sourceRoleArn: props.roleConfiguration?.sourceRole?.roleArn,
        targetRoleArn: props.roleConfiguration?.targetRole?.roleArn,
      },
      scrapeConfiguration: props.scrapeConfiguration,
      source: {
        eksConfiguration: {
          clusterArn: props.source.eksConfiguration.cluster.clusterArn,
          securityGroupIds: props.source.eksConfiguration.securityGroups?.map(x => x.securityGroupId),
          subnetIds: props.source.eksConfiguration.subnets.map(x => x.subnetId),
        },
      },
    };

    this.scraper = new CfnScraper(this, 'Resource', cfnScraperProps);
    this.node.defaultChild = this.scraper;

    this.scraperId = this.scraper.attrArn;
    this.scraperArn = this.scraper.attrArn;
  }
}