import { validateObjectAttributes, validateArrayLength, validateStringLength, validateRegExp } from '@robhan-cdk-lib/utils';
import { AmpConfiguration, Destination, RoleConfiguration, ScrapeConfiguration, EksConfiguration, Source } from '../scraper-base';

export function validateAmpConfiguration(ampConfiguration: unknown): string[] {
  const errors: string[] = [];

  if (typeof ampConfiguration !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const ampConfigurationObject = ampConfiguration as AmpConfiguration;
  errors.push(...validateObjectAttributes({
    inputObject: ampConfigurationObject,
    mandatoryAttributes: ['workspace'],
    optionalAttributes: [],
  }));

  return errors;
}

export function validateDestination(destination: unknown): string[] {
  const errors: string[] = [];

  if (typeof destination !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const destinationObject = destination as Destination;
  errors.push(...validateObjectAttributes({
    inputObject: destinationObject,
    mandatoryAttributes: ['ampConfiguration'],
    optionalAttributes: [],
  }));

  if (destinationObject.ampConfiguration !== undefined) {
    errors.push(...validateAmpConfiguration(destinationObject.ampConfiguration).map((err) => `ampConfiguration: ${err}`));
  }

  return errors;
}

export function validateRoleConfiguration(roleConfiguration: unknown): string[] {
  const errors: string[] = [];

  if (typeof roleConfiguration !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }
  const roleConfigurationObject = roleConfiguration as RoleConfiguration;
  errors.push(...validateObjectAttributes({
    inputObject: roleConfigurationObject,
    mandatoryAttributes: [],
    optionalAttributes: ['sourceRole', 'targetRole'],
  }));

  return errors;
}

export function validateScrapeConfiguration(scrapeConfiguration: unknown): string[] {
  const errors: string[] = [];

  if (typeof scrapeConfiguration !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const scrapeConfigurationObject = scrapeConfiguration as ScrapeConfiguration;
  errors.push(...validateObjectAttributes({
    inputObject: scrapeConfigurationObject,
    mandatoryAttributes: ['configurationBlob'],
    optionalAttributes: [],
  }));

  if (scrapeConfigurationObject.configurationBlob !== undefined && typeof scrapeConfigurationObject.configurationBlob !== 'string') {
    errors.push('configurationBlob: must be a string');
  }

  return errors;
}

export function validateEksConfiguration(eksConfiguration: unknown): string[] {
  const errors: string[] = [];

  if (typeof eksConfiguration !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const eksConfigurationObject = eksConfiguration as EksConfiguration;
  errors.push(...validateObjectAttributes({
    inputObject: eksConfigurationObject,
    mandatoryAttributes: ['cluster', 'subnets'],
    optionalAttributes: ['securityGroups'],
  }));

  if (eksConfigurationObject.securityGroups !== undefined) {
    if (!Array.isArray(eksConfigurationObject.securityGroups)) {
      errors.push('securityGroups: must be an array');
    } else {
      errors.push(...validateArrayLength({
        value: eksConfigurationObject.securityGroups,
        min: 1,
        max: 5,
        messagePrefix: 'securityGroups: ',
      }));
    }
  }

  if (eksConfigurationObject.subnets !== undefined) {
    if (!Array.isArray(eksConfigurationObject.subnets)) {
      errors.push('subnets: must be an array');
    } else {
      errors.push(...validateArrayLength({
        value: eksConfigurationObject.subnets,
        min: 1,
        max: 5,
        messagePrefix: 'subnets: ',
      }));
    }
  }

  return errors;
}

export function validateSource(source: unknown): string[] {
  const errors: string[] = [];

  if (typeof source !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const sourceObject = source as Source;
  errors.push(...validateObjectAttributes({
    inputObject: sourceObject,
    mandatoryAttributes: ['eksConfiguration'],
    optionalAttributes: [],
  }));

  if (sourceObject.eksConfiguration !== undefined) {
    errors.push(...validateEksConfiguration(sourceObject.eksConfiguration).map((err) => `eksConfiguration: ${err}`));
  }

  return errors;
}

export function validateAlias(alias: unknown): string[] {
  const errors: string[] = [];

  if (typeof alias !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: alias,
    min: 1,
    max: 100,
  }));

  errors.push(...validateRegExp({
    regExp: /^[0-9A-Za-z][-.0-9A-Z_a-z]*$/,
    value: alias,
  }));

  return errors;
}