# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnomalyDetector <a name="AnomalyDetector" id="@robhan-cdk-lib/aws_aps.AnomalyDetector"></a>

- *Implements:* <a href="#@robhan-cdk-lib/aws_aps.IAnomalyDetector">IAnomalyDetector</a>

An Amazon Managed Service for Prometheus anomaly detector.

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.Initializer"></a>

```typescript
import { AnomalyDetector } from '@robhan-cdk-lib/aws_aps'

new AnomalyDetector(scope: Construct, id: string, props: AnomalyDetectorProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.Initializer.parameter.props">props</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorProps">AnomalyDetectorProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.Initializer.parameter.props"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorProps">AnomalyDetectorProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.applyCrossStackReferenceStrength">applyCrossStackReferenceStrength</a></code> | Override the cross-stack reference strength for this resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

---

##### `applyCrossStackReferenceStrength` <a name="applyCrossStackReferenceStrength" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.applyCrossStackReferenceStrength"></a>

```typescript
public applyCrossStackReferenceStrength(strength: ReferenceStrength): void
```

Override the cross-stack reference strength for this resource.

When set, any cross-stack reference to this resource will use the specified
mechanism instead of the global default determined by the
`@aws-cdk/core:defaultCrossStackReferences` context key. This is useful for
selectively weakening specific references to avoid the "deadly embrace" problem
without changing the app-wide default.

###### `strength`<sup>Required</sup> <a name="strength" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.applyCrossStackReferenceStrength.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use for this resource.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.fromAnomalyDetectorArn">fromAnomalyDetectorArn</a></code> | Reference an existing anomaly detector by ARN. |

---

##### `isConstruct` <a name="isConstruct" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.isConstruct"></a>

```typescript
import { AnomalyDetector } from '@robhan-cdk-lib/aws_aps'

AnomalyDetector.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.isOwnedResource"></a>

```typescript
import { AnomalyDetector } from '@robhan-cdk-lib/aws_aps'

AnomalyDetector.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.isResource"></a>

```typescript
import { AnomalyDetector } from '@robhan-cdk-lib/aws_aps'

AnomalyDetector.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromAnomalyDetectorArn` <a name="fromAnomalyDetectorArn" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.fromAnomalyDetectorArn"></a>

```typescript
import { AnomalyDetector } from '@robhan-cdk-lib/aws_aps'

AnomalyDetector.fromAnomalyDetectorArn(scope: Construct, id: string, anomalyDetectorArn: string)
```

Reference an existing anomaly detector by ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.fromAnomalyDetectorArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.fromAnomalyDetectorArn.parameter.id"></a>

- *Type:* string

---

###### `anomalyDetectorArn`<sup>Required</sup> <a name="anomalyDetectorArn" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.fromAnomalyDetectorArn.parameter.anomalyDetectorArn"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.property.anomalyDetectorArn">anomalyDetectorArn</a></code> | <code>string</code> | The ARN of the anomaly detector. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector.property.anomalyDetectorRef">anomalyDetectorRef</a></code> | <code>aws-cdk-lib.interfaces.aws_aps.AnomalyDetectorReference</code> | A reference to a AnomalyDetector resource. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `anomalyDetectorArn`<sup>Required</sup> <a name="anomalyDetectorArn" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.property.anomalyDetectorArn"></a>

```typescript
public readonly anomalyDetectorArn: string;
```

- *Type:* string

The ARN of the anomaly detector.

---

##### `anomalyDetectorRef`<sup>Required</sup> <a name="anomalyDetectorRef" id="@robhan-cdk-lib/aws_aps.AnomalyDetector.property.anomalyDetectorRef"></a>

```typescript
public readonly anomalyDetectorRef: AnomalyDetectorReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_aps.AnomalyDetectorReference

A reference to a AnomalyDetector resource.

---


### ResourcePolicy <a name="ResourcePolicy" id="@robhan-cdk-lib/aws_aps.ResourcePolicy"></a>

- *Implements:* <a href="#@robhan-cdk-lib/aws_aps.IResourcePolicy">IResourcePolicy</a>

A resource-based policy attached to an Amazon Managed Service for Prometheus workspace.

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.Initializer"></a>

```typescript
import { ResourcePolicy } from '@robhan-cdk-lib/aws_aps'

new ResourcePolicy(scope: Construct, id: string, props: ResourcePolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.Initializer.parameter.props">props</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicyProps">ResourcePolicyProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.Initializer.parameter.props"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ResourcePolicyProps">ResourcePolicyProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.applyCrossStackReferenceStrength">applyCrossStackReferenceStrength</a></code> | Override the cross-stack reference strength for this resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

---

##### `applyCrossStackReferenceStrength` <a name="applyCrossStackReferenceStrength" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.applyCrossStackReferenceStrength"></a>

```typescript
public applyCrossStackReferenceStrength(strength: ReferenceStrength): void
```

Override the cross-stack reference strength for this resource.

When set, any cross-stack reference to this resource will use the specified
mechanism instead of the global default determined by the
`@aws-cdk/core:defaultCrossStackReferences` context key. This is useful for
selectively weakening specific references to avoid the "deadly embrace" problem
without changing the app-wide default.

###### `strength`<sup>Required</sup> <a name="strength" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.applyCrossStackReferenceStrength.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use for this resource.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.fromWorkspaceArn">fromWorkspaceArn</a></code> | Reference an existing resource policy by the ARN of its workspace. |

---

##### `isConstruct` <a name="isConstruct" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.isConstruct"></a>

```typescript
import { ResourcePolicy } from '@robhan-cdk-lib/aws_aps'

ResourcePolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.isOwnedResource"></a>

```typescript
import { ResourcePolicy } from '@robhan-cdk-lib/aws_aps'

ResourcePolicy.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.isResource"></a>

```typescript
import { ResourcePolicy } from '@robhan-cdk-lib/aws_aps'

ResourcePolicy.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromWorkspaceArn` <a name="fromWorkspaceArn" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.fromWorkspaceArn"></a>

```typescript
import { ResourcePolicy } from '@robhan-cdk-lib/aws_aps'

ResourcePolicy.fromWorkspaceArn(scope: Construct, id: string, workspaceArn: string)
```

Reference an existing resource policy by the ARN of its workspace.

###### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.fromWorkspaceArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.fromWorkspaceArn.parameter.id"></a>

- *Type:* string

---

###### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.fromWorkspaceArn.parameter.workspaceArn"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.property.policyDocument">policyDocument</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The policy document rendered by this resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.property.resourcePolicyRef">resourcePolicyRef</a></code> | <code>aws-cdk-lib.interfaces.aws_aps.ResourcePolicyReference</code> | A reference to a ResourcePolicy resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | The ARN of the workspace protected by the policy. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.property.policyDocument"></a>

```typescript
public readonly policyDocument: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

The policy document rendered by this resource.

---

##### `resourcePolicyRef`<sup>Required</sup> <a name="resourcePolicyRef" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.property.resourcePolicyRef"></a>

```typescript
public readonly resourcePolicyRef: ResourcePolicyReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_aps.ResourcePolicyReference

A reference to a ResourcePolicy resource.

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@robhan-cdk-lib/aws_aps.ResourcePolicy.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

The ARN of the workspace protected by the policy.

---


### RuleGroupsNamespace <a name="RuleGroupsNamespace" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace"></a>

- *Implements:* <a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace">IRuleGroupsNamespace</a>

An Amazon Managed Service for Prometheus rule groups namespace.

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.Initializer"></a>

```typescript
import { RuleGroupsNamespace } from '@robhan-cdk-lib/aws_aps'

