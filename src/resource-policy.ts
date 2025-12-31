import { validateObjectAttributes } from '@robhan-cdk-lib/utils';
import { CfnResourcePolicy, CfnResourcePolicyProps } from 'aws-cdk-lib/aws-aps';
import { Construct } from 'constructs';
import { ResourcePolicyBase } from './resource-policy-base';
import { IWorkspace } from './workspace-base';

/**
 * Properties for creating an Amazon Managed Service for Prometheus Resource Policy.
 */
export interface ResourcePolicyProps {
  /**
   * The JSON to use as the Resource-based Policy.
   */
  readonly policyDocument: string;

  /**
   * The workspace to attach the policy to.
   */
  readonly workspace: IWorkspace;
}

const IS_RESOURCE_POLICY = Symbol.for('@robhan-cdk-lib/aws_aps.ResourcePolicy');

export class ResourcePolicy extends ResourcePolicyBase {
  public static isResourcePolicy(x: any): x is ResourcePolicy {
    return IS_RESOURCE_POLICY in x;
  }

  /**
   * Validates all resource policy properties.
   *
   * @param props - The resource policy properties to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * This method aggregates validation results from all individual property validators.
   * It throws an error if props is not an object.
   */
  private static validateProps(props: unknown): string[] {
    const errors: string[] = [];

    if (!props || typeof props !== 'object') {
      throw new Error('ResourcePolicy constructor properties must be an object');
    }
    const resourcePolicyProps = props as ResourcePolicyProps;

    errors.push(...validateObjectAttributes({
      inputObject: resourcePolicyProps,
      mandatoryAttributes: ['policyDocument', 'workspace'],
      optionalAttributes: [],
    }));

    return errors;
  }

  /**
   * The JSON to use as the Resource-based Policy.
   */
  readonly policyDocument: string;

  /**
   * The workspace to attach the policy to.
   */
  readonly workspace: IWorkspace;

  /**
   * The underlying CloudFormation resource.
   */
  private readonly resourcePolicy: CfnResourcePolicy;

  constructor(scope: Construct, id: string, props: ResourcePolicyProps) {
    super(scope, id);

    Object.defineProperty(this, IS_RESOURCE_POLICY, { value: true });

    const errors = ResourcePolicy.validateProps(props);

    if (errors.length > 0) {
      throw new Error(`Invalid props:\n${errors.join('\n')}`);
    }

    this.policyDocument = props.policyDocument;
    this.workspace = props.workspace;

    let cfnResourcePolicyProps: CfnResourcePolicyProps = {
      policyDocument: props.policyDocument,
      workspaceArn: props.workspace.workspaceArn,
    };

    this.resourcePolicy = new CfnResourcePolicy(this, 'Resource', cfnResourcePolicyProps);
    this.node.defaultChild = this.resourcePolicy;
  }
}