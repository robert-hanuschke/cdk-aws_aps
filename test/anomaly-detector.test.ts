import { Stack } from 'aws-cdk-lib';
import { AnomalyDetector, AnomalyDetectorConfiguration, AnomalyDetectorLabel, AnomalyDetectorProps, IgnoreNearExpected, MissingDataAction, RandomCutForestConfiguration, Workspace } from '../src';

let stack: Stack;

beforeEach(() => {
  stack = new Stack(undefined, undefined, { env: { account: '123456789012', region: 'us-east-1' } });
});

describe('Anomaly Detector', () => {
  describe('constructor', () => {
    test('should create a new anomaly detector', () => {
      new AnomalyDetector(stack, 'myAnomalyDetector', {
        alias: 'myAnomalyDetector',
        configuration: {
          randomCutForest: {
            query: 'query',
            ignoreNearExpectedFromAbove: {
              amount: 1,
              ratio: 1,
            },
            ignoreNearExpectedFromBelow: {
              amount: 1,
              ratio: 1,
            },
            sampleSize: 256,
            shingleSize: 2,
          },
        },
        missingDataAction: {
          markAsAnomaly: true,
          skip: true,
        },
        workspace: Workspace.fromWorkspaceAttributes(stack, 'myWorkspace', {
          workspaceArn: 'workspaceArn',
        }),
      });
      expect(stack).toBeDefined();
    });
    test('should fail of props are not an object', () => {
      expect(() => {
        new AnomalyDetector(stack, 'myAnomalyDetector', 'not an object' as unknown as AnomalyDetectorProps);
      }).toThrow('AnomalyDetector constructor properties must be an object');
    });
    test('should fail of configuration is not an object', () => {
      expect(() => {
        new AnomalyDetector(stack, 'myAnomalyDetector', {
          alias: 'myAnomalyDetector',
          configuration: 'not an object' as unknown as AnomalyDetectorConfiguration,
          workspace: Workspace.fromWorkspaceAttributes(stack, 'myWorkspace', {
            workspaceArn: 'workspaceArn',
          }),
        });
      }).toThrow('configuration: must be an object');
    });
    test('should fail of configuration.randomCutForest is not an object', () => {
      expect(() => {
        new AnomalyDetector(stack, 'myAnomalyDetector', {
          alias: 'myAnomalyDetector',
          configuration: {
            randomCutForest: 'not an object' as unknown as RandomCutForestConfiguration,
          },
          workspace: Workspace.fromWorkspaceAttributes(stack, 'myWorkspace', {
            workspaceArn: 'workspaceArn',
          }),
        });
      }).toThrow('configuration: randomCutForest: must be an object');
    });
    test('IgnoreNearExpected values should be an object', () => {
      try {
        new AnomalyDetector(stack, 'myAnomalyDetector', {
          alias: 'myAnomalyDetector',
          configuration: {
            randomCutForest: {
              query: 'query',
              ignoreNearExpectedFromAbove: 'not an object' as unknown as IgnoreNearExpected,
              ignoreNearExpectedFromBelow: 'not an object' as unknown as IgnoreNearExpected,
            },
          },
          workspace: Workspace.fromWorkspaceAttributes(stack, 'myWorkspace', {
            workspaceArn: 'workspaceArn',
          }),
        });
        fail('Expected constructor to throw');
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
        if (err instanceof Error) {
          expect(err.message).toContain('configuration: randomCutForest: ignoreNearExpectedFromAbove: must be an object');
          expect(err.message).toContain('configuration: randomCutForest: ignoreNearExpectedFromBelow: must be an object');
        }
      }
    });
    test('sampleSize and shingleSize below valid range should fail', () => {
      try {
        new AnomalyDetector(stack, 'myAnomalyDetector', {
          alias: 'myAnomalyDetector',
          configuration: {
            randomCutForest: {
              query: 'query',
              sampleSize: 255,
              shingleSize: 1,
            },
          },
          workspace: Workspace.fromWorkspaceAttributes(stack, 'myWorkspace', {
            workspaceArn: 'workspaceArn',
          }),
        });
        fail('Expected constructor to throw');
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
        if (err instanceof Error) {
          expect(err.message).toContain('configuration: randomCutForest: sampleSize: must be at least 256');
          expect(err.message).toContain('configuration: randomCutForest: shingleSize: must be at least 2');
        }
      }
    });
    test('label not an object should fail', () => {
      expect(() => {
        new AnomalyDetector(stack, 'myAnomalyDetector', {
          alias: 'myAnomalyDetector',
          configuration: {
            randomCutForest: {
              query: 'query',
            },
          },
          workspace: Workspace.fromWorkspaceAttributes(stack, 'myWorkspace', {
            workspaceArn: 'workspaceArn',
          }),
          labels: ['not an object' as unknown as AnomalyDetectorLabel],
        });
      }).toThrow('labels[0]: must be an object');
    });
    test('label values above valid length should fail', () => {
      try {
        new AnomalyDetector(stack, 'myAnomalyDetector', {
          alias: 'myAnomalyDetector',
          configuration: {
            randomCutForest: {
              query: 'query',
            },
          },
          workspace: Workspace.fromWorkspaceAttributes(stack, 'myWorkspace', {
            workspaceArn: 'workspaceArn',
          }),
          labels: [{
            key: 'k'.repeat(129),
            value: 'v'.repeat(257),
          }],
        });
        fail('Expected constructor to throw');
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
        if (err instanceof Error) {
          expect(err.message).toContain('labels[0]: key: must be at most 128 characters');
          expect(err.message).toContain('labels[0]: value: must be at most 256 characters');
        }
      }
    });
    test('missingDataAction not an object should fail', () => {
      expect(() => {
        new AnomalyDetector(stack, 'myAnomalyDetector', {
          alias: 'myAnomalyDetector',
          configuration: {
            randomCutForest: {
              query: 'query',
            },
          },
          workspace: Workspace.fromWorkspaceAttributes(stack, 'myWorkspace', {
            workspaceArn: 'workspaceArn',
          }),
          missingDataAction: 'not an object' as unknown as MissingDataAction,
        });
      }).toThrow('missingDataAction: must be an object');
    });
    test('alias not a string should fail', () => {
      expect(() => {
        new AnomalyDetector(stack, 'myAnomalyDetector', {
          alias: 1 as unknown as string,
          configuration: {
            randomCutForest: {
              query: 'query',
            },
          },
          workspace: Workspace.fromWorkspaceAttributes(stack, 'myWorkspace', {
            workspaceArn: 'workspaceArn',
          }),
        });
      }).toThrow('alias: must be a string');
    });
    test('alias values above valid length or not matching regex should fail', () => {
      try {
        new AnomalyDetector(stack, 'myAnomalyDetector', {
          alias: '*'.repeat(65),
          configuration: {
            randomCutForest: {
              query: 'query',
            },
          },
          workspace: Workspace.fromWorkspaceAttributes(stack, 'myWorkspace', {
            workspaceArn: 'workspaceArn',
          }),
        });
        fail('Expected constructor to throw');
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
        if (err instanceof Error) {
          expect(err.message).toContain('alias: must be at most 64 characters long');
          expect(err.message).toContain('alias: must match regExp');
        }
      }
    });
    test('evaluationIntervalInSeconds not a number should fail', () => {
      expect(() => {
        new AnomalyDetector(stack, 'myAnomalyDetector', {
          alias: 'myAnomalyDetector',
          configuration: {
            randomCutForest: {
              query: 'query',
            },
          },
          workspace: Workspace.fromWorkspaceAttributes(stack, 'myWorkspace', {
            workspaceArn: 'workspaceArn',
          }),
          evaluationIntervalInSeconds: 'not a number' as unknown as number,
        });
      }).toThrow('evaluationIntervalInSeconds: must be a number');
    });
    test('evaluationIntervalInSeconds above valid range should fail', () => {
      expect(() => {
        new AnomalyDetector(stack, 'myAnomalyDetector', {
          alias: 'myAnomalyDetector',
          configuration: {
            randomCutForest: {
              query: 'query',
            },
          },
          workspace: Workspace.fromWorkspaceAttributes(stack, 'myWorkspace', {
            workspaceArn: 'workspaceArn',
          }),
          evaluationIntervalInSeconds: 86401,
        });
      }).toThrow('evaluationIntervalInSeconds: must be at most 86400');
    });
  });
  describe('isAnomalyDetector', () => {
    test('should return true for anomaly detector', () => {
      const anomalyDetector = new AnomalyDetector(stack, 'myAnomalyDetector', {
        alias: 'myAnomalyDetector',
        configuration: {
          randomCutForest: {
            query: 'query',
          },
        },
        workspace: Workspace.fromWorkspaceAttributes(stack, 'myWorkspace', {
          workspaceArn: 'workspaceArn',
        }),
      });
      expect(AnomalyDetector.isAnomalyDetector(anomalyDetector)).toBe(true);
    });
  });
});