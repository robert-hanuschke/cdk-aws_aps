import {
  CfnRuleGroupsNamespace,
  CfnRuleGroupsNamespaceProps,
  IWorkspaceRef,
} from 'aws-cdk-lib/aws-aps';
import { Construct } from 'constructs';
import { IRuleGroupsNamespace, RuleGroupsNamespaceBase } from './rule-groups-namespace-base';

/**
 * Properties for an Amazon Managed Service for Prometheus rule groups namespace.
 */
export interface RuleGroupsNamespaceProps {
  /**
   * The Prometheus rules file as YAML.
   */
  readonly data: string;

  /**
   * The name of the rule groups namespace.
   */
  readonly name: string;

  /**
   * The workspace that contains the rule groups namespace.
   */
  readonly workspace: IWorkspaceRef;

  /**
   * Tags to apply to the rule groups namespace.
   *
   * @default - no tags
   */
  readonly tags?: { [key: string]: string };
}

/**
 * An Amazon Managed Service for Prometheus rule groups namespace.
 */
export class RuleGroupsNamespace extends RuleGroupsNamespaceBase {
  /**
   * Reference an existing rule groups namespace by ARN.
   */
  public static fromRuleGroupsNamespaceArn(
    scope: Construct,
    id: string,
    ruleGroupsNamespaceArn: string,
  ): IRuleGroupsNamespace {
    class Import extends RuleGroupsNamespaceBase {
      public readonly ruleGroupsNamespaceArn = ruleGroupsNamespaceArn;

      public constructor() {
        super(scope, id, { environmentFromArn: ruleGroupsNamespaceArn });
      }
    }

    return new Import();
  }

  /**
   * The ARN of the rule groups namespace.
   */
  public readonly ruleGroupsNamespaceArn: string;

  private readonly ruleGroupsNamespace: CfnRuleGroupsNamespace;

  public constructor(scope: Construct, id: string, props: RuleGroupsNamespaceProps) {
    super(scope, id);

    const cfnRuleGroupsNamespaceProps: CfnRuleGroupsNamespaceProps = {
      data: props.data,
      name: props.name,
      tags: props.tags
        ? Object.entries(props.tags).map(([key, value]) => ({ key, value }))
        : undefined,
      workspace: props.workspace.workspaceRef.workspaceArn,
    };

    this.ruleGroupsNamespace = new CfnRuleGroupsNamespace(this, 'Resource', cfnRuleGroupsNamespaceProps);
    this.node.defaultChild = this.ruleGroupsNamespace;
    this.ruleGroupsNamespaceArn = this.ruleGroupsNamespace.attrArn;
  }
}
