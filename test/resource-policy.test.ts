import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ArnPrincipal, PolicyDocument, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { ResourcePolicy, Workspace } from '../src';

let stack: Stack;
const workspaceArn = 'arn:aws:aps:us-east-1:123456789012:workspace/ws-abc123';

beforeEach(() => {
  stack = new Stack(undefined, undefined, {
    env: { account: '123456789012', region: 'us-east-1' },
  });
});

describe('ResourcePolicy', () => {
  test('serializes an IAM PolicyDocument lazily', () => {
    const policyDocument = new PolicyDocument({
      statements: [new PolicyStatement({
        actions: ['aps:QueryMetrics'],
        principals: [new ArnPrincipal('arn:aws:iam::210987654321:root')],
        resources: [workspaceArn],
      })],
    });

    const policy = new ResourcePolicy(stack, 'Policy', {
      policyDocument,
      workspace: Workspace.fromWorkspaceArn(stack, 'Workspace', workspaceArn),
    });
    policy.policyDocument.addStatements(new PolicyStatement({
      actions: ['aps:GetLabels'],
      principals: [new ArnPrincipal('arn:aws:iam::210987654321:root')],
      resources: [workspaceArn],
    }));

    const template = Template.fromStack(stack).toJSON();
    const resources = template.Resources as Record<string, { Type: string; Properties: Record<string, unknown> }>;
    const resource = Object.values(resources).find(({ Type }) => Type === 'AWS::APS::ResourcePolicy');
    expect(resource).toBeDefined();
    expect(resource?.Properties.WorkspaceArn).toBe(workspaceArn);

    const renderedDocument = JSON.parse(resource?.Properties.PolicyDocument as string);
    expect(renderedDocument.Version).toBe('2012-10-17');
    expect(renderedDocument.Statement).toHaveLength(2);
    expect(renderedDocument.Statement).toEqual(expect.arrayContaining([
      expect.objectContaining({ Action: 'aps:QueryMetrics', Resource: workspaceArn }),
      expect.objectContaining({ Action: 'aps:GetLabels', Resource: workspaceArn }),
    ]));
  });

  test('validates the final resource policy at synthesis', () => {
    new ResourcePolicy(stack, 'Policy', {
      policyDocument: new PolicyDocument({
        statements: [new PolicyStatement({
          actions: ['aps:QueryMetrics'],
          resources: [workspaceArn],
        })],
      }),
      workspace: Workspace.fromWorkspaceArn(stack, 'Workspace', workspaceArn),
    });

    expect(() => Template.fromStack(stack)).toThrow(/principal/i);
  });

  test('exposes the workspace-based CloudFormation reference', () => {
    const policy = new ResourcePolicy(stack, 'Policy', {
      policyDocument: new PolicyDocument(),
      workspace: Workspace.fromWorkspaceArn(stack, 'Workspace', workspaceArn),
    });

    expect(policy.workspaceArn).toBe(workspaceArn);
    expect(policy.resourcePolicyRef.workspaceArn).toBe(workspaceArn);
  });

  test('references an existing resource policy by workspace ARN', () => {
    const policy = ResourcePolicy.fromWorkspaceArn(stack, 'Imported', workspaceArn);

    expect(policy.workspaceArn).toBe(workspaceArn);
    expect(policy.resourcePolicyRef.workspaceArn).toBe(workspaceArn);
  });
});
