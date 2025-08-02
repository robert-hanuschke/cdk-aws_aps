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

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.isConstruct"></a>

```typescript
import { RuleGroupsNamespace } from '@robhan-cdk-lib/aws_aps'

RuleGroupsNamespace.isConstruct(x: any)
```

Checks if `x` is a construct.

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

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespace.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
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

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

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

##### ~~`isConstruct`~~ <a name="isConstruct" id="@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.isConstruct"></a>

```typescript
import { RuleGroupsNamespaceBase } from '@robhan-cdk-lib/aws_aps'

RuleGroupsNamespaceBase.isConstruct(x: any)
```

Checks if `x` is a construct.

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
| <code><a href="#@robhan-cdk-lib/aws_aps.RuleGroupsNamespaceBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
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

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

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
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.frommWorkspaceAttributes">frommWorkspaceAttributes</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@robhan-cdk-lib/aws_aps.Workspace.isConstruct"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_aps'

Workspace.isConstruct(x: any)
```

Checks if `x` is a construct.

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

##### `frommWorkspaceAttributes` <a name="frommWorkspaceAttributes" id="@robhan-cdk-lib/aws_aps.Workspace.frommWorkspaceAttributes"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_aps'

Workspace.frommWorkspaceAttributes(scope: Construct, id: string, attrs: WorkspaceAttributes)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_aps.Workspace.frommWorkspaceAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_aps.Workspace.frommWorkspaceAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@robhan-cdk-lib/aws_aps.Workspace.frommWorkspaceAttributes.parameter.attrs"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_aps.WorkspaceAttributes">WorkspaceAttributes</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.Workspace.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
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

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

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

##### ~~`isConstruct`~~ <a name="isConstruct" id="@robhan-cdk-lib/aws_aps.WorkspaceBase.isConstruct"></a>

```typescript
import { WorkspaceBase } from '@robhan-cdk-lib/aws_aps'

WorkspaceBase.isConstruct(x: any)
```

Checks if `x` is a construct.

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
| <code><a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
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

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

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
| <code><a href="#@robhan-cdk-lib/aws_aps.CloudWatchLogDestination.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The ARN of the CloudWatch log group. |

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@robhan-cdk-lib/aws_aps.CloudWatchLogDestination.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The ARN of the CloudWatch log group.

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

### WorkspaceAttributes <a name="WorkspaceAttributes" id="@robhan-cdk-lib/aws_aps.WorkspaceAttributes"></a>

Properties for importing an Amazon Managed Service for Prometheus workspace from attributes.

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

Properties for creating an Amazon Managed Service for Prometheus workspace.

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
| <code><a href="#@robhan-cdk-lib/aws_aps.IRuleGroupsNamespace.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
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

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

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

### IWorkspace <a name="IWorkspace" id="@robhan-cdk-lib/aws_aps.IWorkspace"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@robhan-cdk-lib/aws_aps.Workspace">Workspace</a>, <a href="#@robhan-cdk-lib/aws_aps.WorkspaceBase">WorkspaceBase</a>, <a href="#@robhan-cdk-lib/aws_aps.IWorkspace">IWorkspace</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_aps.IWorkspace.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
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

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

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