new RuleGroupsNamespace(scope: Construct, id: string, props: RuleGroupsNamespaceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.Initializer.parameter.props">props</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps">RuleGroupsNamespaceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.Initializer.parameter.props"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps">RuleGroupsNamespaceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.applyCrossStackReferenceStrength">applyCrossStackReferenceStrength</a></code> | Override the cross-stack reference strength for this resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

---

##### `applyCrossStackReferenceStrength` <a name="applyCrossStackReferenceStrength" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.applyCrossStackReferenceStrength"></a>

```typescript
public applyCrossStackReferenceStrength(strength: ReferenceStrength): void
```

Override the cross-stack reference strength for this resource.

When set, any cross-stack reference to this resource will use the specified
mechanism instead of the global default determined by the
`@aws-cdk/core:defaultCrossStackReferences` context key. This is useful for
selectively weakening specific references to avoid the "deadly embrace" problem
without changing the app-wide default.

###### `strength`<sup>Required</sup> <a name="strength" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.applyCrossStackReferenceStrength.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use for this resource.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.fromRuleGroupsNamespaceArn">fromRuleGroupsNamespaceArn</a></code> | Reference an existing rule groups namespace by ARN. |

---

##### `isConstruct` <a name="isConstruct" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.isConstruct"></a>

```typescript
import { RuleGroupsNamespace } from '@robhan-cdk-lib/aws_aps'

RuleGroupsNamespace.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.isOwnedResource"></a>

```typescript
import { RuleGroupsNamespace } from '@robhan-cdk-lib/aws_aps'

RuleGroupsNamespace.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.isResource"></a>

```typescript
import { RuleGroupsNamespace } from '@robhan-cdk-lib/aws_aps'

RuleGroupsNamespace.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromRuleGroupsNamespaceArn` <a name="fromRuleGroupsNamespaceArn" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.fromRuleGroupsNamespaceArn"></a>

```typescript
import { RuleGroupsNamespace } from '@robhan-cdk-lib/aws_aps'

RuleGroupsNamespace.fromRuleGroupsNamespaceArn(scope: Construct, id: string, ruleGroupsNamespaceArn: string)
```

Reference an existing rule groups namespace by ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.fromRuleGroupsNamespaceArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.fromRuleGroupsNamespaceArn.parameter.id"></a>

- *Type:* string

---

###### `ruleGroupsNamespaceArn`<sup>Required</sup> <a name="ruleGroupsNamespaceArn" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.fromRuleGroupsNamespaceArn.parameter.ruleGroupsNamespaceArn"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.ruleGroupsNamespaceArn">ruleGroupsNamespaceArn</a></code> | <code>string</code> | The ARN of the rule groups namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.ruleGroupsNamespaceRef">ruleGroupsNamespaceRef</a></code> | <code>aws-cdk-lib.interfaces.aws_aps.RuleGroupsNamespaceReference</code> | A reference to a RuleGroupsNamespace resource. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleGroupsNamespaceArn`<sup>Required</sup> <a name="ruleGroupsNamespaceArn" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.ruleGroupsNamespaceArn"></a>

```typescript
public readonly ruleGroupsNamespaceArn: string;
```

- *Type:* string

The ARN of the rule groups namespace.

---

##### `ruleGroupsNamespaceRef`<sup>Required</sup> <a name="ruleGroupsNamespaceRef" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.ruleGroupsNamespaceRef"></a>

```typescript
public readonly ruleGroupsNamespaceRef: RuleGroupsNamespaceReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_aps.RuleGroupsNamespaceReference

A reference to a RuleGroupsNamespace resource.

---


### Scraper <a name="Scraper" id="@robhan-cdk-lib/aws_aps.Scraper"></a>

- *Implements:* <a href="#@robhan-cdk-lib/aws_aps.IScraper">IScraper</a>

An Amazon Managed Service for Prometheus scraper.

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_aps.Scraper.Initializer"></a>

```typescript
import { Scraper } from '@robhan-cdk-lib/aws_aps'

new Scraper(scope: Construct, id: string, props: ScraperProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.Initializer.parameter.props">props</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.ScraperProps">ScraperProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.Scraper.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.Scraper.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@robhan-cdk-lib/aws_aps.Scraper.Initializer.parameter.props"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ScraperProps">ScraperProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.applyCrossStackReferenceStrength">applyCrossStackReferenceStrength</a></code> | Override the cross-stack reference strength for this resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_aps.Scraper.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@robhan-cdk-lib/aws_aps.Scraper.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@robhan-cdk-lib/aws_aps.Scraper.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

---

##### `applyCrossStackReferenceStrength` <a name="applyCrossStackReferenceStrength" id="@robhan-cdk-lib/aws_aps.Scraper.applyCrossStackReferenceStrength"></a>

```typescript
public applyCrossStackReferenceStrength(strength: ReferenceStrength): void
```

Override the cross-stack reference strength for this resource.

When set, any cross-stack reference to this resource will use the specified
mechanism instead of the global default determined by the
`@aws-cdk/core:defaultCrossStackReferences` context key. This is useful for
selectively weakening specific references to avoid the "deadly embrace" problem
without changing the app-wide default.

###### `strength`<sup>Required</sup> <a name="strength" id="@robhan-cdk-lib/aws_aps.Scraper.applyCrossStackReferenceStrength.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use for this resource.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@robhan-cdk-lib/aws_aps.Scraper.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@robhan-cdk-lib/aws_aps.Scraper.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.fromScraperArn">fromScraperArn</a></code> | Reference an existing scraper by ARN. |

---

##### `isConstruct` <a name="isConstruct" id="@robhan-cdk-lib/aws_aps.Scraper.isConstruct"></a>

```typescript
import { Scraper } from '@robhan-cdk-lib/aws_aps'

Scraper.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_aps.Scraper.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@robhan-cdk-lib/aws_aps.Scraper.isOwnedResource"></a>

```typescript
import { Scraper } from '@robhan-cdk-lib/aws_aps'

Scraper.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.Scraper.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@robhan-cdk-lib/aws_aps.Scraper.isResource"></a>

```typescript
import { Scraper } from '@robhan-cdk-lib/aws_aps'

Scraper.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.Scraper.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromScraperArn` <a name="fromScraperArn" id="@robhan-cdk-lib/aws_aps.Scraper.fromScraperArn"></a>

```typescript
import { Scraper } from '@robhan-cdk-lib/aws_aps'

Scraper.fromScraperArn(scope: Construct, id: string, scraperArn: string)
```

Reference an existing scraper by ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.Scraper.fromScraperArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.Scraper.fromScraperArn.parameter.id"></a>

- *Type:* string

---

###### `scraperArn`<sup>Required</sup> <a name="scraperArn" id="@robhan-cdk-lib/aws_aps.Scraper.fromScraperArn.parameter.scraperArn"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.scraperArn">scraperArn</a></code> | <code>string</code> | The ARN of the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.scraperId">scraperId</a></code> | <code>string</code> | The unique ID of the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.scraperRef">scraperRef</a></code> | <code>aws-cdk-lib.interfaces.aws_aps.ScraperReference</code> | A reference to a Scraper resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.scraperRoleArn">scraperRoleArn</a></code> | <code>string</code> | The ARN of the service-created scraper role. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_aps.Scraper.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_aps.Scraper.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_aps.Scraper.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `scraperArn`<sup>Required</sup> <a name="scraperArn" id="@robhan-cdk-lib/aws_aps.Scraper.property.scraperArn"></a>

```typescript
public readonly scraperArn: string;
```

- *Type:* string

The ARN of the scraper.

---

##### `scraperId`<sup>Required</sup> <a name="scraperId" id="@robhan-cdk-lib/aws_aps.Scraper.property.scraperId"></a>

```typescript
public readonly scraperId: string;
```

- *Type:* string

The unique ID of the scraper.

---

##### `scraperRef`<sup>Required</sup> <a name="scraperRef" id="@robhan-cdk-lib/aws_aps.Scraper.property.scraperRef"></a>

```typescript
public readonly scraperRef: ScraperReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_aps.ScraperReference

A reference to a Scraper resource.

---

##### `scraperRoleArn`<sup>Required</sup> <a name="scraperRoleArn" id="@robhan-cdk-lib/aws_aps.Scraper.property.scraperRoleArn"></a>

```typescript
public readonly scraperRoleArn: string;
```

- *Type:* string

The ARN of the service-created scraper role.

This attribute is available on scrapers created by this construct. It is intentionally not on
`IScraper`, because the role ARN cannot be derived when referencing a scraper by ARN alone.

---


### Workspace <a name="Workspace" id="@robhan-cdk-lib/aws_aps.Workspace"></a>

- *Implements:* <a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a>

An Amazon Managed Service for Prometheus workspace.

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_aps.Workspace.Initializer"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_aps'

new Workspace(scope: Construct, id: string, props?: WorkspaceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.Initializer.parameter.props">props</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps">WorkspaceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.Workspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.Workspace.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@robhan-cdk-lib/aws_aps.Workspace.Initializer.parameter.props"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps">WorkspaceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.applyCrossStackReferenceStrength">applyCrossStackReferenceStrength</a></code> | Override the cross-stack reference strength for this resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_aps.Workspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@robhan-cdk-lib/aws_aps.Workspace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@robhan-cdk-lib/aws_aps.Workspace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

---

##### `applyCrossStackReferenceStrength` <a name="applyCrossStackReferenceStrength" id="@robhan-cdk-lib/aws_aps.Workspace.applyCrossStackReferenceStrength"></a>

```typescript
public applyCrossStackReferenceStrength(strength: ReferenceStrength): void
```

Override the cross-stack reference strength for this resource.

When set, any cross-stack reference to this resource will use the specified
mechanism instead of the global default determined by the
`@aws-cdk/core:defaultCrossStackReferences` context key. This is useful for
selectively weakening specific references to avoid the "deadly embrace" problem
without changing the app-wide default.

###### `strength`<sup>Required</sup> <a name="strength" id="@robhan-cdk-lib/aws_aps.Workspace.applyCrossStackReferenceStrength.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use for this resource.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@robhan-cdk-lib/aws_aps.Workspace.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@robhan-cdk-lib/aws_aps.Workspace.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceArn">fromWorkspaceArn</a></code> | Reference an existing workspace by ARN. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceAttributes">fromWorkspaceAttributes</a></code> | Reference an existing workspace from its attributes. |

---

##### `isConstruct` <a name="isConstruct" id="@robhan-cdk-lib/aws_aps.Workspace.isConstruct"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_aps'

Workspace.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_aps.Workspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@robhan-cdk-lib/aws_aps.Workspace.isOwnedResource"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_aps'

Workspace.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.Workspace.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@robhan-cdk-lib/aws_aps.Workspace.isResource"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_aps'

Workspace.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.Workspace.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromWorkspaceArn` <a name="fromWorkspaceArn" id="@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceArn"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_aps'

Workspace.fromWorkspaceArn(scope: Construct, id: string, workspaceArn: string)
```

Reference an existing workspace by ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceArn.parameter.id"></a>

- *Type:* string

---

###### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceArn.parameter.workspaceArn"></a>

- *Type:* string

---

##### `fromWorkspaceAttributes` <a name="fromWorkspaceAttributes" id="@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceAttributes"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_aps'

Workspace.fromWorkspaceAttributes(scope: Construct, id: string, attrs: WorkspaceAttributes)
```

Reference an existing workspace from its attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceAttributes.parameter.attrs"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceAttributes">WorkspaceAttributes</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.prometheusEndpoint">prometheusEndpoint</a></code> | <code>string</code> | The Prometheus-compatible query endpoint for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | The ARN of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | The unique ID of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.workspaceRef">workspaceRef</a></code> | <code>aws-cdk-lib.interfaces.aws_aps.WorkspaceReference</code> | A reference to a Workspace resource. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_aps.Workspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_aps.Workspace.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_aps.Workspace.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `prometheusEndpoint`<sup>Required</sup> <a name="prometheusEndpoint" id="@robhan-cdk-lib/aws_aps.Workspace.property.prometheusEndpoint"></a>

```typescript
public readonly prometheusEndpoint: string;
```

- *Type:* string

The Prometheus-compatible query endpoint for the workspace.

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@robhan-cdk-lib/aws_aps.Workspace.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

The ARN of the workspace.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@robhan-cdk-lib/aws_aps.Workspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The unique ID of the workspace.

---

##### `workspaceRef`<sup>Required</sup> <a name="workspaceRef" id="@robhan-cdk-lib/aws_aps.Workspace.property.workspaceRef"></a>

```typescript
public readonly workspaceRef: WorkspaceReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_aps.WorkspaceReference

A reference to a Workspace resource.

---


## Structs <a name="Structs" id="Structs"></a>

### AnomalyDetectorConfiguration <a name="AnomalyDetectorConfiguration" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorConfiguration"></a>

Algorithm configuration for an anomaly detector.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorConfiguration.Initializer"></a>

```typescript
import { AnomalyDetectorConfiguration } from '@robhan-cdk-lib/aws_aps'

const anomalyDetectorConfiguration: AnomalyDetectorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorConfiguration.property.randomCutForest">randomCutForest</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.RandomCutForestConfiguration">RandomCutForestConfiguration</a></code> | Random Cut Forest algorithm settings. |

---

##### `randomCutForest`<sup>Required</sup> <a name="randomCutForest" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorConfiguration.property.randomCutForest"></a>

```typescript
public readonly randomCutForest: RandomCutForestConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.RandomCutForestConfiguration">RandomCutForestConfiguration</a>

Random Cut Forest algorithm settings.

---

### AnomalyDetectorLabel <a name="AnomalyDetectorLabel" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorLabel"></a>

A metric label associated with an anomaly detector.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorLabel.Initializer"></a>

```typescript
import { AnomalyDetectorLabel } from '@robhan-cdk-lib/aws_aps'

const anomalyDetectorLabel: AnomalyDetectorLabel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorLabel.property.key">key</a></code> | <code>string</code> | The label key. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorLabel.property.value">value</a></code> | <code>string</code> | The label value. |

---

##### `key`<sup>Required</sup> <a name="key" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorLabel.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key.

---

##### `value`<sup>Required</sup> <a name="value" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorLabel.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The label value.

---

### AnomalyDetectorProps <a name="AnomalyDetectorProps" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorProps"></a>

Properties for an Amazon Managed Service for Prometheus anomaly detector.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.Initializer"></a>

```typescript
import { AnomalyDetectorProps } from '@robhan-cdk-lib/aws_aps'

const anomalyDetectorProps: AnomalyDetectorProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.property.alias">alias</a></code> | <code>string</code> | A user-friendly name for the detector. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.property.configuration">configuration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorConfiguration">AnomalyDetectorConfiguration</a></code> | The algorithm configuration. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.property.workspace">workspace</a></code> | <code>aws-cdk-lib.interfaces.aws_aps.IWorkspaceRef</code> | The workspace whose metrics are evaluated. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.property.evaluationIntervalInSeconds">evaluationIntervalInSeconds</a></code> | <code>number</code> | The interval, in seconds, between evaluations. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.property.labels">labels</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorLabel">AnomalyDetectorLabel</a>[]</code> | Metric labels associated with the detector. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.property.missingDataAction">missingDataAction</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.MissingDataAction">MissingDataAction</a></code> | The action to take when evaluation data is missing. |
| <code><a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags to apply to the anomaly detector. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

A user-friendly name for the detector.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.property.configuration"></a>

```typescript
public readonly configuration: AnomalyDetectorConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorConfiguration">AnomalyDetectorConfiguration</a>

The algorithm configuration.

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.property.workspace"></a>

```typescript
public readonly workspace: IWorkspaceRef;
```

- *Type:* aws-cdk-lib.interfaces.aws_aps.IWorkspaceRef

The workspace whose metrics are evaluated.

---

##### `evaluationIntervalInSeconds`<sup>Optional</sup> <a name="evaluationIntervalInSeconds" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.property.evaluationIntervalInSeconds"></a>

```typescript
public readonly evaluationIntervalInSeconds: number;
```

- *Type:* number
- *Default:* 60

The interval, in seconds, between evaluations.

Literal values must be integers from 30 through 86,400. Unresolved values are validated by
the service after deployment.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.property.labels"></a>

```typescript
public readonly labels: AnomalyDetectorLabel[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.AnomalyDetectorLabel">AnomalyDetectorLabel</a>[]
- *Default:* no labels

Metric labels associated with the detector.

---

##### `missingDataAction`<sup>Optional</sup> <a name="missingDataAction" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.property.missingDataAction"></a>

```typescript
public readonly missingDataAction: MissingDataAction;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.MissingDataAction">MissingDataAction</a>
- *Default:* service default

The action to take when evaluation data is missing.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@robhan-cdk-lib/aws_aps.AnomalyDetectorProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no tags

Tags to apply to the anomaly detector.

---

### EksScraperSourceOptions <a name="EksScraperSourceOptions" id="@robhan-cdk-lib/aws_aps.EksScraperSourceOptions"></a>

Options for collecting metrics from an Amazon EKS cluster.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.EksScraperSourceOptions.Initializer"></a>

```typescript
import { EksScraperSourceOptions } from '@robhan-cdk-lib/aws_aps'

const eksScraperSourceOptions: EksScraperSourceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.EksScraperSourceOptions.property.cluster">cluster</a></code> | <code>aws-cdk-lib.interfaces.aws_eks.IClusterRef</code> | The EKS cluster from which metrics are collected. |
| <code><a href="#@robhan-cdk-lib/aws_aps.EksScraperSourceOptions.property.subnets">subnets</a></code> | <code>aws-cdk-lib.interfaces.aws_ec2.ISubnetRef[]</code> | Subnets used to reach scrape targets. |
| <code><a href="#@robhan-cdk-lib/aws_aps.EksScraperSourceOptions.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.interfaces.aws_ec2.ISecurityGroupRef[]</code> | Security groups used to reach scrape targets. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@robhan-cdk-lib/aws_aps.EksScraperSourceOptions.property.cluster"></a>

```typescript
public readonly cluster: IClusterRef;
```

- *Type:* aws-cdk-lib.interfaces.aws_eks.IClusterRef

The EKS cluster from which metrics are collected.

The cluster must have private endpoint access and VPC DNS enabled. Automatic scraper access
entries require EKS authentication mode `API` or `API_AND_CONFIG_MAP`; otherwise configure the
required Kubernetes RBAC permissions manually.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@robhan-cdk-lib/aws_aps.EksScraperSourceOptions.property.subnets"></a>

```typescript
public readonly subnets: ISubnetRef[];
```

- *Type:* aws-cdk-lib.interfaces.aws_ec2.ISubnetRef[]

Subnets used to reach scrape targets.

Each subnet must have an available IP address.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@robhan-cdk-lib/aws_aps.EksScraperSourceOptions.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroupRef[];
```

- *Type:* aws-cdk-lib.interfaces.aws_ec2.ISecurityGroupRef[]
- *Default:* no explicit security groups

Security groups used to reach scrape targets.

`undefined` omits `securityGroupIds` and leaves selection to the service. An explicit empty
array is preserved in the synthesized resource. Supply only groups whose rules allow the
intended private scrape traffic.

---

### RandomCutForestConfiguration <a name="RandomCutForestConfiguration" id="@robhan-cdk-lib/aws_aps.RandomCutForestConfiguration"></a>

Random Cut Forest configuration for anomaly detection.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.RandomCutForestConfiguration.Initializer"></a>

```typescript
import { RandomCutForestConfiguration } from '@robhan-cdk-lib/aws_aps'

const randomCutForestConfiguration: RandomCutForestConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RandomCutForestConfiguration.property.query">query</a></code> | <code>string</code> | The PromQL query evaluated by the detector. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RandomCutForestConfiguration.property.ignoreNearExpectedFromAbove">ignoreNearExpectedFromAbove</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.IgnoreNearExpected">IgnoreNearExpected</a></code> | Values above the expected value that should not be treated as anomalies. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RandomCutForestConfiguration.property.ignoreNearExpectedFromBelow">ignoreNearExpectedFromBelow</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.IgnoreNearExpected">IgnoreNearExpected</a></code> | Values below the expected value that should not be treated as anomalies. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RandomCutForestConfiguration.property.sampleSize">sampleSize</a></code> | <code>number</code> | The number of data points sampled by the algorithm. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RandomCutForestConfiguration.property.shingleSize">shingleSize</a></code> | <code>number</code> | The number of consecutive data points in each shingle. |

---

##### `query`<sup>Required</sup> <a name="query" id="@robhan-cdk-lib/aws_aps.RandomCutForestConfiguration.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The PromQL query evaluated by the detector.

The service requires the query to be wrapped by one of these aggregation operators: `avg`,
`count`, `group`, `max`, `min`, `quantile`, `stddev`, `stdvar`, or `sum`. Query syntax and
aggregation semantics are validated by Amazon Managed Service for Prometheus.

---

##### `ignoreNearExpectedFromAbove`<sup>Optional</sup> <a name="ignoreNearExpectedFromAbove" id="@robhan-cdk-lib/aws_aps.RandomCutForestConfiguration.property.ignoreNearExpectedFromAbove"></a>

```typescript
public readonly ignoreNearExpectedFromAbove: IgnoreNearExpected;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.IgnoreNearExpected">IgnoreNearExpected</a>
- *Default:* no upper tolerance

Values above the expected value that should not be treated as anomalies.

---

##### `ignoreNearExpectedFromBelow`<sup>Optional</sup> <a name="ignoreNearExpectedFromBelow" id="@robhan-cdk-lib/aws_aps.RandomCutForestConfiguration.property.ignoreNearExpectedFromBelow"></a>

```typescript
public readonly ignoreNearExpectedFromBelow: IgnoreNearExpected;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.IgnoreNearExpected">IgnoreNearExpected</a>
- *Default:* no lower tolerance

Values below the expected value that should not be treated as anomalies.

---

##### `sampleSize`<sup>Optional</sup> <a name="sampleSize" id="@robhan-cdk-lib/aws_aps.RandomCutForestConfiguration.property.sampleSize"></a>

```typescript
public readonly sampleSize: number;
```

- *Type:* number
- *Default:* 256

The number of data points sampled by the algorithm.

---

##### `shingleSize`<sup>Optional</sup> <a name="shingleSize" id="@robhan-cdk-lib/aws_aps.RandomCutForestConfiguration.property.shingleSize"></a>

```typescript
public readonly shingleSize: number;
```

- *Type:* number
- *Default:* 8

The number of consecutive data points in each shingle.

---

### ResourcePolicyProps <a name="ResourcePolicyProps" id="@robhan-cdk-lib/aws_aps.ResourcePolicyProps"></a>

Properties for an Amazon Managed Service for Prometheus workspace resource policy.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.ResourcePolicyProps.Initializer"></a>

```typescript
import { ResourcePolicyProps } from '@robhan-cdk-lib/aws_aps'

const resourcePolicyProps: ResourcePolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicyProps.property.policyDocument">policyDocument</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The IAM policy document that grants access to the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ResourcePolicyProps.property.workspace">workspace</a></code> | <code>aws-cdk-lib.interfaces.aws_aps.IWorkspaceRef</code> | The workspace protected by the policy. |

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@robhan-cdk-lib/aws_aps.ResourcePolicyProps.property.policyDocument"></a>

```typescript
public readonly policyDocument: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

The IAM policy document that grants access to the workspace.

Every statement must include a principal. When the workspace uses a customer-managed KMS key,
principals also need permission to use that key.

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@robhan-cdk-lib/aws_aps.ResourcePolicyProps.property.workspace"></a>

```typescript
public readonly workspace: IWorkspaceRef;
```

- *Type:* aws-cdk-lib.interfaces.aws_aps.IWorkspaceRef

The workspace protected by the policy.

---

### RuleGroupsNamespaceProps <a name="RuleGroupsNamespaceProps" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps"></a>

Properties for an Amazon Managed Service for Prometheus rule groups namespace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.Initializer"></a>

```typescript
import { RuleGroupsNamespaceProps } from '@robhan-cdk-lib/aws_aps'

const ruleGroupsNamespaceProps: RuleGroupsNamespaceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.property.data">data</a></code> | <code>string</code> | The Prometheus rules file as YAML. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.property.name">name</a></code> | <code>string</code> | The name of the rule groups namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.property.workspace">workspace</a></code> | <code>aws-cdk-lib.interfaces.aws_aps.IWorkspaceRef</code> | The workspace that contains the rule groups namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags to apply to the rule groups namespace. |

---

##### `data`<sup>Required</sup> <a name="data" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

The Prometheus rules file as YAML.

---

##### `name`<sup>Required</sup> <a name="name" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rule groups namespace.

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.property.workspace"></a>

```typescript
public readonly workspace: IWorkspaceRef;
```

- *Type:* aws-cdk-lib.interfaces.aws_aps.IWorkspaceRef

The workspace that contains the rule groups namespace.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no tags

Tags to apply to the rule groups namespace.

---

### ScraperComponent <a name="ScraperComponent" id="@robhan-cdk-lib/aws_aps.ScraperComponent"></a>

A scraper component that can emit diagnostic logs.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.ScraperComponent.Initializer"></a>

```typescript
import { ScraperComponent } from '@robhan-cdk-lib/aws_aps'

const scraperComponent: ScraperComponent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperComponent.property.type">type</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.ScraperComponentType">ScraperComponentType</a></code> | The component type. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperComponent.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Component-specific logging options. |

---

##### `type`<sup>Required</sup> <a name="type" id="@robhan-cdk-lib/aws_aps.ScraperComponent.property.type"></a>

```typescript
public readonly type: ScraperComponentType;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ScraperComponentType">ScraperComponentType</a>

The component type.

---

##### `options`<sup>Optional</sup> <a name="options" id="@robhan-cdk-lib/aws_aps.ScraperComponent.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no component-specific options

Component-specific logging options.

---

### ScraperLoggingConfiguration <a name="ScraperLoggingConfiguration" id="@robhan-cdk-lib/aws_aps.ScraperLoggingConfiguration"></a>

Diagnostic logging configuration for a scraper.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.ScraperLoggingConfiguration.Initializer"></a>

```typescript
import { ScraperLoggingConfiguration } from '@robhan-cdk-lib/aws_aps'

const scraperLoggingConfiguration: ScraperLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperLoggingConfiguration.property.components">components</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.ScraperComponent">ScraperComponent</a>[]</code> | The scraper components for which logging is enabled. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperLoggingConfiguration.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.interfaces.aws_logs.ILogGroupRef</code> | The CloudWatch log group that receives scraper logs. |

---

##### `components`<sup>Required</sup> <a name="components" id="@robhan-cdk-lib/aws_aps.ScraperLoggingConfiguration.property.components"></a>

```typescript
public readonly components: ScraperComponent[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ScraperComponent">ScraperComponent</a>[]

The scraper components for which logging is enabled.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@robhan-cdk-lib/aws_aps.ScraperLoggingConfiguration.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroupRef;
```

- *Type:* aws-cdk-lib.interfaces.aws_logs.ILogGroupRef

The CloudWatch log group that receives scraper logs.

---

### ScraperProps <a name="ScraperProps" id="@robhan-cdk-lib/aws_aps.ScraperProps"></a>

Properties for an Amazon Managed Service for Prometheus scraper.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.ScraperProps.Initializer"></a>

```typescript
import { ScraperProps } from '@robhan-cdk-lib/aws_aps'

const scraperProps: ScraperProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperProps.property.destination">destination</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.ScraperDestination">ScraperDestination</a></code> | The destination for collected metrics. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperProps.property.scrapeConfiguration">scrapeConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.ScrapeConfiguration">ScrapeConfiguration</a></code> | The Prometheus scrape configuration. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperProps.property.source">source</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.ScraperSource">ScraperSource</a></code> | The source from which metrics are collected. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperProps.property.alias">alias</a></code> | <code>string</code> | A user-assigned alias for the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperProps.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.ScraperLoggingConfiguration">ScraperLoggingConfiguration</a></code> | Diagnostic logging configuration. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperProps.property.roleConfiguration">roleConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.ScraperRoleConfiguration">ScraperRoleConfiguration</a></code> | IAM roles used to access the source and destination. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags to apply to the scraper. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@robhan-cdk-lib/aws_aps.ScraperProps.property.destination"></a>

```typescript
public readonly destination: ScraperDestination;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ScraperDestination">ScraperDestination</a>

The destination for collected metrics.

---

##### `scrapeConfiguration`<sup>Required</sup> <a name="scrapeConfiguration" id="@robhan-cdk-lib/aws_aps.ScraperProps.property.scrapeConfiguration"></a>

```typescript
public readonly scrapeConfiguration: ScrapeConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ScrapeConfiguration">ScrapeConfiguration</a>

The Prometheus scrape configuration.

---

##### `source`<sup>Required</sup> <a name="source" id="@robhan-cdk-lib/aws_aps.ScraperProps.property.source"></a>

```typescript
public readonly source: ScraperSource;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ScraperSource">ScraperSource</a>

The source from which metrics are collected.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@robhan-cdk-lib/aws_aps.ScraperProps.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string
- *Default:* no alias

A user-assigned alias for the scraper.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@robhan-cdk-lib/aws_aps.ScraperProps.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: ScraperLoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ScraperLoggingConfiguration">ScraperLoggingConfiguration</a>
- *Default:* scraper diagnostic logging is disabled

Diagnostic logging configuration.

---

##### `roleConfiguration`<sup>Optional</sup> <a name="roleConfiguration" id="@robhan-cdk-lib/aws_aps.ScraperProps.property.roleConfiguration"></a>

```typescript
public readonly roleConfiguration: ScraperRoleConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ScraperRoleConfiguration">ScraperRoleConfiguration</a>
- *Default:* service-created roles

IAM roles used to access the source and destination.

Required for cross-account collection and for workspaces encrypted with a customer-managed
KMS key. The caller is responsible for the roles' trust and permissions.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@robhan-cdk-lib/aws_aps.ScraperProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no tags

Tags to apply to the scraper.

---

### ScraperRoleConfiguration <a name="ScraperRoleConfiguration" id="@robhan-cdk-lib/aws_aps.ScraperRoleConfiguration"></a>

IAM roles used by a scraper to access its source and destination.

Supply both roles for cross-account collection. The caller owns the roles' trust and permissions.
Both roles are also required when writing to a workspace encrypted with a customer-managed KMS
key, including same-account collection.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.ScraperRoleConfiguration.Initializer"></a>

```typescript
import { ScraperRoleConfiguration } from '@robhan-cdk-lib/aws_aps'

const scraperRoleConfiguration: ScraperRoleConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperRoleConfiguration.property.sourceRole">sourceRole</a></code> | <code>aws-cdk-lib.interfaces.aws_iam.IRoleRef</code> | The role used to access the metric source. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperRoleConfiguration.property.targetRole">targetRole</a></code> | <code>aws-cdk-lib.interfaces.aws_iam.IRoleRef</code> | The role used to write to the destination. |

---

##### `sourceRole`<sup>Optional</sup> <a name="sourceRole" id="@robhan-cdk-lib/aws_aps.ScraperRoleConfiguration.property.sourceRole"></a>

```typescript
public readonly sourceRole: IRoleRef;
```

- *Type:* aws-cdk-lib.interfaces.aws_iam.IRoleRef
- *Default:* a service role is created by Amazon Managed Service for Prometheus

The role used to access the metric source.

---

##### `targetRole`<sup>Optional</sup> <a name="targetRole" id="@robhan-cdk-lib/aws_aps.ScraperRoleConfiguration.property.targetRole"></a>

```typescript
public readonly targetRole: IRoleRef;
```

- *Type:* aws-cdk-lib.interfaces.aws_iam.IRoleRef
- *Default:* a service role is created by Amazon Managed Service for Prometheus

The role used to write to the destination.

---

### VpcScraperSourceOptions <a name="VpcScraperSourceOptions" id="@robhan-cdk-lib/aws_aps.VpcScraperSourceOptions"></a>

Options for collecting metrics from resources reachable in a VPC.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.VpcScraperSourceOptions.Initializer"></a>

```typescript
import { VpcScraperSourceOptions } from '@robhan-cdk-lib/aws_aps'

const vpcScraperSourceOptions: VpcScraperSourceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.VpcScraperSourceOptions.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.interfaces.aws_ec2.ISecurityGroupRef[]</code> | Security groups used to reach scrape targets. |
| <code><a href="#@robhan-cdk-lib/aws_aps.VpcScraperSourceOptions.property.subnets">subnets</a></code> | <code>aws-cdk-lib.interfaces.aws_ec2.ISubnetRef[]</code> | Subnets used to reach scrape targets. |

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@robhan-cdk-lib/aws_aps.VpcScraperSourceOptions.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroupRef[];
```

- *Type:* aws-cdk-lib.interfaces.aws_ec2.ISecurityGroupRef[]

Security groups used to reach scrape targets.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@robhan-cdk-lib/aws_aps.VpcScraperSourceOptions.property.subnets"></a>

```typescript
public readonly subnets: ISubnetRef[];
```

- *Type:* aws-cdk-lib.interfaces.aws_ec2.ISubnetRef[]

Subnets used to reach scrape targets.

Prefer private subnets and narrowly scoped security
group rules for the intended Prometheus endpoints.

---

### WorkspaceAttributes <a name="WorkspaceAttributes" id="@robhan-cdk-lib/aws_aps.WorkspaceAttributes"></a>

Attributes for referencing an existing workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.WorkspaceAttributes.Initializer"></a>

```typescript
import { WorkspaceAttributes } from '@robhan-cdk-lib/aws_aps'

const workspaceAttributes: WorkspaceAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | The ARN of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.prometheusEndpoint">prometheusEndpoint</a></code> | <code>string</code> | The Prometheus-compatible query endpoint. |

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

The ARN of the workspace.

---

##### `prometheusEndpoint`<sup>Optional</sup> <a name="prometheusEndpoint" id="@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.prometheusEndpoint"></a>

```typescript
public readonly prometheusEndpoint: string;
```

- *Type:* string
- *Default:* derived from the workspace ARN

The Prometheus-compatible query endpoint.

---

### WorkspaceConfiguration <a name="WorkspaceConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceConfiguration"></a>

Workspace-level retention, query, and ingestion settings.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.WorkspaceConfiguration.Initializer"></a>

```typescript
import { WorkspaceConfiguration } from '@robhan-cdk-lib/aws_aps'

const workspaceConfiguration: WorkspaceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration.property.labelSets">labelSets</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceLabelSet">WorkspaceLabelSet</a>[]</code> | Label sets with individual active-series limits. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration.property.outOfOrderTimeWindowInSeconds">outOfOrderTimeWindowInSeconds</a></code> | <code>number</code> | The time window, in seconds, during which out-of-order samples are accepted. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | The number of days to retain metrics. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration.property.ruleQueryOffsetInSeconds">ruleQueryOffsetInSeconds</a></code> | <code>number</code> | The duration, in seconds, by which rule evaluation queries are offset into the past. |

---

##### `labelSets`<sup>Optional</sup> <a name="labelSets" id="@robhan-cdk-lib/aws_aps.WorkspaceConfiguration.property.labelSets"></a>

```typescript
public readonly labelSets: WorkspaceLabelSet[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceLabelSet">WorkspaceLabelSet</a>[]
- *Default:* no label-set-specific limits

Label sets with individual active-series limits.

---

##### `outOfOrderTimeWindowInSeconds`<sup>Optional</sup> <a name="outOfOrderTimeWindowInSeconds" id="@robhan-cdk-lib/aws_aps.WorkspaceConfiguration.property.outOfOrderTimeWindowInSeconds"></a>

```typescript
public readonly outOfOrderTimeWindowInSeconds: number;
```

- *Type:* number
- *Default:* the service default

The time window, in seconds, during which out-of-order samples are accepted.

---

##### `retentionPeriodInDays`<sup>Optional</sup> <a name="retentionPeriodInDays" id="@robhan-cdk-lib/aws_aps.WorkspaceConfiguration.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number
- *Default:* the service default

The number of days to retain metrics.

---

##### `ruleQueryOffsetInSeconds`<sup>Optional</sup> <a name="ruleQueryOffsetInSeconds" id="@robhan-cdk-lib/aws_aps.WorkspaceConfiguration.property.ruleQueryOffsetInSeconds"></a>

```typescript
public readonly ruleQueryOffsetInSeconds: number;
```

- *Type:* number
- *Default:* the service default

The duration, in seconds, by which rule evaluation queries are offset into the past.

---

### WorkspaceLabel <a name="WorkspaceLabel" id="@robhan-cdk-lib/aws_aps.WorkspaceLabel"></a>

A label used to identify a set of ingested time series.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.WorkspaceLabel.Initializer"></a>

```typescript
import { WorkspaceLabel } from '@robhan-cdk-lib/aws_aps'

const workspaceLabel: WorkspaceLabel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceLabel.property.name">name</a></code> | <code>string</code> | The label name. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceLabel.property.value">value</a></code> | <code>string</code> | The label value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@robhan-cdk-lib/aws_aps.WorkspaceLabel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The label name.

---

##### `value`<sup>Required</sup> <a name="value" id="@robhan-cdk-lib/aws_aps.WorkspaceLabel.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The label value.

---

### WorkspaceLabelSet <a name="WorkspaceLabelSet" id="@robhan-cdk-lib/aws_aps.WorkspaceLabelSet"></a>

A label set and the ingestion limits that apply to matching time series.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.WorkspaceLabelSet.Initializer"></a>

```typescript
import { WorkspaceLabelSet } from '@robhan-cdk-lib/aws_aps'

const workspaceLabelSet: WorkspaceLabelSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceLabelSet.property.labels">labels</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceLabel">WorkspaceLabel</a>[]</code> | The labels that identify matching time series. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceLabelSet.property.limits">limits</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceLabelSetLimits">WorkspaceLabelSetLimits</a></code> | The limits for time series matching this label set. |

---

##### `labels`<sup>Required</sup> <a name="labels" id="@robhan-cdk-lib/aws_aps.WorkspaceLabelSet.property.labels"></a>

```typescript
public readonly labels: WorkspaceLabel[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceLabel">WorkspaceLabel</a>[]

The labels that identify matching time series.

---

##### `limits`<sup>Required</sup> <a name="limits" id="@robhan-cdk-lib/aws_aps.WorkspaceLabelSet.property.limits"></a>

```typescript
public readonly limits: WorkspaceLabelSetLimits;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceLabelSetLimits">WorkspaceLabelSetLimits</a>

The limits for time series matching this label set.

---

### WorkspaceLabelSetLimits <a name="WorkspaceLabelSetLimits" id="@robhan-cdk-lib/aws_aps.WorkspaceLabelSetLimits"></a>

The limits that apply to time series matching a workspace label set.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.WorkspaceLabelSetLimits.Initializer"></a>

```typescript
import { WorkspaceLabelSetLimits } from '@robhan-cdk-lib/aws_aps'

const workspaceLabelSetLimits: WorkspaceLabelSetLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceLabelSetLimits.property.maxSeries">maxSeries</a></code> | <code>number</code> | The maximum number of active series that can be ingested for the label set. |

---

##### `maxSeries`<sup>Optional</sup> <a name="maxSeries" id="@robhan-cdk-lib/aws_aps.WorkspaceLabelSetLimits.property.maxSeries"></a>

```typescript
public readonly maxSeries: number;
```

- *Type:* number
- *Default:* 0

The maximum number of active series that can be ingested for the label set.

A value of `0` disables the limit while still publishing label-set metrics.

---

### WorkspaceLoggingConfiguration <a name="WorkspaceLoggingConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceLoggingConfiguration"></a>

The rules and alerting log destination for an Amazon Managed Service for Prometheus workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.WorkspaceLoggingConfiguration.Initializer"></a>

```typescript
import { WorkspaceLoggingConfiguration } from '@robhan-cdk-lib/aws_aps'

const workspaceLoggingConfiguration: WorkspaceLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceLoggingConfiguration.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.interfaces.aws_logs.ILogGroupRef</code> | The CloudWatch log group to which rules and alerting logs are published. |

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@robhan-cdk-lib/aws_aps.WorkspaceLoggingConfiguration.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroupRef;
```

- *Type:* aws-cdk-lib.interfaces.aws_logs.ILogGroupRef

The CloudWatch log group to which rules and alerting logs are published.

---

### WorkspaceProps <a name="WorkspaceProps" id="@robhan-cdk-lib/aws_aps.WorkspaceProps"></a>

Properties for an Amazon Managed Service for Prometheus workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.Initializer"></a>

```typescript
import { WorkspaceProps } from '@robhan-cdk-lib/aws_aps'

const workspaceProps: WorkspaceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps.property.alertManagerDefinition">alertManagerDefinition</a></code> | <code>string</code> | The alert manager definition as YAML. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps.property.alias">alias</a></code> | <code>string</code> | A user-assigned alias for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.interfaces.aws_kms.IKeyRef</code> | The customer-managed KMS key used to encrypt workspace data. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceLoggingConfiguration">WorkspaceLoggingConfiguration</a></code> | Rules and alerting logging configuration. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps.property.queryLoggingConfiguration">queryLoggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceQueryLoggingConfiguration">WorkspaceQueryLoggingConfiguration</a></code> | Query logging configuration. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags to apply to the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps.property.workspaceConfiguration">workspaceConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration">WorkspaceConfiguration</a></code> | Workspace retention and ingestion settings. |

---

##### `alertManagerDefinition`<sup>Optional</sup> <a name="alertManagerDefinition" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.property.alertManagerDefinition"></a>

```typescript
public readonly alertManagerDefinition: string;
```

- *Type:* string
- *Default:* no alert manager definition

The alert manager definition as YAML.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string
- *Default:* no alias

A user-assigned alias for the workspace.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKeyRef;
```

- *Type:* aws-cdk-lib.interfaces.aws_kms.IKeyRef
- *Default:* an AWS-owned key

The customer-managed KMS key used to encrypt workspace data.

A managed scraper writing to a workspace encrypted with a customer-managed key requires an
explicit scraper role configuration, even when the scraper and workspace share an account.
Resource-policy principals also require access to this key.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: WorkspaceLoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceLoggingConfiguration">WorkspaceLoggingConfiguration</a>
- *Default:* rules and alerting logs are not published

Rules and alerting logging configuration.

---

##### `queryLoggingConfiguration`<sup>Optional</sup> <a name="queryLoggingConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.property.queryLoggingConfiguration"></a>

```typescript
public readonly queryLoggingConfiguration: WorkspaceQueryLoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceQueryLoggingConfiguration">WorkspaceQueryLoggingConfiguration</a>
- *Default:* queries are not logged

Query logging configuration.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no tags

Tags to apply to the workspace.

---

##### `workspaceConfiguration`<sup>Optional</sup> <a name="workspaceConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.property.workspaceConfiguration"></a>

```typescript
public readonly workspaceConfiguration: WorkspaceConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration">WorkspaceConfiguration</a>
- *Default:* service defaults

Workspace retention and ingestion settings.

---

### WorkspaceQueryLoggingConfiguration <a name="WorkspaceQueryLoggingConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceQueryLoggingConfiguration"></a>

The query log destination and filtering criteria for a workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.WorkspaceQueryLoggingConfiguration.Initializer"></a>

```typescript
import { WorkspaceQueryLoggingConfiguration } from '@robhan-cdk-lib/aws_aps'

const workspaceQueryLoggingConfiguration: WorkspaceQueryLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceQueryLoggingConfiguration.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.interfaces.aws_logs.ILogGroupRef</code> | The CloudWatch log group to which query logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceQueryLoggingConfiguration.property.qspThreshold">qspThreshold</a></code> | <code>number</code> | The Query Samples Processed threshold above which queries are logged. |

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@robhan-cdk-lib/aws_aps.WorkspaceQueryLoggingConfiguration.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroupRef;
```

- *Type:* aws-cdk-lib.interfaces.aws_logs.ILogGroupRef

The CloudWatch log group to which query logs are published.

---

##### `qspThreshold`<sup>Optional</sup> <a name="qspThreshold" id="@robhan-cdk-lib/aws_aps.WorkspaceQueryLoggingConfiguration.property.qspThreshold"></a>

```typescript
public readonly qspThreshold: number;
```

- *Type:* number
- *Default:* 0

The Query Samples Processed threshold above which queries are logged.

When query logging is enabled, the default `0` makes every query that processes one or more
samples eligible for logging. Consider log volume, cost, and query-content sensitivity when
choosing this value.

---

## Classes <a name="Classes" id="Classes"></a>

### IgnoreNearExpected <a name="IgnoreNearExpected" id="@robhan-cdk-lib/aws_aps.IgnoreNearExpected"></a>

Threshold settings for values close to the expected value.

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_aps.IgnoreNearExpected.Initializer"></a>

```typescript
import { IgnoreNearExpected } from '@robhan-cdk-lib/aws_aps'

new IgnoreNearExpected()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.IgnoreNearExpected.amount">amount</a></code> | Ignore values within a non-negative absolute amount of the expected value. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IgnoreNearExpected.ratio">ratio</a></code> | Ignore values within a non-negative ratio of the expected value. |

---

##### `amount` <a name="amount" id="@robhan-cdk-lib/aws_aps.IgnoreNearExpected.amount"></a>

```typescript
import { IgnoreNearExpected } from '@robhan-cdk-lib/aws_aps'

IgnoreNearExpected.amount(amount: number)
```

Ignore values within a non-negative absolute amount of the expected value.

###### `amount`<sup>Required</sup> <a name="amount" id="@robhan-cdk-lib/aws_aps.IgnoreNearExpected.amount.parameter.amount"></a>

- *Type:* number

---

##### `ratio` <a name="ratio" id="@robhan-cdk-lib/aws_aps.IgnoreNearExpected.ratio"></a>

```typescript
import { IgnoreNearExpected } from '@robhan-cdk-lib/aws_aps'

IgnoreNearExpected.ratio(ratio: number)
```

Ignore values within a non-negative ratio of the expected value.

###### `ratio`<sup>Required</sup> <a name="ratio" id="@robhan-cdk-lib/aws_aps.IgnoreNearExpected.ratio.parameter.ratio"></a>

- *Type:* number

---



### ScrapeConfiguration <a name="ScrapeConfiguration" id="@robhan-cdk-lib/aws_aps.ScrapeConfiguration"></a>

A Prometheus scrape configuration.

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_aps.ScrapeConfiguration.Initializer"></a>

```typescript
import { ScrapeConfiguration } from '@robhan-cdk-lib/aws_aps'

new ScrapeConfiguration()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScrapeConfiguration.fromString">fromString</a></code> | Create a scrape configuration from Prometheus YAML. |

---

##### `fromString` <a name="fromString" id="@robhan-cdk-lib/aws_aps.ScrapeConfiguration.fromString"></a>

```typescript
import { ScrapeConfiguration } from '@robhan-cdk-lib/aws_aps'

ScrapeConfiguration.fromString(configuration: string)
```

Create a scrape configuration from Prometheus YAML.

The CloudFormation resource provider accepts raw YAML and serializes it to the service API's
blob shape. Do not base64-encode this value.

###### `configuration`<sup>Required</sup> <a name="configuration" id="@robhan-cdk-lib/aws_aps.ScrapeConfiguration.fromString.parameter.configuration"></a>

- *Type:* string

---



### ScraperDestination <a name="ScraperDestination" id="@robhan-cdk-lib/aws_aps.ScraperDestination"></a>

A destination for metrics collected by a scraper.

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_aps.ScraperDestination.Initializer"></a>

```typescript
import { ScraperDestination } from '@robhan-cdk-lib/aws_aps'

new ScraperDestination()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperDestination.amp">amp</a></code> | Send collected metrics from an Amazon EKS source to an Amazon Managed Service for Prometheus workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperDestination.cloudWatch">cloudWatch</a></code> | Send collected metrics from an EKS or VPC source to a CloudWatch dataset. |

---

##### `amp` <a name="amp" id="@robhan-cdk-lib/aws_aps.ScraperDestination.amp"></a>

```typescript
import { ScraperDestination } from '@robhan-cdk-lib/aws_aps'

ScraperDestination.amp(workspace: IWorkspaceRef)
```

Send collected metrics from an Amazon EKS source to an Amazon Managed Service for Prometheus workspace.

VPC sources must use {@link cloudWatch} instead.

###### `workspace`<sup>Required</sup> <a name="workspace" id="@robhan-cdk-lib/aws_aps.ScraperDestination.amp.parameter.workspace"></a>

- *Type:* aws-cdk-lib.interfaces.aws_aps.IWorkspaceRef

---

##### `cloudWatch` <a name="cloudWatch" id="@robhan-cdk-lib/aws_aps.ScraperDestination.cloudWatch"></a>

```typescript
import { ScraperDestination } from '@robhan-cdk-lib/aws_aps'

ScraperDestination.cloudWatch(datasetArn: string)
```

Send collected metrics from an EKS or VPC source to a CloudWatch dataset.

###### `datasetArn`<sup>Required</sup> <a name="datasetArn" id="@robhan-cdk-lib/aws_aps.ScraperDestination.cloudWatch.parameter.datasetArn"></a>

- *Type:* string

---



### ScraperSource <a name="ScraperSource" id="@robhan-cdk-lib/aws_aps.ScraperSource"></a>

A source from which a scraper collects metrics.

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_aps.ScraperSource.Initializer"></a>

```typescript
import { ScraperSource } from '@robhan-cdk-lib/aws_aps'

new ScraperSource()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperSource.eks">eks</a></code> | Collect metrics from an Amazon EKS cluster. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperSource.vpc">vpc</a></code> | Collect metrics from resources reachable in a VPC. |

---

##### `eks` <a name="eks" id="@robhan-cdk-lib/aws_aps.ScraperSource.eks"></a>

```typescript
import { ScraperSource } from '@robhan-cdk-lib/aws_aps'

ScraperSource.eks(options: EksScraperSourceOptions)
```

Collect metrics from an Amazon EKS cluster.

###### `options`<sup>Required</sup> <a name="options" id="@robhan-cdk-lib/aws_aps.ScraperSource.eks.parameter.options"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.EksScraperSourceOptions">EksScraperSourceOptions</a>

---

##### `vpc` <a name="vpc" id="@robhan-cdk-lib/aws_aps.ScraperSource.vpc"></a>

```typescript
import { ScraperSource } from '@robhan-cdk-lib/aws_aps'

ScraperSource.vpc(options: VpcScraperSourceOptions)
```

Collect metrics from resources reachable in a VPC.

This source must be paired with {@link ScraperDestination.cloudWatch}.

###### `options`<sup>Required</sup> <a name="options" id="@robhan-cdk-lib/aws_aps.ScraperSource.vpc.parameter.options"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.VpcScraperSourceOptions">VpcScraperSourceOptions</a>

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IAnomalyDetector <a name="IAnomalyDetector" id="@robhan-cdk-lib/aws_aps.IAnomalyDetector"></a>

- *Extends:* aws-cdk-lib.IResource, aws-cdk-lib.interfaces.aws_aps.IAnomalyDetectorRef

- *Implemented By:* <a href="#@robhan-cdk-lib/aws_aps.AnomalyDetector">AnomalyDetector</a>, <a href="#@robhan-cdk-lib/aws_aps.IAnomalyDetector">IAnomalyDetector</a>

An Amazon Managed Service for Prometheus anomaly detector.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.IAnomalyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IAnomalyDetector.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IAnomalyDetector.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IAnomalyDetector.property.anomalyDetectorRef">anomalyDetectorRef</a></code> | <code>aws-cdk-lib.interfaces.aws_aps.AnomalyDetectorReference</code> | A reference to a AnomalyDetector resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IAnomalyDetector.property.anomalyDetectorArn">anomalyDetectorArn</a></code> | <code>string</code> | The ARN of the anomaly detector. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_aps.IAnomalyDetector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_aps.IAnomalyDetector.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_aps.IAnomalyDetector.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `anomalyDetectorRef`<sup>Required</sup> <a name="anomalyDetectorRef" id="@robhan-cdk-lib/aws_aps.IAnomalyDetector.property.anomalyDetectorRef"></a>

```typescript
public readonly anomalyDetectorRef: AnomalyDetectorReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_aps.AnomalyDetectorReference

A reference to a AnomalyDetector resource.

---

##### `anomalyDetectorArn`<sup>Required</sup> <a name="anomalyDetectorArn" id="@robhan-cdk-lib/aws_aps.IAnomalyDetector.property.anomalyDetectorArn"></a>

```typescript
public readonly anomalyDetectorArn: string;
```

- *Type:* string

The ARN of the anomaly detector.

---

### IResourcePolicy <a name="IResourcePolicy" id="@robhan-cdk-lib/aws_aps.IResourcePolicy"></a>

- *Extends:* aws-cdk-lib.IResource, aws-cdk-lib.interfaces.aws_aps.IResourcePolicyRef

- *Implemented By:* <a href="#@robhan-cdk-lib/aws_aps.ResourcePolicy">ResourcePolicy</a>, <a href="#@robhan-cdk-lib/aws_aps.IResourcePolicy">IResourcePolicy</a>

An Amazon Managed Service for Prometheus workspace resource policy.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.IResourcePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IResourcePolicy.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IResourcePolicy.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IResourcePolicy.property.resourcePolicyRef">resourcePolicyRef</a></code> | <code>aws-cdk-lib.interfaces.aws_aps.ResourcePolicyReference</code> | A reference to a ResourcePolicy resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IResourcePolicy.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | The ARN of the workspace protected by the policy. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_aps.IResourcePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_aps.IResourcePolicy.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_aps.IResourcePolicy.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `resourcePolicyRef`<sup>Required</sup> <a name="resourcePolicyRef" id="@robhan-cdk-lib/aws_aps.IResourcePolicy.property.resourcePolicyRef"></a>

```typescript
public readonly resourcePolicyRef: ResourcePolicyReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_aps.ResourcePolicyReference

A reference to a ResourcePolicy resource.

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@robhan-cdk-lib/aws_aps.IResourcePolicy.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

The ARN of the workspace protected by the policy.

---

### IRuleGroupsNamespace <a name="IRuleGroupsNamespace" id="@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace"></a>

- *Extends:* aws-cdk-lib.IResource, aws-cdk-lib.interfaces.aws_aps.IRuleGroupsNamespaceRef

- *Implemented By:* <a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace">RuleGroupsNamespace</a>, <a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace">IRuleGroupsNamespace</a>

An Amazon Managed Service for Prometheus rule groups namespace.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.ruleGroupsNamespaceRef">ruleGroupsNamespaceRef</a></code> | <code>aws-cdk-lib.interfaces.aws_aps.RuleGroupsNamespaceReference</code> | A reference to a RuleGroupsNamespace resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.ruleGroupsNamespaceArn">ruleGroupsNamespaceArn</a></code> | <code>string</code> | The ARN of the rule groups namespace. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleGroupsNamespaceRef`<sup>Required</sup> <a name="ruleGroupsNamespaceRef" id="@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.ruleGroupsNamespaceRef"></a>

```typescript
public readonly ruleGroupsNamespaceRef: RuleGroupsNamespaceReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_aps.RuleGroupsNamespaceReference

A reference to a RuleGroupsNamespace resource.

---

##### `ruleGroupsNamespaceArn`<sup>Required</sup> <a name="ruleGroupsNamespaceArn" id="@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.ruleGroupsNamespaceArn"></a>

```typescript
public readonly ruleGroupsNamespaceArn: string;
```

- *Type:* string

The ARN of the rule groups namespace.

---

### IScraper <a name="IScraper" id="@robhan-cdk-lib/aws_aps.IScraper"></a>

- *Extends:* aws-cdk-lib.IResource, aws-cdk-lib.interfaces.aws_aps.IScraperRef

- *Implemented By:* <a href="#@robhan-cdk-lib/aws_aps.Scraper">Scraper</a>, <a href="#@robhan-cdk-lib/aws_aps.IScraper">IScraper</a>

An Amazon Managed Service for Prometheus scraper.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.scraperRef">scraperRef</a></code> | <code>aws-cdk-lib.interfaces.aws_aps.ScraperReference</code> | A reference to a Scraper resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.scraperArn">scraperArn</a></code> | <code>string</code> | The ARN of the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.scraperId">scraperId</a></code> | <code>string</code> | The unique ID of the scraper. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_aps.IScraper.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_aps.IScraper.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_aps.IScraper.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `scraperRef`<sup>Required</sup> <a name="scraperRef" id="@robhan-cdk-lib/aws_aps.IScraper.property.scraperRef"></a>

```typescript
public readonly scraperRef: ScraperReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_aps.ScraperReference

A reference to a Scraper resource.

---

##### `scraperArn`<sup>Required</sup> <a name="scraperArn" id="@robhan-cdk-lib/aws_aps.IScraper.property.scraperArn"></a>

```typescript
public readonly scraperArn: string;
```

- *Type:* string

The ARN of the scraper.

---

##### `scraperId`<sup>Required</sup> <a name="scraperId" id="@robhan-cdk-lib/aws_aps.IScraper.property.scraperId"></a>

```typescript
public readonly scraperId: string;
```

- *Type:* string

The unique ID of the scraper.

---

### IWorkspace <a name="IWorkspace" id="@robhan-cdk-lib/aws_aps.IWorkspace"></a>

- *Extends:* aws-cdk-lib.IResource, aws-cdk-lib.interfaces.aws_aps.IWorkspaceRef

- *Implemented By:* <a href="#@robhan-cdk-lib/aws_aps.Workspace">Workspace</a>, <a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a>

An Amazon Managed Service for Prometheus workspace.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.workspaceRef">workspaceRef</a></code> | <code>aws-cdk-lib.interfaces.aws_aps.WorkspaceReference</code> | A reference to a Workspace resource. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.prometheusEndpoint">prometheusEndpoint</a></code> | <code>string</code> | The Prometheus-compatible query endpoint for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | The ARN of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | The unique ID of the workspace. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_aps.IWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_aps.IWorkspace.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_aps.IWorkspace.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `workspaceRef`<sup>Required</sup> <a name="workspaceRef" id="@robhan-cdk-lib/aws_aps.IWorkspace.property.workspaceRef"></a>

```typescript
public readonly workspaceRef: WorkspaceReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_aps.WorkspaceReference

A reference to a Workspace resource.

---

##### `prometheusEndpoint`<sup>Required</sup> <a name="prometheusEndpoint" id="@robhan-cdk-lib/aws_aps.IWorkspace.property.prometheusEndpoint"></a>

```typescript
public readonly prometheusEndpoint: string;
```

- *Type:* string

The Prometheus-compatible query endpoint for the workspace.

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@robhan-cdk-lib/aws_aps.IWorkspace.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

The ARN of the workspace.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@robhan-cdk-lib/aws_aps.IWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The unique ID of the workspace.

---

## Enums <a name="Enums" id="Enums"></a>

### MissingDataAction <a name="MissingDataAction" id="@robhan-cdk-lib/aws_aps.MissingDataAction"></a>

The action to take when evaluation data is missing.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.MissingDataAction.MARK_AS_ANOMALY">MARK_AS_ANOMALY</a></code> | Treat the missing data point as anomalous. |
| <code><a href="#@robhan-cdk-lib/aws_aps.MissingDataAction.SKIP">SKIP</a></code> | Skip evaluation for the missing data point. |

---

##### `MARK_AS_ANOMALY` <a name="MARK_AS_ANOMALY" id="@robhan-cdk-lib/aws_aps.MissingDataAction.MARK_AS_ANOMALY"></a>

Treat the missing data point as anomalous.

---


##### `SKIP` <a name="SKIP" id="@robhan-cdk-lib/aws_aps.MissingDataAction.SKIP"></a>

Skip evaluation for the missing data point.

---


### ScraperComponentType <a name="ScraperComponentType" id="@robhan-cdk-lib/aws_aps.ScraperComponentType"></a>

Components of a scraper that support diagnostic logging.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperComponentType.SERVICE_DISCOVERY">SERVICE_DISCOVERY</a></code> | Service discovery. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperComponentType.COLLECTOR">COLLECTOR</a></code> | Metric collection. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperComponentType.EXPORTER">EXPORTER</a></code> | Metric export. |

---

##### `SERVICE_DISCOVERY` <a name="SERVICE_DISCOVERY" id="@robhan-cdk-lib/aws_aps.ScraperComponentType.SERVICE_DISCOVERY"></a>

Service discovery.

---


##### `COLLECTOR` <a name="COLLECTOR" id="@robhan-cdk-lib/aws_aps.ScraperComponentType.COLLECTOR"></a>

Metric collection.

---


##### `EXPORTER` <a name="EXPORTER" id="@robhan-cdk-lib/aws_aps.ScraperComponentType.EXPORTER"></a>

Metric export.

---

