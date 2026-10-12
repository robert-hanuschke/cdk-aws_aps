import { CfnResourcePolicy, CfnResourcePolicyProps, IWorkspaceRef } from 'aws-cdk-lib/aws-aps';
import { PolicyDocument } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { IResourcePolicy, ResourcePolicyBase } from './resource-policy-base';

/**
 * Properties for an Amazon Managed Service for Prometheus workspace resource policy.
 */
export interface ResourcePolicyProps {
  /**
   * The IAM policy document that grants access to the workspace.
   *
   * Every statement must include a principal. When the workspace uses a customer-managed KMS key,
   * principals also need permission to use that key.
   */
  readonly policyDocument: PolicyDocument;

  /**
   * The workspace protected by the policy.
   */
  readonly workspace: IWorkspaceRef;
}

/**
 * A resource-based policy attached to an Amazon Managed Service for Prometheus workspace.
 */
export class ResourcePolicy extends ResourcePolicyBase {
  /**
   * Reference an existing resource policy by the ARN of its workspace.
   */
  public static fromWorkspaceArn(scope: Construct, id: string, workspaceArn: string): IResourcePolicy {
    class Import extends ResourcePolicyBase {
      public readonly workspaceArn = workspaceArn;

      public constructor() {
        super(scope, id, { environmentFromArn: workspaceArn });
      }
    }

    return new Import();
  }

  /**
   * The policy document rendered by this resource.
   */
  public readonly policyDocument: PolicyDocument;

  /**
   * The ARN of the workspace protected by the policy.
   */
  public readonly workspaceArn: string;

  private readonly resourcePolicy: CfnResourcePolicy;

  public constructor(scope: Construct, id: string, props: ResourcePolicyProps) {
    super(scope, id);

    this.policyDocument = props.policyDocument;
    this.workspaceArn = props.workspace.workspaceRef.workspaceArn;
    this.node.addValidation({
      validate: () => this.policyDocument.validateForResourcePolicy(),
    });

    const cfnResourcePolicyProps: CfnResourcePolicyProps = {
      policyDocument: this.stack.toJsonString(this.policyDocument),
      workspaceArn: this.workspaceArn,
    };

    this.resourcePolicy = new CfnResourcePolicy(this, 'Resource', cfnResourcePolicyProps);
    this.node.defaultChild = this.resourcePolicy;
  }
}
