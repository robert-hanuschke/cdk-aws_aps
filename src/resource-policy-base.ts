import { IResource, Resource } from 'aws-cdk-lib';
import { IWorkspace } from './workspace-base';

export interface IResourcePolicy extends IResource {
  /**
   * The JSON to use as the Resource-based Policy.
   */
  readonly policyDocument: string;

  /**
   * The workspace to attach the policy to.
   */
  readonly workspace: IWorkspace;
}

export abstract class ResourcePolicyBase extends Resource implements IResourcePolicy {
  /**
   * The JSON to use as the Resource-based Policy.
   */
  public abstract readonly policyDocument: string;

  /**
   * The workspace to attach the policy to.
   */
  public abstract readonly workspace: IWorkspace;
}
