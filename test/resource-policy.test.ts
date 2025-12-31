import { Stack } from 'aws-cdk-lib';
import { ResourcePolicy, ResourcePolicyProps, Workspace } from '../src';

let stack: Stack;

beforeEach(() => {
  stack = new Stack(undefined, undefined, { env: { account: '123456789012', region: 'us-east-1' } });
});

describe('Resource Policy', () => {
  describe('constructor', () => {
    test('should create a new resource policy', () => {
      new ResourcePolicy(stack, 'MyResourcePolicy', {
        policyDocument: 'policyDocument',
        workspace: Workspace.fromWorkspaceAttributes(stack, 'MyWorkspace', {
          workspaceArn: 'workspaceArn',
        }),
      });
      expect(stack).toBeDefined();
    });
    test('should fail if props are not an object', () => {
      expect(() => {
        new ResourcePolicy(stack, 'MyResourcePolicy', 'not an object' as unknown as ResourcePolicyProps);
      }).toThrow('ResourcePolicy constructor properties must be an object');
    });
    test('should fail if props are missing mandatory attributes', () => {
      expect(() => {
        new ResourcePolicy(stack, 'MyResourcePolicy', {} as unknown as ResourcePolicyProps);
      }).toThrow('missing mandatory attribute: policyDocument');
    });
  });
  describe('isResourcePolicy', () => {
    test('should return true for resource policy', () => {
      const resourcePolicy = new ResourcePolicy(stack, 'MyResourcePolicy', {
        policyDocument: 'policyDocument',
        workspace: Workspace.fromWorkspaceAttributes(stack, 'MyWorkspace', {
          workspaceArn: 'workspaceArn',
        }),
      });
      expect(ResourcePolicy.isResourcePolicy(resourcePolicy)).toBe(true);
    });
  });
});