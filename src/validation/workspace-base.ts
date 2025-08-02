import { validateArrayLength, validateNumberRange, validateObjectAttributes, validateRegExp, validateStringLength } from '@robhan-cdk-lib/utils';
import {
  CloudWatchLogDestination,
  LoggingConfiguration,
  LoggingFilter,
  LoggingDestination,
  QueryLoggingConfiguration,
  LimitsPerLabelSetEntry,
  Label,
  LimitsPerLabelSet,
  WorkspaceConfiguration,
} from '../workspace-base';

export function validateLoggingConfiguration(loggingConfiguration: unknown): string[] {
  const errors: string[] = [];

  if (typeof loggingConfiguration !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const loggingConfigurationObject = loggingConfiguration as LoggingConfiguration;
  errors.push(...validateObjectAttributes({
    inputObject: loggingConfigurationObject,
    mandatoryAttributes: [],
    optionalAttributes: ['logGroup'],
  }));

  return errors;
}

export function validateCloudWatchLogDestination(cloudWatchLogDestination: unknown): string[] {
  const errors: string[] = [];

  if (typeof cloudWatchLogDestination !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const cloudWatchLogDestinationObject = cloudWatchLogDestination as CloudWatchLogDestination;
  errors.push(...validateObjectAttributes({
    inputObject: cloudWatchLogDestinationObject,
    mandatoryAttributes: ['logGroup'],
    optionalAttributes: [],
  }));

  return errors;
}

export function validateLoggingFilter(loggingFilter: unknown): string[] {
  const errors: string[] = [];

  if (typeof loggingFilter !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const loggingFilterObject = loggingFilter as LoggingFilter;
  errors.push(...validateObjectAttributes({
    inputObject: loggingFilterObject,
    mandatoryAttributes: ['qspThreshold'],
    optionalAttributes: [],
  }));

  if (loggingFilterObject.qspThreshold !== undefined) {

    if (typeof loggingFilterObject.qspThreshold !== 'number') {
      errors.push('qspThreshold: must be a number');
    } else {
      errors.push(...validateNumberRange({
        value: loggingFilterObject.qspThreshold,
        min: 0,
        messagePrefix: 'qspThreshold: ',
      }));
    }
  }

  return errors;
}

export function validateLoggingDestination(loggingDestination: unknown): string[] {
  const errors: string[] = [];

  if (typeof loggingDestination !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const loggingDestinationObject = loggingDestination as LoggingDestination;
  errors.push(...validateObjectAttributes({
    inputObject: loggingDestinationObject,
    mandatoryAttributes: ['cloudWatchLogs', 'filters'],
    optionalAttributes: [],
  }));

  if (loggingDestinationObject.cloudWatchLogs !== undefined) {
    errors.push(...validateCloudWatchLogDestination(loggingDestinationObject.cloudWatchLogs).map((err) => `cloudWatchLogs: ${err}`));
  }

  if (loggingDestinationObject.filters !== undefined) {
    errors.push(...validateLoggingFilter(loggingDestinationObject.filters).map((err) => `filters: ${err}`));
  }

  return errors;
}

export function validateQueryLoggingConfiguration(queryLoggingConfiguration: unknown): string[] {
  const errors: string[] = [];

  if (typeof queryLoggingConfiguration !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const queryLoggingConfigurationObject = queryLoggingConfiguration as QueryLoggingConfiguration;
  errors.push(...validateObjectAttributes({
    inputObject: queryLoggingConfigurationObject,
    mandatoryAttributes: ['destinations'],
    optionalAttributes: [],
  }));

  if (queryLoggingConfigurationObject.destinations !== undefined) {
    errors.push(...queryLoggingConfigurationObject.destinations.map((d, i) => {
      return validateLoggingDestination(d).map((err) => `destinations[${i}]: ${err}`);
    }).flat());
  }

  return errors;
}

export function validateLimitsPerLabelSetEntry(limitsPerLabelSetEntry: unknown): string[] {
  const errors: string[] = [];

  if (typeof limitsPerLabelSetEntry !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const limitsPerLabelSetEntryObject = limitsPerLabelSetEntry as LimitsPerLabelSetEntry;
  errors.push(...validateObjectAttributes({
    inputObject: limitsPerLabelSetEntryObject,
    mandatoryAttributes: [],
    optionalAttributes: ['maxSeries'],
  }));

  if (limitsPerLabelSetEntryObject.maxSeries !== undefined) {
    if (typeof limitsPerLabelSetEntryObject.maxSeries !== 'number') {
      errors.push('maxSeries: must be a number');
    } else {
      errors.push(...validateNumberRange({
        value: limitsPerLabelSetEntryObject.maxSeries,
        min: 0,
        messagePrefix: 'maxSeries: ',
      }));
    }
  }

  return errors;
}

export function validateLabel(label: unknown): string[] {
  const errors: string[] = [];

  if (typeof label !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const labelObject = label as Label;
  errors.push(...validateObjectAttributes({
    inputObject: labelObject,
    mandatoryAttributes: ['name', 'value'],
    optionalAttributes: [],
  }));

  if (labelObject.name !== undefined) {

    if (typeof labelObject.name !== 'string') {
      errors.push('name: must be a string');
    } else {
      errors.push(...validateRegExp({
        regExp: /^[a-zA-Z_][a-zA-Z0-9_]*$/,
        value: labelObject.name,
        messagePrefix: 'name: ',
      }));
      errors.push(...validateStringLength({
        value: labelObject.name,
        min: 1,
      }));
    }
  }

  if (labelObject.value !== undefined) {
    if (typeof labelObject.value !== 'string') {
      errors.push('value: must be a string');
    } else {
      errors.push(...validateStringLength({
        value: labelObject.value,
        min: 1,
        messagePrefix: 'value: ',
      }));
    }
  }

  return errors;
}

export function validateLimitsPerLabelSet(limitsPerLabelSet: unknown): string[] {
  const errors: string[] = [];

  if (typeof limitsPerLabelSet !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const limitsPerLabelSetObject = limitsPerLabelSet as LimitsPerLabelSet;
  errors.push(...validateObjectAttributes({
    inputObject: limitsPerLabelSetObject,
    mandatoryAttributes: ['labelSet', 'limits'],
    optionalAttributes: [],
  }));

  if (limitsPerLabelSetObject.labelSet !== undefined) {
    errors.push(...limitsPerLabelSetObject.labelSet.map((l, i) => {
      return validateLabel(l).map((err) => `labelSet[${i}]: ${err}`);
    }).flat());
  }

  if (limitsPerLabelSetObject.limits !== undefined) {
    errors.push(...validateLimitsPerLabelSetEntry(limitsPerLabelSetObject.limits).map((err) => `limits: ${err}`));
  }

  return errors;
}

export function validateWorkspaceConfiguration(workspaceConfiguration: unknown): string[] {
  const errors: string[] = [];

  if (typeof workspaceConfiguration !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const workspaceConfigurationObject = workspaceConfiguration as WorkspaceConfiguration;
  errors.push(...validateObjectAttributes({
    inputObject: workspaceConfigurationObject,
    mandatoryAttributes: [],
    optionalAttributes: ['limitsPerLabelSets', 'retentionPeriodInDays'],
  }));

  if (workspaceConfigurationObject.limitsPerLabelSets !== undefined) {

    if (!Array.isArray(workspaceConfigurationObject.limitsPerLabelSets)) {
      errors.push('limitsPerLabelSets: must be an array');
    } else {
      errors.push(...validateArrayLength({
        value: workspaceConfigurationObject.limitsPerLabelSets,
        min: 0,
        messagePrefix: 'limitsPerLabelSets: ',
      }));
      errors.push(...workspaceConfigurationObject.limitsPerLabelSets.map((l, i) => {
        return validateLimitsPerLabelSet(l).map((err) => `limitsPerLabelSets[${i}]: ${err}`);
      }).flat());
    }
  }

  if (workspaceConfigurationObject.retentionPeriodInDays !== undefined) {
    if (typeof workspaceConfigurationObject.retentionPeriodInDays !== 'number') {
      errors.push('retentionPeriodInDays: must be a number');
    } else {
      errors.push(...validateNumberRange({
        value: workspaceConfigurationObject.retentionPeriodInDays,
        min: 1,
        messagePrefix: 'retentionPeriodInDays: ',
      }));
    }
  }

  return errors;
}

export function validateAlertManagerDefinition(alertManagerDefinition: unknown): string[] {
  const errors: string[] = [];

  if (typeof alertManagerDefinition !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
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
    min: 0,
    max: 100,
  }));
  return errors;
}