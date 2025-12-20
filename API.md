# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RuleGroupsNamespace <a name="RuleGroupsNamespace" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace"></a>

The definition of a rule groups namespace in an Amazon Managed Service for Prometheus workspace.

A rule groups namespace is associated with exactly one rules file. A workspace can have multiple
rule groups namespaces.

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
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

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
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.fromRuleGroupsNamespaceAttributes">fromRuleGroupsNamespaceAttributes</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.isRuleGroupsNamespace">isRuleGroupsNamespace</a></code> | *No description.* |

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

##### `fromRuleGroupsNamespaceAttributes` <a name="fromRuleGroupsNamespaceAttributes" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.fromRuleGroupsNamespaceAttributes"></a>

```typescript
import { RuleGroupsNamespace } from '@robhan-cdk-lib/aws_aps'

RuleGroupsNamespace.fromRuleGroupsNamespaceAttributes(scope: Construct, id: string, attrs: RuleGroupsNamespaceAttributes)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.fromRuleGroupsNamespaceAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.fromRuleGroupsNamespaceAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.fromRuleGroupsNamespaceAttributes.parameter.attrs"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceAttributes">RuleGroupsNamespaceAttributes</a>

---

##### `isRuleGroupsNamespace` <a name="isRuleGroupsNamespace" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.isRuleGroupsNamespace"></a>

```typescript
import { RuleGroupsNamespace } from '@robhan-cdk-lib/aws_aps'

