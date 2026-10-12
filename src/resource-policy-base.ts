import { IResource, Resource, ResourceProps } from 'aws-cdk-lib';
import { IResourcePolicyRef, ResourcePolicyReference } from 'aws-cdk-lib/aws-aps';
import { Construct } from 'constructs';

/**
 * An Amazon Managed Service for Prometheus workspace resource policy.
 */
export interface IResourcePolicy extends IResource, IResourcePolicyRef {
  /**
   * The ARN of the workspace protected by the policy.
   *
   * @attribute
   */
  readonly workspaceArn: string;
}

/**
 * Base implementation shared by owned and referenced resource policies.
 *
 * @internal
 */
export abstract class ResourcePolicyBase extends Resource implements IResourcePolicy {
  public abstract readonly workspaceArn: string;

  public get resourcePolicyRef(): ResourcePolicyReference {
    return { workspaceArn: this.workspaceArn };
  }

  protected constructor(scope: Construct, id: string, props: ResourceProps = {}) {
    super(scope, id, props);
  }
}
