import { IResource, Resource, ResourceProps } from 'aws-cdk-lib';
import { IRuleGroupsNamespaceRef, RuleGroupsNamespaceReference } from 'aws-cdk-lib/aws-aps';
import { Construct } from 'constructs';

/**
 * An Amazon Managed Service for Prometheus rule groups namespace.
 */
export interface IRuleGroupsNamespace extends IResource, IRuleGroupsNamespaceRef {
  /**
   * The ARN of the rule groups namespace.
   *
   * @attribute
   */
  readonly ruleGroupsNamespaceArn: string;
}

/**
 * Base implementation shared by owned and referenced rule groups namespaces.
 *
 * @internal
 */
export abstract class RuleGroupsNamespaceBase extends Resource implements IRuleGroupsNamespace {
  public abstract readonly ruleGroupsNamespaceArn: string;

  public get ruleGroupsNamespaceRef(): RuleGroupsNamespaceReference {
    return { ruleGroupsNamespaceArn: this.ruleGroupsNamespaceArn };
  }

  protected constructor(scope: Construct, id: string, props: ResourceProps = {}) {
    super(scope, id, props);
  }
}
