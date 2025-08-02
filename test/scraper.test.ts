import { Stack } from 'aws-cdk-lib';
import { Subnet, SecurityGroup, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Cluster, KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { LayerVersion } from 'aws-cdk-lib/aws-lambda';
import { AmpConfiguration, Destination, EksConfiguration, RoleConfiguration, Scraper, ScraperProps, Source, Workspace } from '../src';

let stack: Stack;

beforeEach(() => {
  stack = new Stack(undefined, undefined, { env: { account: '123456789012', region: 'us-east-1' } });
});

function getMinimalValidProps(testStack: Stack): ScraperProps {
  const props: ScraperProps = {
    destination: {
      ampConfiguration: {
        workspace: new Workspace(testStack, 'myWorkspace', {}),
      },
    },
    scrapeConfiguration: {
      configurationBlob: '',
    },
    source: {
      eksConfiguration: {
        cluster: Cluster.fromClusterAttributes(testStack, 'myCluster', {
          clusterName: 'clusterName',
        }),
        subnets: [
          Subnet.fromSubnetAttributes(testStack, 'mySubnet', {
            subnetId: 'subnetId',
          }),
        ],
        securityGroups: [
          SecurityGroup.fromSecurityGroupId(testStack, 'mySecurityGroup', 'securityGroupId'),
        ],
      },
    },
  };

  return props;
}


describe('Scraper', () => {
  describe('constructor', () => {
    test('should create a new scraper', () => {
      const scraper = new Scraper(stack, 'myScraper', {
        destination: {
          ampConfiguration: {
            workspace: new Workspace(stack, 'myWorkspace', {
            }),
          },
        },
        scrapeConfiguration: {
          configurationBlob: '',
        },
        source: {
          eksConfiguration: {
            cluster: new Cluster(stack, 'myCluster', {
              vpc: new Vpc(stack, 'myVpc', {

              }),
              kubectlLayer: LayerVersion.fromLayerVersionArn(stack, 'myLayerVersionArn', 'layerVersionArn'),
              version: KubernetesVersion.V1_32,
            }),
            subnets: [
              Subnet.fromSubnetAttributes(stack, 'mySubnet', {
                subnetId: 'subnetId',
              }),
            ],
            securityGroups: [
              SecurityGroup.fromSecurityGroupId(stack, 'mySecurityGroup', 'securityGroupId'),
            ],
          },
        },
        alias: 'r'.repeat(100),
        roleConfiguration: {
          sourceRole: new Role(stack, 'mySourceRole', {
            assumedBy: new ServicePrincipal('aps.amazonaws.com'),
          }),
          targetRole: new Role(stack, 'myTargetRole', {
            assumedBy: new ServicePrincipal('aps.amazonaws.com'),
          }),
        },
      });
      expect(scraper).toBeDefined();
    });

    test('should fail if props is not an object', () => {
      expect(() => {
        new Scraper(stack, 'myScraper', 'not an object' as unknown as ScraperProps);
      }).toThrow('Scraper constructor properties must be an object');
    });

    test('should fail if ampConfiguration is not an object', () => {
      expect(() => {
        new Scraper(stack, 'myScraper', {
          ...getMinimalValidProps(stack),
          destination: {
            ampConfiguration: 'not an object' as unknown as AmpConfiguration,
          },
        });
      }).toThrow('destination: ampConfiguration: must be an object');
    });

    test('should fail if destination is not an object', () => {
      expect(() => {
        new Scraper(stack, 'myScraper', {
          ...getMinimalValidProps(stack),
          destination: 'not an object' as unknown as Destination,
        });
      }).toThrow('destination: must be an object');
    });

    test('should fail if roleConfiguration is not an object', () => {
      expect(() => {
        new Scraper(stack, 'myScraper', {
          ...getMinimalValidProps(stack),
          roleConfiguration: 'not an object' as unknown as RoleConfiguration,
        });
      }).toThrow('roleConfiguration: must be an object');
    });

    test('should fail if scrapeConfiguration is not an object', () => {
      expect(() => {
        new Scraper(stack, 'myScraper', {
          ...getMinimalValidProps(stack),
          scrapeConfiguration: 'not an object' as unknown as any,
        });
      }).toThrow('scrapeConfiguration: must be an object');
    });

    test('should fail if scrapeConfiguration.configurationBlob is not a string', () => {
      expect(() => {
        new Scraper(stack, 'myScraper', {
          ...getMinimalValidProps(stack),
          scrapeConfiguration: {
            configurationBlob: 1 as unknown as string,
          },
        });
      }).toThrow('scrapeConfiguration: configurationBlob: must be a string');
    });

    test('should fail if eksConfiguration is not an object', () => {
      expect(() => {
        new Scraper(stack, 'myScraper', {
          ...getMinimalValidProps(stack),
          source: {
            eksConfiguration: 'not an object' as unknown as EksConfiguration,
          },
        });
      }).toThrow('source: eksConfiguration: must be an object');
    });

    test('should fail if eksConfiguration.securityGroups is not an array', () => {
      expect(() => {
        new Scraper(stack, 'myScraper', {
          ...getMinimalValidProps(stack),
          source: {
            eksConfiguration: {
              securityGroups: 'not an array' as unknown as SecurityGroup[],
              subnets: [
                Subnet.fromSubnetAttributes(stack, 'mySubnet1', {
                  subnetId: 'subnetId',
                }),
              ],
              cluster: Cluster.fromClusterAttributes(stack, 'myCluster1', {
                clusterName: 'clusterName',
              }),
            },
          },
        });
      }).toThrow('source: eksConfiguration: securityGroups: must be an array');
    });

    test('should fail if eksConfiguration.subnets is not an array', () => {
      expect(() => {
        new Scraper(stack, 'myScraper', {
          ...getMinimalValidProps(stack),
          source: {
            eksConfiguration: {
              subnets: 'not an array' as unknown as Subnet[],
              cluster: Cluster.fromClusterAttributes(stack, 'myCluster1', {
                clusterName: 'clusterName',
              }),
            },
          },
        });
      }).toThrow('source: eksConfiguration: subnets: must be an array');
    });

    test('should fail if source is not an object', () => {
      expect(() => {
        new Scraper(stack, 'myScraper', {
          ...getMinimalValidProps(stack),
          source: 'not an object' as unknown as Source,
        });
      }).toThrow('source: must be an object');
    });

    test('should fail if alias is not a string', () => {
      expect(() => {
        new Scraper(stack, 'myScraper', {
          ...getMinimalValidProps(stack),
          alias: 1 as unknown as string,
        });
      }).toThrow('alias: must be a string');
    });

    test('should fail if alias is an empty string', () => {
      expect(() => {
        new Scraper(stack, 'myScraper', {
          ...getMinimalValidProps(stack),
          alias: '',
        });
      }).toThrow('alias: must be at least 1 character long');
    });
  });

  describe('import from attributes', () => {
    test('should import from attributes', () => {
      const scraper = Scraper.frommScraperAttributes(stack, 'myScraper', {
        ...getMinimalValidProps(stack),
        scraperArn: 'scraperArn',
      });
      expect(scraper).toBeDefined;
    });
  });

  describe('isScraper', () => {
    test('should return true for scraper', () => {
      const scraper = new Scraper(stack, 'myScraper', getMinimalValidProps(stack));
      expect(Scraper.isScraper(scraper)).toBe(true);
    });
  });
});