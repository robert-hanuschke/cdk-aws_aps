import { validateObjectAttributes } from '@robhan-cdk-lib/utils';
import { CfnRuleGroupsNamespace, CfnRuleGroupsNamespaceProps } from 'aws-cdk-lib/aws-aps';
import { Construct } from 'constructs';
import { IRuleGroupsNamespace, RuleGroupsNamespaceBase } from './rule-groups-namespace-base';
import { validateData, validateName } from './validation/rule-groups-namespace-base';
import { IWorkspace } from './workspace-base';

/**
 * Properties for creating a rule groups namespace in an Amazon Managed Service for Prometheus
 * workspace.
 */
export interface RuleGroupsNamespaceProps {
  /**
   * The rules file used in the namespace.
   */
  readonly data: string;

  /**
   * The name of the rule groups namespace.
   *
   * Between 1 and 64 characters.
   */
  readonly name: string;

  /**
   * The workspace to add the rule groups namespace.
   */
  readonly workspace: IWorkspace;
}

/**
 * Properties for importing a rule groups namespace in an Amazon Managed Service for Prometheus
 * workspace from attributes.
 */
export interface RuleGroupsNamespaceAttributes {
  /**
   * The rules file used in the namespace.
   */
  readonly data: string;

  /**
   * The name of the rule groups namespace.
   *
   * Between 1 and 64 characters.
   */
  readonly name: string;

  /**
   * The workspace to add the rule groups namespace.
   */
  readonly workspace: IWorkspace;

  /**
   * The ARN of the rule groups namespace.
   */
  readonly ruleGroupsNamespaceArn: string;
}

const IS_RULE_GROUPS_NAMESPACE = Symbol.for('@robhan-cdk-lib/aws_aps.RuleGroupsNamespace');


/**
 * The definition of a rule groups namespace in an Amazon Managed Service for Prometheus workspace.
 * A rule groups namespace is associated with exactly one rules file. A workspace can have multiple
 * rule groups namespaces.
 */
export class RuleGroupsNamespace extends RuleGroupsNamespaceBase {
  public static isRuleGroupsNamespace(x: any): x is RuleGroupsNamespace {
    return IS_RULE_GROUPS_NAMESPACE in x;
  }

  public static fromRuleGroupsNamespaceAttributes(scope: Construct, id: string, attrs: RuleGroupsNamespaceAttributes): IRuleGroupsNamespace {
    class Import extends RuleGroupsNamespaceBase {
      public readonly data: string;
      public readonly name: string;
      public readonly workspace: IWorkspace;
      public readonly ruleGroupsNamespaceArn: string;
      constructor(attributes: RuleGroupsNamespaceAttributes) {
        super(scope, id);
        this.data = attributes.data;
        this.name = attributes.name;
        this.workspace = attributes.workspace;
        this.ruleGroupsNamespaceArn = attributes.ruleGroupsNamespaceArn;
      }
    }
    return new Import(attrs);
  }

  /**
   * Validates all rule groups namespace properties.
   *
   * @param props - The rule group namespace properties to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * This method aggregates validation results from all individual property validators.
   * It throws an error if props is not an object.
   */
  private static validateProps(props: unknown): string[] {
    const errors: string[] = [];

    if (!props || typeof props !== 'object') {
      throw new Error('RuleGroupsNamespace constructor properties must be an object');
    }
    const ruleGroupsNamespaceProps = props as RuleGroupsNamespaceProps;

    errors.push(...validateObjectAttributes({
      inputObject: ruleGroupsNamespaceProps,
      mandatoryAttributes: ['data', 'name', 'workspace'],
      optionalAttributes: [],
    }));

    if (ruleGroupsNamespaceProps.name !== undefined) {
      errors.push(...validateName(ruleGroupsNamespaceProps.name).map((err) => `name: ${err}`));
    }

    if (ruleGroupsNamespaceProps.data !== undefined) {
      errors.push(...validateData(ruleGroupsNamespaceProps.data).map((err) => `data: ${err}`));
    }

    return errors;
  }
  /**
   * The rules file used in the namespace.
   */
  public readonly data: string;

  /**
   * The name of the rule groups namespace.
   */
  public readonly name: string;

  /**
   * The workspace to add the rule groups namespace.
   */
  public readonly workspace: IWorkspace;

  /**
   * The workspace to add the rule groups namespace.
   */
  public readonly ruleGroupsNamespaceArn: string;

  /**
   * The underlying CloudFormation resource.
   */
  private readonly ruleGroupsNamespace: CfnRuleGroupsNamespace;

  constructor(scope: Construct, id: string, props: RuleGroupsNamespaceProps) {
    super(scope, id);

    Object.defineProperty(this, IS_RULE_GROUPS_NAMESPACE, { value: true });

    const errors = RuleGroupsNamespace.validateProps(props);

    if (errors.length > 0) {
      throw new Error(`Invalid props:\n${errors.join('\n')}`);
    }

    this.data = props.data;
    this.name = props.name;
    this.workspace = props.workspace;

    let cfnRuleGroupsNamespaceProps: CfnRuleGroupsNamespaceProps = {
      data: props.data,
      name: props.name,
      workspace: props.workspace.workspaceId,
    };

    this.ruleGroupsNamespace = new CfnRuleGroupsNamespace(this, 'Resource', cfnRuleGroupsNamespaceProps);
    this.node.defaultChild = this.ruleGroupsNamespace;

    this.ruleGroupsNamespaceArn = this.ruleGroupsNamespace.attrArn;
  }
}