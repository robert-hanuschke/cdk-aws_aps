import { IResource, Resource } from 'aws-cdk-lib';
import { IWorkspace } from './workspace-base';

export interface IRuleGroupsNamespace extends IResource {
  /**
   * The rules file used in the namespace.
   */
  readonly data: string;

  /**
   * The name of the rule groups namespace.
   */
  readonly name: string;

  /**
   * The ARN of the rule groups namespace.
   * @attribute
   */
  readonly ruleGroupsNamespaceArn: string;

  /**
   * The workspace to add the rule groups namespace.
   */
  readonly workspace: IWorkspace;
}

export abstract class RuleGroupsNamespaceBase extends Resource implements IRuleGroupsNamespace {
  /**
   * The rules file used in the namespace.
   */
  public abstract readonly data: string;

  /**
   * The name of the rule groups namespace.
   */
  public abstract readonly name: string;

  /**
   * The ARN of the rule groups namespace.
   */
  public abstract readonly ruleGroupsNamespaceArn: string;

  /**
   * The workspace to add the rule groups namespace.
   */
  public abstract readonly workspace: IWorkspace;
}