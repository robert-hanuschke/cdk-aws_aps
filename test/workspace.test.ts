import { Stack } from 'aws-cdk-lib';
import { Key } from 'aws-cdk-lib/aws-kms';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { CloudWatchLogDestination, Label, LimitsPerLabelSet, LimitsPerLabelSetEntry, LoggingConfiguration, LoggingDestination, LoggingFilter, QueryLoggingConfiguration, Workspace, WorkspaceConfiguration, WorkspaceProps } from '../src';

let stack: Stack;

beforeEach(() => {
  stack = new Stack(undefined, undefined, { env: { account: '123456789012', region: 'us-east-1' } });
});

describe('Workspace', () => {
  describe('constructor', () => {
    test('should create a new rule group namespace', () => {
      new Workspace(stack, 'myWorkspace', {
        alertManagerDefinition: '',
        alias: 'workspaceAlias',
        kmsKey: new Key(stack, 'myKey'),
        loggingConfiguration: {
          logGroup: new LogGroup(stack, 'myLogGroup'),
        },
        queryLoggingConfiguration: {
          destinations: [{
            cloudWatchLogs: {
              logGroup: new LogGroup(stack, 'myQueryLogGroup'),
            },
            filters: {
              qspThreshold: 0,
            },
          }],
        },
        workspaceConfiguration: {
          limitsPerLabelSets: [
            {
              labelSet: [
                {
                  name: 'name',
                  value: 'value',
                },
              ],
              limits: {
                maxSeries: 1,
              },
            },
          ],
          retentionPeriodInDays: 1,
        },
      });
      expect(stack).toBeDefined;
    });
    test('should fail of props are not an object', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', 'not an object' as unknown as WorkspaceProps);
      }).toThrow('Workspace constructor properties must be an object');
    });

    test('should fail if loggingConfiguration is not an object', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          loggingConfiguration: 'not an object' as unknown as LoggingConfiguration,
        });
      }).toThrow('loggingConfiguration: must be an object');
    });

    test('should fail if queryLoggingConfiguration is not an object', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          queryLoggingConfiguration: 'not an object' as unknown as QueryLoggingConfiguration,
        });
      }).toThrow('queryLoggingConfiguration: must be an object');
    });

    test('should fail if qspThreshold is not a number', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          queryLoggingConfiguration: {
            destinations: [{
              cloudWatchLogs: {
                logGroup: new LogGroup(stack, 'myQueryLogGroup'),
              },
              filters: {
                qspThreshold: 'not a number' as unknown as number,
              },
            }],
          },
        });
      }).toThrow('queryLoggingConfiguration: destinations[0]: filters: qspThreshold: must be a number');
    });

    test('should fail if loggingDestination is not an object', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          queryLoggingConfiguration: {
            destinations: ['not an object' as unknown as LoggingDestination],
          },
        });
      }).toThrow('queryLoggingConfiguration: destinations[0]: must be an object');
    });

    test('should fail if limitsPerLabelSet limit item is not an object', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          workspaceConfiguration: {
            limitsPerLabelSets: [{
              labelSet: [{
                name: 'name',
                value: 'value',
              }],
              limits: 'not an object' as unknown as LimitsPerLabelSetEntry,
            }],
          },
        });
      }).toThrow('workspaceConfiguration: limitsPerLabelSets[0]: limits: must be an object');
    });

    test('should fail if maxSeries is not a number', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          workspaceConfiguration: {
            limitsPerLabelSets: [{
              labelSet: [{
                name: 'name',
                value: 'value',
              }],
              limits: {
                maxSeries: 'not a number' as unknown as number,
              },
            }],
          },
        });
      }).toThrow('workspaceConfiguration: limitsPerLabelSets[0]: limits: maxSeries: must be a number');
    });

    test('should fail if limitsPerLabelSets label is not an object', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          workspaceConfiguration: {
            limitsPerLabelSets: [{
              labelSet: ['not an object' as unknown as Label],
              limits: {
                maxSeries: 1,
              },
            }],
          },
        });
      }).toThrow('workspaceConfiguration: limitsPerLabelSets[0]: labelSet[0]: must be an object');
    });

    test('should fail if limitsPerLabelSets label name is not a string', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          workspaceConfiguration: {
            limitsPerLabelSets: [{
              labelSet: [{
                name: 1 as unknown as string,
                value: 'value',
              }],
              limits: {
                maxSeries: 1,
              },
            }],
          },
        });
      }).toThrow('workspaceConfiguration: limitsPerLabelSets[0]: labelSet[0]: name: must be a string');
    });

    test('should fail if limitsPerLabelSets label value is not a string', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          workspaceConfiguration: {
            limitsPerLabelSets: [{
              labelSet: [{
                name: 'name',
                value: 1 as unknown as string,
              }],
              limits: {
                maxSeries: 1,
              },
            }],
          },
        });
      }).toThrow('workspaceConfiguration: limitsPerLabelSets[0]: labelSet[0]: value: must be a string');
    });

    test('should fail if limitsPerLabelSets item is not an object', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          workspaceConfiguration: {
            limitsPerLabelSets: ['not an object' as unknown as LimitsPerLabelSet],
          },
        });
      }).toThrow('workspaceConfiguration: limitsPerLabelSets[0]: must be an object');
    });

    test('should fail if workspaceConfiguration is not an object', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          workspaceConfiguration: 'not an object' as unknown as WorkspaceConfiguration,
        });
      }).toThrow('workspaceConfiguration: must be an object');
    });

    test('should fail if limitsPerLabelSets is not an array', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          workspaceConfiguration: {
            limitsPerLabelSets: 'not an array' as unknown as LimitsPerLabelSet[],
          },
        });
      }).toThrow('workspaceConfiguration: limitsPerLabelSets: must be an array');
    });

    test('should fail if retentionPeriodInDays is not a number', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          workspaceConfiguration: {
            retentionPeriodInDays: 'not a number' as unknown as number,
          },
        });
      }).toThrow('workspaceConfiguration: retentionPeriodInDays: must be a number');
    });

    test('should fail if alertManagerDefinition is not a string', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          alertManagerDefinition: 1 as unknown as string,
        });
      }).toThrow('alertManagerDefinition: must be a string');
    });

    test('should fail if alias is not a string', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          alias: 1 as unknown as string,
        });
      }).toThrow('alias: must be a string');
    });

    test('should fail if cloudWatchLogDestination is not an object', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          queryLoggingConfiguration: {
            destinations: [{
              cloudWatchLogs: 'not an object' as unknown as CloudWatchLogDestination,
              filters: {
                qspThreshold: 0,
              },
            }],
          },
        });
      }).toThrow('queryLoggingConfiguration: destinations[0]: cloudWatchLogs: must be an object');
    });

    test('should fail if loggingFilter is not an object', () => {
      expect(() => {
        new Workspace(stack, 'myWorkspace', {
          queryLoggingConfiguration: {
            destinations: [{
              cloudWatchLogs: {
                logGroup: new LogGroup(stack, 'myLogGroup'),
              },
              filters: 'not an object' as unknown as LoggingFilter,
            }],
          },
        });
      }).toThrow('queryLoggingConfiguration: destinations[0]: filters: must be an object');
    });
  });
  describe('import from attributes', () => {
    test('should import from attributes', () => {
      const workspace = Workspace.frommWorkspaceAttributes(stack, 'myWorkspace', {
        workspaceArn: 'workspaceArn',
      });
      expect(workspace).toBeDefined;
    });
  });
  describe('isWorkspace', () => {
    test('should return true for workspace', () => {
      const workspace = new Workspace(stack, 'myWorkspace', {});
      expect(Workspace.isWorkspace(workspace)).toBe(true);
    });
  });
});


