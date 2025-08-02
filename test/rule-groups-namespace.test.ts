import { Stack } from 'aws-cdk-lib';
import { IWorkspace, Workspace, RuleGroupsNamespace, RuleGroupsNamespaceProps } from '../src';

let stack: Stack;
let workspace: IWorkspace;

beforeEach(() => {
  stack = new Stack(undefined, undefined, { env: { account: '123456789012', region: 'us-east-1' } });
  workspace = new Workspace(stack, 'MyWorkspace', {});
});

describe('RuleGroupNamespace', () => {
  describe('constructor', () => {
    test('should create a new rule group namespace', () => {
      const ruleGroupsNamespace = new RuleGroupsNamespace(stack, 'MyRuleGroupsNamespace', {
        data: '',
        name: 'myRuleGroupsNamespace',
        workspace: workspace,
      });

      expect(ruleGroupsNamespace).toBeDefined();
    });

    test('should fail if props is not an object', () => {
      expect(() => {
        new RuleGroupsNamespace(stack, 'MyRuleGroupsNamespace', 'not an object' as unknown as RuleGroupsNamespaceProps);
      }).toThrow('RuleGroupsNamespace constructor properties must be an object');
    });

    test('should fail if data is not a string', () => {
      expect(() => {
        new RuleGroupsNamespace(stack, 'MyRuleGroupsNamespace', {
          data: 1 as unknown as string,
          name: 'myRuleGroupsNamespace',
          workspace: workspace,
        });
      }).toThrow('data: must be a string');
    });

    test('should fail if name is not a string', () => {
      expect(() => {
        new RuleGroupsNamespace(stack, 'MyRuleGroupsNamespace', {
          data: '',
          name: 1 as unknown as string,
          workspace: workspace,
        });
      }).toThrow('name: must be a string');
    });
  });

  describe('fromRuleGroupsNamespaceAttributes', () => {
    test('should create a new rule group namespace from attributes', () => {
      const ruleGroupsNamespace = RuleGroupsNamespace.fromRuleGroupsNamespaceAttributes(stack, 'MyRuleGroupsNamespace', {
        data: '',
        name: 'myRuleGroupsNamespace',
        workspace: workspace,
        ruleGroupsNamespaceArn: 'myRuleGroupsNamespaceArn',
      });

      expect(ruleGroupsNamespace).toBeDefined();
    });
  });

  describe('isRuleGroupNamespace', () => {
    test('should return true if the object is a rule group namespace', () => {
      const ruleGroupsNamespace = new RuleGroupsNamespace(stack, 'MyRuleGroupsNamespace', {
        data: '',
        name: 'myRuleGroupsNamespace',
        workspace: workspace,
      });

      expect(RuleGroupsNamespace.isRuleGroupsNamespace(ruleGroupsNamespace)).toBe(true);
    });
  });
});
