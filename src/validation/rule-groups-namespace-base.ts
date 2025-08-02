import { validateStringLength } from '@robhan-cdk-lib/utils';

/**
 * Validates the data property.
 *
 * @param data - The rule groups namespace data to validate
 * @returns An array of error messages if validation fails, or an empty array if valid
 *
 * Validation rules:
 * - Must be a string
 */
export function validateData(data: unknown): string[] {
  const errors: string[] = [];

  if (typeof data !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  return errors;
}

/**
 * Validates the name property.
 *
 * @param name - The rule groups namespace name to validate
 * @returns An array of error messages if validation fails, or an empty array if valid
 *
 * Validation rules:
 * - Must be a string
 * - Must be between 1 and 64 characters long
 */
export function validateName(name: unknown): string[] {
  const errors: string[] = [];

  if (typeof name !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: name,
    min: 1,
    max: 64,
  }));

  return errors;
}