RuleGroupsNamespace.isRuleGroupsNamespace(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.isRuleGroupsNamespace.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.data">data</a></code> | <code>string</code> | The rules file used in the namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.name">name</a></code> | <code>string</code> | The name of the rule groups namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.ruleGroupsNamespaceArn">ruleGroupsNamespaceArn</a></code> | <code>string</code> | The workspace to add the rule groups namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.workspace">workspace</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a></code> | The workspace to add the rule groups namespace. |

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

##### `data`<sup>Required</sup> <a name="data" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

The rules file used in the namespace.

---

##### `name`<sup>Required</sup> <a name="name" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rule groups namespace.

---

##### `ruleGroupsNamespaceArn`<sup>Required</sup> <a name="ruleGroupsNamespaceArn" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.ruleGroupsNamespaceArn"></a>

```typescript
public readonly ruleGroupsNamespaceArn: string;
```

- *Type:* string

The workspace to add the rule groups namespace.

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.workspace"></a>

```typescript
public readonly workspace: IWorkspace;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a>

The workspace to add the rule groups namespace.

---


### RuleGroupsNamespaceBase <a name="RuleGroupsNamespaceBase" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase"></a>

- *Implements:* <a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace">IRuleGroupsNamespace</a>

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.Initializer"></a>

```typescript
import { RuleGroupsNamespaceBase } from '@robhan-cdk-lib/aws_aps'

new RuleGroupsNamespaceBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.isConstruct"></a>

```typescript
import { RuleGroupsNamespaceBase } from '@robhan-cdk-lib/aws_aps'

RuleGroupsNamespaceBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.isOwnedResource"></a>

```typescript
import { RuleGroupsNamespaceBase } from '@robhan-cdk-lib/aws_aps'

RuleGroupsNamespaceBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.isResource"></a>

```typescript
import { RuleGroupsNamespaceBase } from '@robhan-cdk-lib/aws_aps'

RuleGroupsNamespaceBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.data">data</a></code> | <code>string</code> | The rules file used in the namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.name">name</a></code> | <code>string</code> | The name of the rule groups namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.ruleGroupsNamespaceArn">ruleGroupsNamespaceArn</a></code> | <code>string</code> | The ARN of the rule groups namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.workspace">workspace</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a></code> | The workspace to add the rule groups namespace. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `data`<sup>Required</sup> <a name="data" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

The rules file used in the namespace.

---

##### `name`<sup>Required</sup> <a name="name" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rule groups namespace.

---

##### `ruleGroupsNamespaceArn`<sup>Required</sup> <a name="ruleGroupsNamespaceArn" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.ruleGroupsNamespaceArn"></a>

```typescript
public readonly ruleGroupsNamespaceArn: string;
```

- *Type:* string

The ARN of the rule groups namespace.

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.workspace"></a>

```typescript
public readonly workspace: IWorkspace;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a>

The workspace to add the rule groups namespace.

---


### Scraper <a name="Scraper" id="@robhan-cdk-lib/aws_aps.Scraper"></a>

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
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_aps.Scraper.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

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
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.fromScraperAttributes">fromScraperAttributes</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.isScraper">isScraper</a></code> | *No description.* |

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

##### `fromScraperAttributes` <a name="fromScraperAttributes" id="@robhan-cdk-lib/aws_aps.Scraper.fromScraperAttributes"></a>

```typescript
import { Scraper } from '@robhan-cdk-lib/aws_aps'

Scraper.fromScraperAttributes(scope: Construct, id: string, attrs: ScraperAttributes)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.Scraper.fromScraperAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.Scraper.fromScraperAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@robhan-cdk-lib/aws_aps.Scraper.fromScraperAttributes.parameter.attrs"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ScraperAttributes">ScraperAttributes</a>

---

##### `isScraper` <a name="isScraper" id="@robhan-cdk-lib/aws_aps.Scraper.isScraper"></a>

```typescript
import { Scraper } from '@robhan-cdk-lib/aws_aps'

Scraper.isScraper(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_aps.Scraper.isScraper.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.destination">destination</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.Destination">Destination</a></code> | The Amazon Managed Service for Prometheus workspace the scraper sends metrics to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.scrapeConfiguration">scrapeConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.ScrapeConfiguration">ScrapeConfiguration</a></code> | The configuration in use by the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.scraperArn">scraperArn</a></code> | <code>string</code> | The ARN of the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.scraperId">scraperId</a></code> | <code>string</code> | The ID of the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.source">source</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.Source">Source</a></code> | The Amazon EKS cluster from which the scraper collects metrics. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.alias">alias</a></code> | <code>string</code> | An optional user-assigned scraper alias. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Scraper.property.roleConfiguration">roleConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.RoleConfiguration">RoleConfiguration</a></code> | The role configuration in an Amazon Managed Service for Prometheus scraper. |

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

##### `destination`<sup>Required</sup> <a name="destination" id="@robhan-cdk-lib/aws_aps.Scraper.property.destination"></a>

```typescript
public readonly destination: Destination;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.Destination">Destination</a>

The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.

---

##### `scrapeConfiguration`<sup>Required</sup> <a name="scrapeConfiguration" id="@robhan-cdk-lib/aws_aps.Scraper.property.scrapeConfiguration"></a>

```typescript
public readonly scrapeConfiguration: ScrapeConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ScrapeConfiguration">ScrapeConfiguration</a>

The configuration in use by the scraper.

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

The ID of the scraper.

---

##### `source`<sup>Required</sup> <a name="source" id="@robhan-cdk-lib/aws_aps.Scraper.property.source"></a>

```typescript
public readonly source: Source;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.Source">Source</a>

The Amazon EKS cluster from which the scraper collects metrics.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@robhan-cdk-lib/aws_aps.Scraper.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

An optional user-assigned scraper alias.

---

##### `roleConfiguration`<sup>Optional</sup> <a name="roleConfiguration" id="@robhan-cdk-lib/aws_aps.Scraper.property.roleConfiguration"></a>

```typescript
public readonly roleConfiguration: RoleConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.RoleConfiguration">RoleConfiguration</a>

The role configuration in an Amazon Managed Service for Prometheus scraper.

---


### ScraperBase <a name="ScraperBase" id="@robhan-cdk-lib/aws_aps.ScraperBase"></a>

- *Implements:* <a href="#@robhan-cdk-lib/aws_aps.IScraper">IScraper</a>

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_aps.ScraperBase.Initializer"></a>

```typescript
import { ScraperBase } from '@robhan-cdk-lib/aws_aps'

new ScraperBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.ScraperBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.ScraperBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@robhan-cdk-lib/aws_aps.ScraperBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_aps.ScraperBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@robhan-cdk-lib/aws_aps.ScraperBase.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@robhan-cdk-lib/aws_aps.ScraperBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="@robhan-cdk-lib/aws_aps.ScraperBase.isConstruct"></a>

```typescript
import { ScraperBase } from '@robhan-cdk-lib/aws_aps'

ScraperBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_aps.ScraperBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@robhan-cdk-lib/aws_aps.ScraperBase.isOwnedResource"></a>

```typescript
import { ScraperBase } from '@robhan-cdk-lib/aws_aps'

ScraperBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.ScraperBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@robhan-cdk-lib/aws_aps.ScraperBase.isResource"></a>

```typescript
import { ScraperBase } from '@robhan-cdk-lib/aws_aps'

ScraperBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.ScraperBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.property.destination">destination</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.Destination">Destination</a></code> | The Amazon Managed Service for Prometheus workspace the scraper sends metrics to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.property.scrapeConfiguration">scrapeConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.ScrapeConfiguration">ScrapeConfiguration</a></code> | The configuration in use by the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.property.scraperArn">scraperArn</a></code> | <code>string</code> | The ARN of the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.property.scraperId">scraperId</a></code> | <code>string</code> | The ID of the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.property.source">source</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.Source">Source</a></code> | The Amazon EKS cluster from which the scraper collects metrics. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.property.alias">alias</a></code> | <code>string</code> | An optional user-assigned scraper alias. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperBase.property.roleConfiguration">roleConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.RoleConfiguration">RoleConfiguration</a></code> | The role configuration in an Amazon Managed Service for Prometheus scraper. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_aps.ScraperBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_aps.ScraperBase.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_aps.ScraperBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@robhan-cdk-lib/aws_aps.ScraperBase.property.destination"></a>

```typescript
public readonly destination: Destination;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.Destination">Destination</a>

The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.

---

##### `scrapeConfiguration`<sup>Required</sup> <a name="scrapeConfiguration" id="@robhan-cdk-lib/aws_aps.ScraperBase.property.scrapeConfiguration"></a>

```typescript
public readonly scrapeConfiguration: ScrapeConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ScrapeConfiguration">ScrapeConfiguration</a>

The configuration in use by the scraper.

---

##### `scraperArn`<sup>Required</sup> <a name="scraperArn" id="@robhan-cdk-lib/aws_aps.ScraperBase.property.scraperArn"></a>

```typescript
public readonly scraperArn: string;
```

- *Type:* string

The ARN of the scraper.

---

##### `scraperId`<sup>Required</sup> <a name="scraperId" id="@robhan-cdk-lib/aws_aps.ScraperBase.property.scraperId"></a>

```typescript
public readonly scraperId: string;
```

- *Type:* string

The ID of the scraper.

---

##### `source`<sup>Required</sup> <a name="source" id="@robhan-cdk-lib/aws_aps.ScraperBase.property.source"></a>

```typescript
public readonly source: Source;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.Source">Source</a>

The Amazon EKS cluster from which the scraper collects metrics.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@robhan-cdk-lib/aws_aps.ScraperBase.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

An optional user-assigned scraper alias.

1-100 characters.

Pattern: ^[0-9A-Za-z][-.0-9A-Z_a-z]*$

---

##### `roleConfiguration`<sup>Optional</sup> <a name="roleConfiguration" id="@robhan-cdk-lib/aws_aps.ScraperBase.property.roleConfiguration"></a>

```typescript
public readonly roleConfiguration: RoleConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.RoleConfiguration">RoleConfiguration</a>

The role configuration in an Amazon Managed Service for Prometheus scraper.

---


### Workspace <a name="Workspace" id="@robhan-cdk-lib/aws_aps.Workspace"></a>

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_aps.Workspace.Initializer"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_aps'

new Workspace(scope: Construct, id: string, props: WorkspaceProps)
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

##### `props`<sup>Required</sup> <a name="props" id="@robhan-cdk-lib/aws_aps.Workspace.Initializer.parameter.props"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps">WorkspaceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_aps.Workspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

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
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceAttributes">fromWorkspaceAttributes</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.isWorkspace">isWorkspace</a></code> | *No description.* |

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

##### `fromWorkspaceAttributes` <a name="fromWorkspaceAttributes" id="@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceAttributes"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_aps'

Workspace.fromWorkspaceAttributes(scope: Construct, id: string, attrs: WorkspaceAttributes)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@robhan-cdk-lib/aws_aps.Workspace.fromWorkspaceAttributes.parameter.attrs"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceAttributes">WorkspaceAttributes</a>

---

##### `isWorkspace` <a name="isWorkspace" id="@robhan-cdk-lib/aws_aps.Workspace.isWorkspace"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_aps'

Workspace.isWorkspace(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_aps.Workspace.isWorkspace.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | The ARN of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | The unique ID for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.alertManagerDefinition">alertManagerDefinition</a></code> | <code>string</code> | The alert manager definition, a YAML configuration for the alert manager in your Amazon Managed Service for Prometheus workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.alias">alias</a></code> | <code>string</code> | The alias that is assigned to this workspace to help identify it. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The customer managed AWS KMS key to use for encrypting data within your workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.LoggingConfiguration">LoggingConfiguration</a></code> | Contains information about the current rules and alerting logging configuration for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.queryLoggingConfiguration">queryLoggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.QueryLoggingConfiguration">QueryLoggingConfiguration</a></code> | The definition of logging configuration in an Amazon Managed Service for Prometheus workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.workspaceConfiguration">workspaceConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration">WorkspaceConfiguration</a></code> | Use this structure to define label sets and the ingestion limits for time series that match label sets, and to specify the retention period of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.prometheusEndpoint">prometheusEndpoint</a></code> | <code>string</code> | The Prometheus endpoint available for this workspace.. |

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

The unique ID for the workspace.

---

##### `alertManagerDefinition`<sup>Optional</sup> <a name="alertManagerDefinition" id="@robhan-cdk-lib/aws_aps.Workspace.property.alertManagerDefinition"></a>

```typescript
public readonly alertManagerDefinition: string;
```

- *Type:* string

The alert manager definition, a YAML configuration for the alert manager in your Amazon Managed Service for Prometheus workspace.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@robhan-cdk-lib/aws_aps.Workspace.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The alias that is assigned to this workspace to help identify it.

It does not need to be
unique.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@robhan-cdk-lib/aws_aps.Workspace.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The customer managed AWS KMS key to use for encrypting data within your workspace.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@robhan-cdk-lib/aws_aps.Workspace.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: LoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.LoggingConfiguration">LoggingConfiguration</a>

Contains information about the current rules and alerting logging configuration for the workspace.

Note: These logging configurations are only for rules and alerting logs.

---

##### `queryLoggingConfiguration`<sup>Optional</sup> <a name="queryLoggingConfiguration" id="@robhan-cdk-lib/aws_aps.Workspace.property.queryLoggingConfiguration"></a>

```typescript
public readonly queryLoggingConfiguration: QueryLoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.QueryLoggingConfiguration">QueryLoggingConfiguration</a>

The definition of logging configuration in an Amazon Managed Service for Prometheus workspace.

---

##### `workspaceConfiguration`<sup>Optional</sup> <a name="workspaceConfiguration" id="@robhan-cdk-lib/aws_aps.Workspace.property.workspaceConfiguration"></a>

```typescript
public readonly workspaceConfiguration: WorkspaceConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration">WorkspaceConfiguration</a>

Use this structure to define label sets and the ingestion limits for time series that match label sets, and to specify the retention period of the workspace.

---

##### `prometheusEndpoint`<sup>Required</sup> <a name="prometheusEndpoint" id="@robhan-cdk-lib/aws_aps.Workspace.property.prometheusEndpoint"></a>

```typescript
public readonly prometheusEndpoint: string;
```

- *Type:* string

The Prometheus endpoint available for this workspace..

---


### WorkspaceBase <a name="WorkspaceBase" id="@robhan-cdk-lib/aws_aps.WorkspaceBase"></a>

- *Implements:* <a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a>

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.Initializer"></a>

```typescript
import { WorkspaceBase } from '@robhan-cdk-lib/aws_aps'

new WorkspaceBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.isConstruct"></a>

```typescript
import { WorkspaceBase } from '@robhan-cdk-lib/aws_aps'

WorkspaceBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.isOwnedResource"></a>

```typescript
import { WorkspaceBase } from '@robhan-cdk-lib/aws_aps'

WorkspaceBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.isResource"></a>

```typescript
import { WorkspaceBase } from '@robhan-cdk-lib/aws_aps'

WorkspaceBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | The ARN of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.property.workspaceId">workspaceId</a></code> | <code>string</code> | The unique ID for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.property.alertManagerDefinition">alertManagerDefinition</a></code> | <code>string</code> | The alert manager definition, a YAML configuration for the alert manager in your Amazon Managed Service for Prometheus workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.property.alias">alias</a></code> | <code>string</code> | The alias that is assigned to this workspace to help identify it. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The customer managed AWS KMS key to use for encrypting data within your workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.LoggingConfiguration">LoggingConfiguration</a></code> | Contains information about the current rules and alerting logging configuration for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.property.queryLoggingConfiguration">queryLoggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.QueryLoggingConfiguration">QueryLoggingConfiguration</a></code> | The definition of logging configuration in an Amazon Managed Service for Prometheus workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.property.workspaceConfiguration">workspaceConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration">WorkspaceConfiguration</a></code> | Use this structure to define label sets and the ingestion limits for time series that match label sets, and to specify the retention period of the workspace. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

The ARN of the workspace.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The unique ID for the workspace.

---

##### `alertManagerDefinition`<sup>Optional</sup> <a name="alertManagerDefinition" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.property.alertManagerDefinition"></a>

```typescript
public readonly alertManagerDefinition: string;
```

- *Type:* string

The alert manager definition, a YAML configuration for the alert manager in your Amazon Managed Service for Prometheus workspace.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The alias that is assigned to this workspace to help identify it.

It does not need to be
unique.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The customer managed AWS KMS key to use for encrypting data within your workspace.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: LoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.LoggingConfiguration">LoggingConfiguration</a>

Contains information about the current rules and alerting logging configuration for the workspace.

Note: These logging configurations are only for rules and alerting logs.

---

##### `queryLoggingConfiguration`<sup>Optional</sup> <a name="queryLoggingConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.property.queryLoggingConfiguration"></a>

```typescript
public readonly queryLoggingConfiguration: QueryLoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.QueryLoggingConfiguration">QueryLoggingConfiguration</a>

The definition of logging configuration in an Amazon Managed Service for Prometheus workspace.

---

##### `workspaceConfiguration`<sup>Optional</sup> <a name="workspaceConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.property.workspaceConfiguration"></a>

```typescript
public readonly workspaceConfiguration: WorkspaceConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration">WorkspaceConfiguration</a>

Use this structure to define label sets and the ingestion limits for time series that match label sets, and to specify the retention period of the workspace.

---


## Structs <a name="Structs" id="Structs"></a>

### AmpConfiguration <a name="AmpConfiguration" id="@robhan-cdk-lib/aws_aps.AmpConfiguration"></a>

The AmpConfiguration structure defines the Amazon Managed Service for Prometheus instance a scraper should send metrics to.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.AmpConfiguration.Initializer"></a>

```typescript
import { AmpConfiguration } from '@robhan-cdk-lib/aws_aps'

const ampConfiguration: AmpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.AmpConfiguration.property.workspace">workspace</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a></code> | The Amazon Managed Service for Prometheus workspace. |

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@robhan-cdk-lib/aws_aps.AmpConfiguration.property.workspace"></a>

```typescript
public readonly workspace: IWorkspace;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a>

The Amazon Managed Service for Prometheus workspace.

---

### CloudWatchLogDestination <a name="CloudWatchLogDestination" id="@robhan-cdk-lib/aws_aps.CloudWatchLogDestination"></a>

Configuration details for logging to CloudWatch Logs.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.CloudWatchLogDestination.Initializer"></a>

```typescript
import { CloudWatchLogDestination } from '@robhan-cdk-lib/aws_aps'

const cloudWatchLogDestination: CloudWatchLogDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.CloudWatchLogDestination.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch log group. |

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@robhan-cdk-lib/aws_aps.CloudWatchLogDestination.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch log group.

---

### Destination <a name="Destination" id="@robhan-cdk-lib/aws_aps.Destination"></a>

Where to send the metrics from a scraper.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.Destination.Initializer"></a>

```typescript
import { Destination } from '@robhan-cdk-lib/aws_aps'

const destination: Destination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Destination.property.ampConfiguration">ampConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.AmpConfiguration">AmpConfiguration</a></code> | The Amazon Managed Service for Prometheus workspace to send metrics to. |

---

##### `ampConfiguration`<sup>Required</sup> <a name="ampConfiguration" id="@robhan-cdk-lib/aws_aps.Destination.property.ampConfiguration"></a>

```typescript
public readonly ampConfiguration: AmpConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.AmpConfiguration">AmpConfiguration</a>

The Amazon Managed Service for Prometheus workspace to send metrics to.

---

### EksConfiguration <a name="EksConfiguration" id="@robhan-cdk-lib/aws_aps.EksConfiguration"></a>

The EksConfiguration structure describes the connection to the Amazon EKS cluster from which a scraper collects metrics.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.EksConfiguration.Initializer"></a>

```typescript
import { EksConfiguration } from '@robhan-cdk-lib/aws_aps'

const eksConfiguration: EksConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.EksConfiguration.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | The Amazon EKS cluster. |
| <code><a href="#@robhan-cdk-lib/aws_aps.EksConfiguration.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | A list of subnets for the Amazon EKS cluster VPC configuration. |
| <code><a href="#@robhan-cdk-lib/aws_aps.EksConfiguration.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | A list of the security group IDs for the Amazon EKS cluster VPC configuration. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@robhan-cdk-lib/aws_aps.EksConfiguration.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

The Amazon EKS cluster.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@robhan-cdk-lib/aws_aps.EksConfiguration.property.subnets"></a>

```typescript
public readonly subnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

A list of subnets for the Amazon EKS cluster VPC configuration.

Min 1, max 5.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@robhan-cdk-lib/aws_aps.EksConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

A list of the security group IDs for the Amazon EKS cluster VPC configuration.

Min 1, max 5.

---

### Label <a name="Label" id="@robhan-cdk-lib/aws_aps.Label"></a>

A label is a name:value pair used to add context to ingested metrics.

This structure defines the
name and value for one label that is used in a label set. You can set ingestion limits on time
series that match defined label sets, to help prevent a workspace from being overwhelmed with
unexpected spikes in time series ingestion.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.Label.Initializer"></a>

```typescript
import { Label } from '@robhan-cdk-lib/aws_aps'

const label: Label = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Label.property.name">name</a></code> | <code>string</code> | The name for this label. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Label.property.value">value</a></code> | <code>string</code> | The value for this label. |

---

##### `name`<sup>Required</sup> <a name="name" id="@robhan-cdk-lib/aws_aps.Label.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for this label.

Pattern: ^[a-zA-Z_][a-zA-Z0-9_]*$

At least one character.

---

##### `value`<sup>Required</sup> <a name="value" id="@robhan-cdk-lib/aws_aps.Label.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for this label.

At least one character.

---

### LimitsPerLabelSet <a name="LimitsPerLabelSet" id="@robhan-cdk-lib/aws_aps.LimitsPerLabelSet"></a>

This defines a label set for the workspace, and defines the ingestion limit for active time series that match that label set.

Each label name in a label set must be unique.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.LimitsPerLabelSet.Initializer"></a>

```typescript
import { LimitsPerLabelSet } from '@robhan-cdk-lib/aws_aps'

const limitsPerLabelSet: LimitsPerLabelSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.LimitsPerLabelSet.property.labelSet">labelSet</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.Label">Label</a>[]</code> | This defines one label set that will have an enforced ingestion limit. |
| <code><a href="#@robhan-cdk-lib/aws_aps.LimitsPerLabelSet.property.limits">limits</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.LimitsPerLabelSetEntry">LimitsPerLabelSetEntry</a></code> | This structure contains the information about the limits that apply to time series that match this label set. |

---

##### `labelSet`<sup>Required</sup> <a name="labelSet" id="@robhan-cdk-lib/aws_aps.LimitsPerLabelSet.property.labelSet"></a>

```typescript
public readonly labelSet: Label[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.Label">Label</a>[]

This defines one label set that will have an enforced ingestion limit.

You can set ingestion
limits on time series that match defined label sets, to help prevent a workspace from being
overwhelmed with unexpected spikes in time series ingestion.

Label values accept all UTF-8 characters with one exception. If the label name is metric
name label __name__, then the metric part of the name must conform to the following pattern:
[a-zA-Z_:][a-zA-Z0-9_:]*

Minimum 0

---

##### `limits`<sup>Required</sup> <a name="limits" id="@robhan-cdk-lib/aws_aps.LimitsPerLabelSet.property.limits"></a>

```typescript
public readonly limits: LimitsPerLabelSetEntry;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.LimitsPerLabelSetEntry">LimitsPerLabelSetEntry</a>

This structure contains the information about the limits that apply to time series that match this label set.

---

### LimitsPerLabelSetEntry <a name="LimitsPerLabelSetEntry" id="@robhan-cdk-lib/aws_aps.LimitsPerLabelSetEntry"></a>

This structure contains the limits that apply to time series that match one label set.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.LimitsPerLabelSetEntry.Initializer"></a>

```typescript
import { LimitsPerLabelSetEntry } from '@robhan-cdk-lib/aws_aps'

const limitsPerLabelSetEntry: LimitsPerLabelSetEntry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.LimitsPerLabelSetEntry.property.maxSeries">maxSeries</a></code> | <code>number</code> | The maximum number of active series that can be ingested that match this label set. |

---

##### `maxSeries`<sup>Optional</sup> <a name="maxSeries" id="@robhan-cdk-lib/aws_aps.LimitsPerLabelSetEntry.property.maxSeries"></a>

```typescript
public readonly maxSeries: number;
```

- *Type:* number

The maximum number of active series that can be ingested that match this label set.

Setting this to 0 causes no label set limit to be enforced, but it does cause Amazon Managed
Service for Prometheus to vend label set metrics to CloudWatch Logs.

Minimum 0

---

### LoggingConfiguration <a name="LoggingConfiguration" id="@robhan-cdk-lib/aws_aps.LoggingConfiguration"></a>

Contains information about the rules and alerting logging configuration for the workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.LoggingConfiguration.Initializer"></a>

```typescript
import { LoggingConfiguration } from '@robhan-cdk-lib/aws_aps'

const loggingConfiguration: LoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.LoggingConfiguration.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch log group to which the vended log data will be published. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@robhan-cdk-lib/aws_aps.LoggingConfiguration.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch log group to which the vended log data will be published.

---

### LoggingDestination <a name="LoggingDestination" id="@robhan-cdk-lib/aws_aps.LoggingDestination"></a>

The logging destination in an Amazon Managed Service for Prometheus workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.LoggingDestination.Initializer"></a>

```typescript
import { LoggingDestination } from '@robhan-cdk-lib/aws_aps'

const loggingDestination: LoggingDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.LoggingDestination.property.cloudWatchLogs">cloudWatchLogs</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.CloudWatchLogDestination">CloudWatchLogDestination</a></code> | Configuration details for logging to CloudWatch Logs. |
| <code><a href="#@robhan-cdk-lib/aws_aps.LoggingDestination.property.filters">filters</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.LoggingFilter">LoggingFilter</a></code> | Filtering criteria that determine which queries are logged. |

---

##### `cloudWatchLogs`<sup>Required</sup> <a name="cloudWatchLogs" id="@robhan-cdk-lib/aws_aps.LoggingDestination.property.cloudWatchLogs"></a>

```typescript
public readonly cloudWatchLogs: CloudWatchLogDestination;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.CloudWatchLogDestination">CloudWatchLogDestination</a>

Configuration details for logging to CloudWatch Logs.

---

##### `filters`<sup>Required</sup> <a name="filters" id="@robhan-cdk-lib/aws_aps.LoggingDestination.property.filters"></a>

```typescript
public readonly filters: LoggingFilter;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.LoggingFilter">LoggingFilter</a>

Filtering criteria that determine which queries are logged.

---

### LoggingFilter <a name="LoggingFilter" id="@robhan-cdk-lib/aws_aps.LoggingFilter"></a>

Filtering criteria that determine which queries are logged.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.LoggingFilter.Initializer"></a>

```typescript
import { LoggingFilter } from '@robhan-cdk-lib/aws_aps'

const loggingFilter: LoggingFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.LoggingFilter.property.qspThreshold">qspThreshold</a></code> | <code>number</code> | Integer. |

---

##### `qspThreshold`<sup>Required</sup> <a name="qspThreshold" id="@robhan-cdk-lib/aws_aps.LoggingFilter.property.qspThreshold"></a>

```typescript
public readonly qspThreshold: number;
```

- *Type:* number

Integer.

Minimum 0

---

### QueryLoggingConfiguration <a name="QueryLoggingConfiguration" id="@robhan-cdk-lib/aws_aps.QueryLoggingConfiguration"></a>

The query logging configuration in an Amazon Managed Service for Prometheus workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.QueryLoggingConfiguration.Initializer"></a>

```typescript
import { QueryLoggingConfiguration } from '@robhan-cdk-lib/aws_aps'

const queryLoggingConfiguration: QueryLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.QueryLoggingConfiguration.property.destinations">destinations</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.LoggingDestination">LoggingDestination</a>[]</code> | Defines a destination and its associated filtering criteria for query logging. |

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@robhan-cdk-lib/aws_aps.QueryLoggingConfiguration.property.destinations"></a>

```typescript
public readonly destinations: LoggingDestination[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.LoggingDestination">LoggingDestination</a>[]

Defines a destination and its associated filtering criteria for query logging.

Minimum 1 and maximum 1 item in array.

---

### RoleConfiguration <a name="RoleConfiguration" id="@robhan-cdk-lib/aws_aps.RoleConfiguration"></a>

The role configuration in an Amazon Managed Service for Prometheus scraper.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.RoleConfiguration.Initializer"></a>

```typescript
import { RoleConfiguration } from '@robhan-cdk-lib/aws_aps'

const roleConfiguration: RoleConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RoleConfiguration.property.sourceRole">sourceRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The source role. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RoleConfiguration.property.targetRole">targetRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The target role. |

---

##### `sourceRole`<sup>Optional</sup> <a name="sourceRole" id="@robhan-cdk-lib/aws_aps.RoleConfiguration.property.sourceRole"></a>

```typescript
public readonly sourceRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The source role.

---

##### `targetRole`<sup>Optional</sup> <a name="targetRole" id="@robhan-cdk-lib/aws_aps.RoleConfiguration.property.targetRole"></a>

```typescript
public readonly targetRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The target role.

---

### RuleGroupsNamespaceAttributes <a name="RuleGroupsNamespaceAttributes" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceAttributes"></a>

Properties for importing a rule groups namespace in an Amazon Managed Service for Prometheus workspace from attributes.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceAttributes.Initializer"></a>

```typescript
import { RuleGroupsNamespaceAttributes } from '@robhan-cdk-lib/aws_aps'

const ruleGroupsNamespaceAttributes: RuleGroupsNamespaceAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceAttributes.property.data">data</a></code> | <code>string</code> | The rules file used in the namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceAttributes.property.name">name</a></code> | <code>string</code> | The name of the rule groups namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceAttributes.property.ruleGroupsNamespaceArn">ruleGroupsNamespaceArn</a></code> | <code>string</code> | The ARN of the rule groups namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceAttributes.property.workspace">workspace</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a></code> | The workspace to add the rule groups namespace. |

---

##### `data`<sup>Required</sup> <a name="data" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceAttributes.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

The rules file used in the namespace.

---

##### `name`<sup>Required</sup> <a name="name" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rule groups namespace.

Between 1 and 64 characters.

---

##### `ruleGroupsNamespaceArn`<sup>Required</sup> <a name="ruleGroupsNamespaceArn" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceAttributes.property.ruleGroupsNamespaceArn"></a>

```typescript
public readonly ruleGroupsNamespaceArn: string;
```

- *Type:* string

The ARN of the rule groups namespace.

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceAttributes.property.workspace"></a>

```typescript
public readonly workspace: IWorkspace;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a>

The workspace to add the rule groups namespace.

---

### RuleGroupsNamespaceProps <a name="RuleGroupsNamespaceProps" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps"></a>

Properties for creating a rule groups namespace in an Amazon Managed Service for Prometheus workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.Initializer"></a>

```typescript
import { RuleGroupsNamespaceProps } from '@robhan-cdk-lib/aws_aps'

const ruleGroupsNamespaceProps: RuleGroupsNamespaceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.property.data">data</a></code> | <code>string</code> | The rules file used in the namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.property.name">name</a></code> | <code>string</code> | The name of the rule groups namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.property.workspace">workspace</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a></code> | The workspace to add the rule groups namespace. |

---

##### `data`<sup>Required</sup> <a name="data" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

The rules file used in the namespace.

---

##### `name`<sup>Required</sup> <a name="name" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rule groups namespace.

Between 1 and 64 characters.

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceProps.property.workspace"></a>

```typescript
public readonly workspace: IWorkspace;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a>

The workspace to add the rule groups namespace.

---

### ScrapeConfiguration <a name="ScrapeConfiguration" id="@robhan-cdk-lib/aws_aps.ScrapeConfiguration"></a>

A scrape configuration for a scraper, base 64 encoded.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.ScrapeConfiguration.Initializer"></a>

```typescript
import { ScrapeConfiguration } from '@robhan-cdk-lib/aws_aps'

const scrapeConfiguration: ScrapeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScrapeConfiguration.property.configurationBlob">configurationBlob</a></code> | <code>string</code> | The base 64 encoded scrape configuration file. |

---

##### `configurationBlob`<sup>Required</sup> <a name="configurationBlob" id="@robhan-cdk-lib/aws_aps.ScrapeConfiguration.property.configurationBlob"></a>

```typescript
public readonly configurationBlob: string;
```

- *Type:* string

The base 64 encoded scrape configuration file.

---

### ScraperAttributes <a name="ScraperAttributes" id="@robhan-cdk-lib/aws_aps.ScraperAttributes"></a>

Properties for importing an Amazon Managed Service for Prometheus Scraper from attributes.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.ScraperAttributes.Initializer"></a>

```typescript
import { ScraperAttributes } from '@robhan-cdk-lib/aws_aps'

const scraperAttributes: ScraperAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperAttributes.property.destination">destination</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.Destination">Destination</a></code> | The Amazon Managed Service for Prometheus workspace the scraper sends metrics to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperAttributes.property.scrapeConfiguration">scrapeConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.ScrapeConfiguration">ScrapeConfiguration</a></code> | The configuration in use by the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperAttributes.property.scraperArn">scraperArn</a></code> | <code>string</code> | The ARN of the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperAttributes.property.source">source</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.Source">Source</a></code> | The Amazon EKS cluster from which the scraper collects metrics. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperAttributes.property.alias">alias</a></code> | <code>string</code> | An optional user-assigned scraper alias. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperAttributes.property.roleConfiguration">roleConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.RoleConfiguration">RoleConfiguration</a></code> | The role configuration in an Amazon Managed Service for Prometheus scraper. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@robhan-cdk-lib/aws_aps.ScraperAttributes.property.destination"></a>

```typescript
public readonly destination: Destination;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.Destination">Destination</a>

The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.

---

##### `scrapeConfiguration`<sup>Required</sup> <a name="scrapeConfiguration" id="@robhan-cdk-lib/aws_aps.ScraperAttributes.property.scrapeConfiguration"></a>

```typescript
public readonly scrapeConfiguration: ScrapeConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ScrapeConfiguration">ScrapeConfiguration</a>

The configuration in use by the scraper.

---

##### `scraperArn`<sup>Required</sup> <a name="scraperArn" id="@robhan-cdk-lib/aws_aps.ScraperAttributes.property.scraperArn"></a>

```typescript
public readonly scraperArn: string;
```

- *Type:* string

The ARN of the scraper.

---

##### `source`<sup>Required</sup> <a name="source" id="@robhan-cdk-lib/aws_aps.ScraperAttributes.property.source"></a>

```typescript
public readonly source: Source;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.Source">Source</a>

The Amazon EKS cluster from which the scraper collects metrics.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@robhan-cdk-lib/aws_aps.ScraperAttributes.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

An optional user-assigned scraper alias.

1-100 characters.

Pattern: ^[0-9A-Za-z][-.0-9A-Z_a-z]*$

---

##### `roleConfiguration`<sup>Optional</sup> <a name="roleConfiguration" id="@robhan-cdk-lib/aws_aps.ScraperAttributes.property.roleConfiguration"></a>

```typescript
public readonly roleConfiguration: RoleConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.RoleConfiguration">RoleConfiguration</a>

The role configuration in an Amazon Managed Service for Prometheus scraper.

---

### ScraperProps <a name="ScraperProps" id="@robhan-cdk-lib/aws_aps.ScraperProps"></a>

Properties for creating an Amazon Managed Service for Prometheus Scraper.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.ScraperProps.Initializer"></a>

```typescript
import { ScraperProps } from '@robhan-cdk-lib/aws_aps'

const scraperProps: ScraperProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperProps.property.destination">destination</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.Destination">Destination</a></code> | The Amazon Managed Service for Prometheus workspace the scraper sends metrics to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperProps.property.scrapeConfiguration">scrapeConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.ScrapeConfiguration">ScrapeConfiguration</a></code> | The configuration in use by the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperProps.property.source">source</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.Source">Source</a></code> | The Amazon EKS cluster from which the scraper collects metrics. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperProps.property.alias">alias</a></code> | <code>string</code> | An optional user-assigned scraper alias. |
| <code><a href="#@robhan-cdk-lib/aws_aps.ScraperProps.property.roleConfiguration">roleConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.RoleConfiguration">RoleConfiguration</a></code> | The role configuration in an Amazon Managed Service for Prometheus scraper. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@robhan-cdk-lib/aws_aps.ScraperProps.property.destination"></a>

```typescript
public readonly destination: Destination;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.Destination">Destination</a>

The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.

---

##### `scrapeConfiguration`<sup>Required</sup> <a name="scrapeConfiguration" id="@robhan-cdk-lib/aws_aps.ScraperProps.property.scrapeConfiguration"></a>

```typescript
public readonly scrapeConfiguration: ScrapeConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ScrapeConfiguration">ScrapeConfiguration</a>

The configuration in use by the scraper.

---

##### `source`<sup>Required</sup> <a name="source" id="@robhan-cdk-lib/aws_aps.ScraperProps.property.source"></a>

```typescript
public readonly source: Source;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.Source">Source</a>

The Amazon EKS cluster from which the scraper collects metrics.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@robhan-cdk-lib/aws_aps.ScraperProps.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

An optional user-assigned scraper alias.

1-100 characters.

Pattern: ^[0-9A-Za-z][-.0-9A-Z_a-z]*$

---

##### `roleConfiguration`<sup>Optional</sup> <a name="roleConfiguration" id="@robhan-cdk-lib/aws_aps.ScraperProps.property.roleConfiguration"></a>

```typescript
public readonly roleConfiguration: RoleConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.RoleConfiguration">RoleConfiguration</a>

The role configuration in an Amazon Managed Service for Prometheus scraper.

---

### Source <a name="Source" id="@robhan-cdk-lib/aws_aps.Source"></a>

The source of collected metrics for a scraper.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.Source.Initializer"></a>

```typescript
import { Source } from '@robhan-cdk-lib/aws_aps'

const source: Source = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Source.property.eksConfiguration">eksConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.EksConfiguration">EksConfiguration</a></code> | The Amazon EKS cluster from which a scraper collects metrics. |

---

##### `eksConfiguration`<sup>Required</sup> <a name="eksConfiguration" id="@robhan-cdk-lib/aws_aps.Source.property.eksConfiguration"></a>

```typescript
public readonly eksConfiguration: EksConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.EksConfiguration">EksConfiguration</a>

The Amazon EKS cluster from which a scraper collects metrics.

---

### WorkspaceAttributes <a name="WorkspaceAttributes" id="@robhan-cdk-lib/aws_aps.WorkspaceAttributes"></a>

Properties for importing an Amazon Managed Service for Prometheus Workspace from attributes.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.WorkspaceAttributes.Initializer"></a>

```typescript
import { WorkspaceAttributes } from '@robhan-cdk-lib/aws_aps'

const workspaceAttributes: WorkspaceAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | The arn of this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.alertManagerDefinition">alertManagerDefinition</a></code> | <code>string</code> | The alert manager definition, a YAML configuration for the alert manager in your Amazon Managed Service for Prometheus workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.alias">alias</a></code> | <code>string</code> | The alias that is assigned to this workspace to help identify it. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The customer managed AWS KMS key to use for encrypting data within your workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.LoggingConfiguration">LoggingConfiguration</a></code> | Contains information about the current rules and alerting logging configuration for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.queryLoggingConfiguration">queryLoggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.QueryLoggingConfiguration">QueryLoggingConfiguration</a></code> | The definition of logging configuration in an Amazon Managed Service for Prometheus workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.workspaceConfiguration">workspaceConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration">WorkspaceConfiguration</a></code> | Use this structure to define label sets and the ingestion limits for time series that match label sets, and to specify the retention period of the workspace. |

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

The arn of this workspace.

---

##### `alertManagerDefinition`<sup>Optional</sup> <a name="alertManagerDefinition" id="@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.alertManagerDefinition"></a>

```typescript
public readonly alertManagerDefinition: string;
```

- *Type:* string

The alert manager definition, a YAML configuration for the alert manager in your Amazon Managed Service for Prometheus workspace.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The alias that is assigned to this workspace to help identify it.

It does not need to be
unique.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The customer managed AWS KMS key to use for encrypting data within your workspace.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: LoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.LoggingConfiguration">LoggingConfiguration</a>

Contains information about the current rules and alerting logging configuration for the workspace.

Note: These logging configurations are only for rules and alerting logs.

---

##### `queryLoggingConfiguration`<sup>Optional</sup> <a name="queryLoggingConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.queryLoggingConfiguration"></a>

```typescript
public readonly queryLoggingConfiguration: QueryLoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.QueryLoggingConfiguration">QueryLoggingConfiguration</a>

The definition of logging configuration in an Amazon Managed Service for Prometheus workspace.

---

##### `workspaceConfiguration`<sup>Optional</sup> <a name="workspaceConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceAttributes.property.workspaceConfiguration"></a>

```typescript
public readonly workspaceConfiguration: WorkspaceConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration">WorkspaceConfiguration</a>

Use this structure to define label sets and the ingestion limits for time series that match label sets, and to specify the retention period of the workspace.

---

### WorkspaceConfiguration <a name="WorkspaceConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceConfiguration"></a>

Use this structure to define label sets and the ingestion limits for time series that match label sets, and to specify the retention period of the workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.WorkspaceConfiguration.Initializer"></a>

```typescript
import { WorkspaceConfiguration } from '@robhan-cdk-lib/aws_aps'

const workspaceConfiguration: WorkspaceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration.property.limitsPerLabelSets">limitsPerLabelSets</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.LimitsPerLabelSet">LimitsPerLabelSet</a>[]</code> | This is an array of structures, where each structure defines a label set for the workspace, and defines the ingestion limit for active time series for each of those label sets. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | Specifies how many days that metrics will be retained in the workspace. |

---

##### `limitsPerLabelSets`<sup>Optional</sup> <a name="limitsPerLabelSets" id="@robhan-cdk-lib/aws_aps.WorkspaceConfiguration.property.limitsPerLabelSets"></a>

```typescript
public readonly limitsPerLabelSets: LimitsPerLabelSet[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.LimitsPerLabelSet">LimitsPerLabelSet</a>[]

This is an array of structures, where each structure defines a label set for the workspace, and defines the ingestion limit for active time series for each of those label sets.

Each
label name in a label set must be unique.

Minimum 0

---

##### `retentionPeriodInDays`<sup>Optional</sup> <a name="retentionPeriodInDays" id="@robhan-cdk-lib/aws_aps.WorkspaceConfiguration.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

Specifies how many days that metrics will be retained in the workspace.

Minimum 1

---

### WorkspaceProps <a name="WorkspaceProps" id="@robhan-cdk-lib/aws_aps.WorkspaceProps"></a>

Properties for creating an Amazon Managed Service for Prometheus Workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.Initializer"></a>

```typescript
import { WorkspaceProps } from '@robhan-cdk-lib/aws_aps'

const workspaceProps: WorkspaceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps.property.alertManagerDefinition">alertManagerDefinition</a></code> | <code>string</code> | The alert manager definition, a YAML configuration for the alert manager in your Amazon Managed Service for Prometheus workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps.property.alias">alias</a></code> | <code>string</code> | The alias that is assigned to this workspace to help identify it. It does not need to be unique. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The customer managed AWS KMS key to use for encrypting data within your workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.LoggingConfiguration">LoggingConfiguration</a></code> | Contains information about the current rules and alerting logging configuration for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps.property.queryLoggingConfiguration">queryLoggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.QueryLoggingConfiguration">QueryLoggingConfiguration</a></code> | The definition of logging configuration in an Amazon Managed Service for Prometheus workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceProps.property.workspaceConfiguration">workspaceConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration">WorkspaceConfiguration</a></code> | Use this structure to define label sets and the ingestion limits for time series that match label sets, and to specify the retention period of the workspace. |

---

##### `alertManagerDefinition`<sup>Optional</sup> <a name="alertManagerDefinition" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.property.alertManagerDefinition"></a>

```typescript
public readonly alertManagerDefinition: string;
```

- *Type:* string

The alert manager definition, a YAML configuration for the alert manager in your Amazon Managed Service for Prometheus workspace.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The alias that is assigned to this workspace to help identify it. It does not need to be unique.

0 to 100 characters

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The customer managed AWS KMS key to use for encrypting data within your workspace.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: LoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.LoggingConfiguration">LoggingConfiguration</a>

Contains information about the current rules and alerting logging configuration for the workspace.

Note: These logging configurations are only for rules and alerting logs.

---

##### `queryLoggingConfiguration`<sup>Optional</sup> <a name="queryLoggingConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.property.queryLoggingConfiguration"></a>

```typescript
public readonly queryLoggingConfiguration: QueryLoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.QueryLoggingConfiguration">QueryLoggingConfiguration</a>

The definition of logging configuration in an Amazon Managed Service for Prometheus workspace.

---

##### `workspaceConfiguration`<sup>Optional</sup> <a name="workspaceConfiguration" id="@robhan-cdk-lib/aws_aps.WorkspaceProps.property.workspaceConfiguration"></a>

```typescript
public readonly workspaceConfiguration: WorkspaceConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration">WorkspaceConfiguration</a>

Use this structure to define label sets and the ingestion limits for time series that match label sets, and to specify the retention period of the workspace.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IRuleGroupsNamespace <a name="IRuleGroupsNamespace" id="@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace">RuleGroupsNamespace</a>, <a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase">RuleGroupsNamespaceBase</a>, <a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace">IRuleGroupsNamespace</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.data">data</a></code> | <code>string</code> | The rules file used in the namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.name">name</a></code> | <code>string</code> | The name of the rule groups namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.ruleGroupsNamespaceArn">ruleGroupsNamespaceArn</a></code> | <code>string</code> | The ARN of the rule groups namespace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.workspace">workspace</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a></code> | The workspace to add the rule groups namespace. |

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

##### `data`<sup>Required</sup> <a name="data" id="@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

The rules file used in the namespace.

---

##### `name`<sup>Required</sup> <a name="name" id="@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rule groups namespace.

---

##### `ruleGroupsNamespaceArn`<sup>Required</sup> <a name="ruleGroupsNamespaceArn" id="@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.ruleGroupsNamespaceArn"></a>

```typescript
public readonly ruleGroupsNamespaceArn: string;
```

- *Type:* string

The ARN of the rule groups namespace.

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.workspace"></a>

```typescript
public readonly workspace: IWorkspace;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a>

The workspace to add the rule groups namespace.

---

### IScraper <a name="IScraper" id="@robhan-cdk-lib/aws_aps.IScraper"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@robhan-cdk-lib/aws_aps.Scraper">Scraper</a>, <a href="#@robhan-cdk-lib/aws_aps.ScraperBase">ScraperBase</a>, <a href="#@robhan-cdk-lib/aws_aps.IScraper">IScraper</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.destination">destination</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.Destination">Destination</a></code> | The Amazon Managed Service for Prometheus workspace the scraper sends metrics to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.scrapeConfiguration">scrapeConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.ScrapeConfiguration">ScrapeConfiguration</a></code> | The configuration in use by the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.scraperArn">scraperArn</a></code> | <code>string</code> | The ARN of the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.scraperId">scraperId</a></code> | <code>string</code> | The ID of the scraper. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.source">source</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.Source">Source</a></code> | The Amazon EKS cluster from which the scraper collects metrics. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.alias">alias</a></code> | <code>string</code> | An optional user-assigned scraper alias. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IScraper.property.roleConfiguration">roleConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.RoleConfiguration">RoleConfiguration</a></code> | The role configuration in an Amazon Managed Service for Prometheus scraper. |

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

##### `destination`<sup>Required</sup> <a name="destination" id="@robhan-cdk-lib/aws_aps.IScraper.property.destination"></a>

```typescript
public readonly destination: Destination;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.Destination">Destination</a>

The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.

---

##### `scrapeConfiguration`<sup>Required</sup> <a name="scrapeConfiguration" id="@robhan-cdk-lib/aws_aps.IScraper.property.scrapeConfiguration"></a>

```typescript
public readonly scrapeConfiguration: ScrapeConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.ScrapeConfiguration">ScrapeConfiguration</a>

The configuration in use by the scraper.

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

The ID of the scraper.

---

##### `source`<sup>Required</sup> <a name="source" id="@robhan-cdk-lib/aws_aps.IScraper.property.source"></a>

```typescript
public readonly source: Source;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.Source">Source</a>

The Amazon EKS cluster from which the scraper collects metrics.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@robhan-cdk-lib/aws_aps.IScraper.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

An optional user-assigned scraper alias.

1-100 characters.

Pattern: ^[0-9A-Za-z][-.0-9A-Z_a-z]*$

---

##### `roleConfiguration`<sup>Optional</sup> <a name="roleConfiguration" id="@robhan-cdk-lib/aws_aps.IScraper.property.roleConfiguration"></a>

```typescript
public readonly roleConfiguration: RoleConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.RoleConfiguration">RoleConfiguration</a>

The role configuration in an Amazon Managed Service for Prometheus scraper.

---

### IWorkspace <a name="IWorkspace" id="@robhan-cdk-lib/aws_aps.IWorkspace"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@robhan-cdk-lib/aws_aps.Workspace">Workspace</a>, <a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase">WorkspaceBase</a>, <a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | The ARN of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | The unique ID for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.alertManagerDefinition">alertManagerDefinition</a></code> | <code>string</code> | The alert manager definition, a YAML configuration for the alert manager in your Amazon Managed Service for Prometheus workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.alias">alias</a></code> | <code>string</code> | The alias that is assigned to this workspace to help identify it. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The customer managed AWS KMS key to use for encrypting data within your workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.LoggingConfiguration">LoggingConfiguration</a></code> | Contains information about the current rules and alerting logging configuration for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.queryLoggingConfiguration">queryLoggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.QueryLoggingConfiguration">QueryLoggingConfiguration</a></code> | The definition of logging configuration in an Amazon Managed Service for Prometheus workspace. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.workspaceConfiguration">workspaceConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration">WorkspaceConfiguration</a></code> | Use this structure to define label sets and the ingestion limits for time series that match label sets, and to specify the retention period of the workspace. |

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

The unique ID for the workspace.

---

##### `alertManagerDefinition`<sup>Optional</sup> <a name="alertManagerDefinition" id="@robhan-cdk-lib/aws_aps.IWorkspace.property.alertManagerDefinition"></a>

```typescript
public readonly alertManagerDefinition: string;
```

- *Type:* string

The alert manager definition, a YAML configuration for the alert manager in your Amazon Managed Service for Prometheus workspace.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@robhan-cdk-lib/aws_aps.IWorkspace.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The alias that is assigned to this workspace to help identify it.

It does not need to be
unique.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@robhan-cdk-lib/aws_aps.IWorkspace.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The customer managed AWS KMS key to use for encrypting data within your workspace.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@robhan-cdk-lib/aws_aps.IWorkspace.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: LoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.LoggingConfiguration">LoggingConfiguration</a>

Contains information about the current rules and alerting logging configuration for the workspace.

Note: These logging configurations are only for rules and alerting logs.

---

##### `queryLoggingConfiguration`<sup>Optional</sup> <a name="queryLoggingConfiguration" id="@robhan-cdk-lib/aws_aps.IWorkspace.property.queryLoggingConfiguration"></a>

```typescript
public readonly queryLoggingConfiguration: QueryLoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.QueryLoggingConfiguration">QueryLoggingConfiguration</a>

The definition of logging configuration in an Amazon Managed Service for Prometheus workspace.

---

##### `workspaceConfiguration`<sup>Optional</sup> <a name="workspaceConfiguration" id="@robhan-cdk-lib/aws_aps.IWorkspace.property.workspaceConfiguration"></a>

```typescript
public readonly workspaceConfiguration: WorkspaceConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceConfiguration">WorkspaceConfiguration</a>

Use this structure to define label sets and the ingestion limits for time series that match label sets, and to specify the retention period of the workspace.

---

