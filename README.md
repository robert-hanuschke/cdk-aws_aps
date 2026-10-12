# @robhan-cdk-lib/aws_aps

Higher-level AWS Cloud Development Kit (CDK) constructs for Amazon Managed Service for Prometheus.

The upstream [`aws-cdk-lib/aws-aps`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_aps-readme.html) module currently contains generated L1 constructs only. This library explores an L2 API intended to feel native to the AWS Construct Library:

- references to workspaces, EKS clusters, IAM roles, KMS keys, log groups, subnets, and security groups use CDK resource-reference interfaces rather than raw identifiers;
- owned and existing resources expose minimal, stable identity interfaces and token-safe `from...Arn` factories;
- scraper destinations, sources, and configuration encodings use factories that prevent invalid combinations;
- resource policies accept and validate `iam.PolicyDocument`;
- taggable resources support both `props.tags` and `Tags.of(...)`;
- all currently available `AWS::APS` CloudFormation resource types and properties are covered.

Schema constraints already expressed by CloudFormation, such as most string lengths and numeric ranges, are left to CloudFormation. Repeating them eagerly in an L2 is unsafe for unresolved CDK tokens and can drift from the service schema. A small set of concrete numeric invariants absent from that schema is checked locally; unresolved values and semantic content such as PromQL syntax remain service-validated.

