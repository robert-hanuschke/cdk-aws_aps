import { Stack, Token } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { RuleGroupsNamespace, Workspace } from '../src';

let stack: Stack;
const workspaceArn = 'arn:aws:aps:us-east-1:123456789012:workspace/ws-abc123';
const rules = `groups:
  - name: availability
    rules:
      - record: service:up:sum
        expr: sum(up)
`;

beforeEach(() => {
  stack = new Stack(undefined, undefined, {
    env: { account: '123456789012', region: 'us-east-1' },
  });
});

describe('RuleGroupsNamespace', () => {
  test('maps workspace references, rule data, and tags', () => {
    const namespace = new RuleGroupsNamespace(stack, 'Rules', {
      data: rules,
      name: 'availability',
      workspace: Workspace.fromWorkspaceArn(stack, 'Workspace', workspaceArn),
      tags: { environment: 'test' },
    });

    Template.fromStack(stack).hasResourceProperties('AWS::APS::RuleGroupsNamespace', {
      Data: rules,
      Name: 'availability',
      Workspace: workspaceArn,
      Tags: [{ Key: 'environment', Value: 'test' }],
    });
    expect(Token.isUnresolved(namespace.ruleGroupsNamespaceArn)).toBe(true);
    expect(namespace.ruleGroupsNamespaceRef.ruleGroupsNamespaceArn).toBe(namespace.ruleGroupsNamespaceArn);
  });

  test('references an existing namespace by ARN', () => {
    const arn = `${workspaceArn.replace('workspace/', 'rulegroupsnamespace/')}/availability`;

    const namespace = RuleGroupsNamespace.fromRuleGroupsNamespaceArn(stack, 'Imported', arn);

    expect(namespace.ruleGroupsNamespaceArn).toBe(arn);
    expect(namespace.ruleGroupsNamespaceRef.ruleGroupsNamespaceArn).toBe(arn);
  });
});
