# @robhan-cdk-lib/aws_aps

AWS Cloud Development Kit (CDK) constructs for Amazon Managed Service for Prometheus.

In [aws-cdk-lib.aws_aps](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_aps-readme.html), there currently only exist L1 constructs for Amazon Managed Service for Prometheus.

While helpful, they miss convenience like:

- advanced parameter checking (min/max number values, string lengths, array lengths...) before CloudFormation deployment
- proper parameter typing, e.g. enum values instead of strings
- simply referencing other constructs instead of e.g. ARN strings

Those features are implemented here.

The CDK maintainers explain that [publishing your own package](https://github.com/aws/aws-cdk/blob/main/CONTRIBUTING.md#publishing-your-own-package) is "by far the strongest signal you can give to the CDK team that a feature should be included within the core aws-cdk packages".

This project aims to develop aws_aps constructs to a maturity that can potentially be accepted to the CDK core.

It is not supported by AWS and is not endorsed by them. Please file issues in the [GitHub repository](https://github.com/robert-hanuschke/cdk-aws_aps/issues) if you find any.

## Example use

```typescript
import * as cdk from 'aws-cdk-lib';
import { Subnet } from 'aws-cdk-lib/aws-ec2';
import { Cluster } from 'aws-cdk-lib/aws-eks';
import { Construct } from 'constructs';
import { Workspace, RuleGroupsNamespace, Scraper } from '@robhan-cdk-lib/aws_aps';

export class AwsApsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const workspace = new Workspace(this, 'MyWorkspace', {});
    new RuleGroupsNamespace(this, 'MyRuleGroupsNamespace', { workspace, data: '<myRulesFileData>', name: 'myRuleGroupsNamespace' });
    new Scraper(this, 'MyScraper', {
      destination: {
        ampConfiguration: {
          workspace,
        },
      },
      source: {
        eksConfiguration: {
          cluster: Cluster.fromClusterAttributes(this, 'MyCluster', {
            clusterName: 'clusterName',
          }),
          subnets: [
            Subnet.fromSubnetAttributes(this, 'MySubnet', {
              subnetId: 'subnetId',
            }),
          ],
        },
      },
      scrapeConfiguration: {
        configurationBlob: '<myScrapeConfiguration>',
      },
    });
  }
}
```

## License

MIT