This package is not supported or endorsed by AWS. Please report issues in the [project repository](https://github.com/robert-hanuschke/cdk-aws_aps/issues).

## Workspace and rule groups

A workspace has no required properties. Related constructs accept the generated `IWorkspaceRef` contract, so both this L2 and the upstream `CfnWorkspace` can be used.

```typescript
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { RuleGroupsNamespace, Workspace } from '@robhan-cdk-lib/aws_aps';

export class MetricsStack extends Stack {
  public constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const workspace = new Workspace(this, 'Workspace', {
      alias: 'application-metrics',
      workspaceConfiguration: {
        outOfOrderTimeWindowInSeconds: 300,
        retentionPeriodInDays: 365,
        ruleQueryOffsetInSeconds: 60,
      },
      tags: { environment: 'production' },
    });

    new RuleGroupsNamespace(this, 'Rules', {
      workspace,
      name: 'availability',
      data: `groups:
  - name: availability
    rules:
      - record: service:up:sum
        expr: sum(up)
`,
    });
  }
}
```

## Managed scraper

Scraper factories model the mutually exclusive destination and source variants. `ScrapeConfiguration.fromString()` accepts raw Prometheus YAML. The CloudFormation resource provider performs the service API blob serialization; do not base64-encode the value.

```typescript
import { Stack, StackProps } from 'aws-cdk-lib';
import { Subnet } from 'aws-cdk-lib/aws-ec2';
import { Cluster } from 'aws-cdk-lib/aws-eks';
import { Construct } from 'constructs';
import {
  ScrapeConfiguration,
  Scraper,
  ScraperDestination,
  ScraperSource,
  Workspace,
} from '@robhan-cdk-lib/aws_aps';

export class ScraperStack extends Stack {
  public constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const workspace = new Workspace(this, 'Workspace');
    const cluster = Cluster.fromClusterAttributes(this, 'Cluster', {
      clusterName: 'metrics-cluster',
    });
    const subnet = Subnet.fromSubnetId(this, 'Subnet', 'subnet-0123456789abcdef0');

    new Scraper(this, 'Scraper', {
      destination: ScraperDestination.amp(workspace),
      source: ScraperSource.eks({ cluster, subnets: [subnet] }),
      scrapeConfiguration: ScrapeConfiguration.fromString(`scrape_configs:
  - job_name: kubernetes-pods
    kubernetes_sd_configs:
      - role: pod
`),
    });
  }
}
```

`ScraperDestination.cloudWatch()` supports the account's CloudWatch dataset. `ScraperSource.vpc()` supports VPC-reachable Prometheus sources and must be paired with a CloudWatch destination; EKS sources can use either AMP or CloudWatch.

### Scraper prerequisites

A scraper does not modify the supplied network, EKS authorization, IAM roles, or KMS policy:

- An EKS source requires private cluster endpoint access, VPC DNS, and available addresses in every selected subnet. Automatic access entries require EKS authentication mode `API` or `API_AND_CONFIG_MAP`; otherwise configure the required Kubernetes RBAC manually. See [Set up managed collectors for Amazon EKS](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html).
- For cross-account collection, provide both source and target roles and configure their trust and permissions. The same explicit role configuration is required when the destination workspace uses a customer-managed KMS key, including a same-account scraper.
- For VPC sources, prefer private subnets and security-group egress limited to the intended Prometheus endpoints. The construct does not add broad network rules.

## Anomaly detection

`MissingDataAction` and `IgnoreNearExpected` represent service API unions, so callers cannot accidentally request incompatible alternatives. Random Cut Forest queries must be wrapped by `avg`, `count`, `group`, `max`, `min`, `quantile`, `stddev`, `stdvar`, or `sum`; Amazon Managed Service for Prometheus validates the PromQL semantics.

```typescript
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  AnomalyDetector,
  IgnoreNearExpected,
  MissingDataAction,
  Workspace,
} from '@robhan-cdk-lib/aws_aps';

export class AnomalyStack extends Stack {
  public constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const workspace = Workspace.fromWorkspaceArn(
      this,
      'Workspace',
      'arn:aws:aps:us-east-1:123456789012:workspace/ws-example',
    );

    new AnomalyDetector(this, 'Detector', {
      workspace,
      alias: 'request-rate',
      configuration: {
        randomCutForest: {
          query: 'sum(rate(requests_total[5m]))',
          ignoreNearExpectedFromAbove: IgnoreNearExpected.ratio(0.1),
        },
      },
      missingDataAction: MissingDataAction.SKIP,
    });
  }
}
```

## Resource policies

Resource policies use the IAM policy model, validate resource-policy requirements at synthesis, and render lazily so statements added after construction are included. If the workspace uses a customer-managed KMS key, every cross-account principal also needs access to that key; the resource policy alone is insufficient.

```typescript
import { Stack, StackProps } from 'aws-cdk-lib';
import { AccountPrincipal, PolicyDocument, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { ResourcePolicy, Workspace } from '@robhan-cdk-lib/aws_aps';

export class PolicyStack extends Stack {
  public constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const workspace = Workspace.fromWorkspaceArn(
      this,
      'Workspace',
      'arn:aws:aps:us-east-1:123456789012:workspace/ws-example',
    );

    new ResourcePolicy(this, 'ResourcePolicy', {
      workspace,
      policyDocument: new PolicyDocument({
        statements: [new PolicyStatement({
          actions: ['aps:QueryMetrics'],
          principals: [new AccountPrincipal('210987654321')],
          resources: [workspace.workspaceArn],
        })],
      }),
    });
  }
}
```

## Referencing existing resources

Each resource with an ARN has a token-safe reference factory:

- `Workspace.fromWorkspaceArn()` and `Workspace.fromWorkspaceAttributes()`
- `RuleGroupsNamespace.fromRuleGroupsNamespaceArn()`
- `Scraper.fromScraperArn()`
- `AnomalyDetector.fromAnomalyDetectorArn()`
- `ResourcePolicy.fromWorkspaceArn()`

## Validation commands

- `yarn build` compiles the jsii API, strictly compiles README examples, runs unit tests and the isolated test-project type check, lints, and packages JavaScript, Java, Python, .NET, and Go.
- `yarn integ:snapshot` verifies or updates the integration snapshot without contacting AWS.
- `yarn integ` deploys the integration test in `us-east-1`; run it as `AWS_PROFILE=<non-production-profile> AWS_REGION=us-east-1 yarn integ` and verify cleanup.
- `yarn compat` compares the jsii surface against the latest published package.

## Compatibility

Version `0.1.0` introduces this core-aligned API and intentionally breaks the earlier `0.0.x` prototype API. The exact reviewed breaks are enumerated in `.compatignore`; additional jsii incompatibilities still fail the compatibility gate.

## Upstream status

The implementation follows the current [AWS CDK contributing guide](https://github.com/aws/aws-cdk/blob/main/CONTRIBUTING.md), [construct design guidelines](https://github.com/aws/aws-cdk/blob/main/docs/DESIGN_GUIDELINES.md), and the adjacent Grafana construct library as local prior art. A core contribution still requires design consensus, an upstream issue or RFC, a port into the `aws-cdk` monorepo, and a repeat of deploy-backed integration verification in the upstream test layout.

## License

MIT
