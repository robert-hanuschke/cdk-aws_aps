import { validateNumberRange, validateObjectAttributes, validateRegExp, validateStringLength } from '@robhan-cdk-lib/utils';
import { AnomalyDetectorConfiguration, IgnoreNearExpected, Label, MissingDataAction, RandomCutForestConfiguration } from '../anomaly-detector-base';

function validateIgnoreNearExpected(ignoreNearExpected: unknown): string[] {
  const errors: string[] = [];

  if (typeof ignoreNearExpected !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const ignoreNearExpectedObject = ignoreNearExpected as IgnoreNearExpected;
  errors.push(...validateObjectAttributes({
    inputObject: ignoreNearExpectedObject,
    mandatoryAttributes: [],
    optionalAttributes: ['amount', 'ratio'],
  }));

  if (ignoreNearExpectedObject.amount !== undefined) {
    errors.push(...validateNumberRange({
      value: ignoreNearExpectedObject.amount,
      min: 0,
      messagePrefix: 'amount: ',
    }));
  }

  if (ignoreNearExpectedObject.ratio !== undefined) {
    errors.push(...validateNumberRange({
      value: ignoreNearExpectedObject.ratio,
      min: 0,
      messagePrefix: 'ratio: ',
    }));
  }

  return errors;
}

function validateRandomCutForestConfiguration(randomCutForestConfiguration: unknown): string[] {
  const errors: string[] = [];

  if (typeof randomCutForestConfiguration !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const randomCutForestConfigurationObject = randomCutForestConfiguration as RandomCutForestConfiguration;
  errors.push(...validateObjectAttributes({
    inputObject: randomCutForestConfigurationObject,
    mandatoryAttributes: ['query'],
    optionalAttributes: ['ignoreNearExpectedFromAbove', 'ignoreNearExpectedFromBelow', 'sampleSize', 'shingleSize'],
  }));

  if (randomCutForestConfigurationObject.ignoreNearExpectedFromAbove !== undefined) {
    errors.push(...validateIgnoreNearExpected(randomCutForestConfigurationObject.ignoreNearExpectedFromAbove).map((err) => `ignoreNearExpectedFromAbove: ${err}`));
  }

  if (randomCutForestConfigurationObject.ignoreNearExpectedFromBelow !== undefined) {
    errors.push(...validateIgnoreNearExpected(randomCutForestConfigurationObject.ignoreNearExpectedFromBelow).map((err) => `ignoreNearExpectedFromBelow: ${err}`));
  }

  if (randomCutForestConfigurationObject.query !== undefined) {
    errors.push(...validateStringLength({
      value: randomCutForestConfigurationObject.query,
      min: 1,
      max: 8192,
      messagePrefix: 'query: ',
    }));
  }

  if (randomCutForestConfigurationObject.sampleSize !== undefined) {
    errors.push(...validateNumberRange({
      value: randomCutForestConfigurationObject.sampleSize,
      min: 256,
      max: 1024,
      messagePrefix: 'sampleSize: ',
    }));
  }

  if (randomCutForestConfigurationObject.shingleSize !== undefined) {
    errors.push(...validateNumberRange({
      value: randomCutForestConfigurationObject.shingleSize,
      min: 2,
      max: 1024,
      messagePrefix: 'shingleSize: ',
    }));
  }

  return errors;
}

export function validateAnomalyDetectorConfiguration(anomalyDetectorConfiguration: unknown): string[] {
  const errors: string[] = [];

  if (typeof anomalyDetectorConfiguration !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const anomalyDetectorConfigurationObject = anomalyDetectorConfiguration as AnomalyDetectorConfiguration;
  errors.push(...validateObjectAttributes({
    inputObject: anomalyDetectorConfigurationObject,
    mandatoryAttributes: ['randomCutForest'],
    optionalAttributes: [],
  }));

  if (anomalyDetectorConfigurationObject.randomCutForest !== undefined) {
    errors.push(...validateRandomCutForestConfiguration(anomalyDetectorConfigurationObject.randomCutForest).map((err) => `randomCutForest: ${err}`));
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
    mandatoryAttributes: ['key', 'value'],
    optionalAttributes: [],
  }));

  if (labelObject.key !== undefined) {
    errors.push(...validateStringLength({
      value: labelObject.key,
      min: 1,
      max: 128,
      messagePrefix: 'key: ',
    }));
  }

  if (labelObject.value !== undefined) {
    errors.push(...validateStringLength({
      value: labelObject.value,
      max: 256,
      messagePrefix: 'value: ',
    }));
  }

  return errors;
}

export function validateMissingDataAction(missingDataAction: unknown): string[] {
  const errors: string[] = [];

  if (typeof missingDataAction !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const missingDataActionObject = missingDataAction as MissingDataAction;
  errors.push(...validateObjectAttributes({
    inputObject: missingDataActionObject,
    mandatoryAttributes: [],
    optionalAttributes: ['markAsAnomaly', 'skip'],
  }));
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
    max: 64,
  }));

  errors.push(...validateRegExp({
    regExp: /^[0-9A-Za-z][-.0-9A-Z_a-z]*$/,
    value: alias,
  }));
  return errors;
}

export function validateEvaluationIntervalInSeconds(evaluationIntervalInSeconds: unknown): string[] {
  const errors: string[] = [];

  if (typeof evaluationIntervalInSeconds !== 'number') {
    errors.push('must be a number');
    return errors; // No need to check further if not a number
  }

  errors.push(...validateNumberRange({
    value: evaluationIntervalInSeconds,
    min: 30,
    max: 86400,
  }));

  return errors;
}
