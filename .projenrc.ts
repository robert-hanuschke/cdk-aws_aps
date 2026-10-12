import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Robert Hanuschke',
  authorAddress: 'robhan-cdk-lib@hanuschke.eu',
  autoApproveOptions: {
    allowedUsernames: ['robert-hanuschke'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
  cdkVersion: '2.273.0',
  defaultReleaseBranch: 'main',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve'],
    },
  },
  description: 'AWS CDK Construct Library for Amazon Managed Service for Prometheus',
  devDeps: [
    '@aws-cdk/integ-runner@2.205.6',
    '@aws-cdk/integ-tests-alpha@2.273.0-alpha.0',
  ],
  jsiiVersion: '~5.9.0',
  keywords: ['Prometheus', 'Amazon Managed Service for Prometheus', 'aps'],
  license: 'MIT',
  name: 'aws_aps',
  packageName: '@robhan-cdk-lib/aws_aps',
  packageManager: javascript.NodePackageManager.YARN_CLASSIC,
  projenrcTs: true,
  publishToGo: {
    moduleName: 'github.com/robert-hanuschke/robhan-cdk-lib-aws-aps',
  },
  publishToMaven: {
    javaPackage: 'io.github.roberthanuschke.cdk.aws.aps',
    mavenGroupId: 'io.github.robert-hanuschke',
    mavenArtifactId: 'cdk-aws-aps',
    mavenServerId: 'central-ossrh',
  },
  publishToNuget: {
    dotNetNamespace: 'Robhan.CdkLib',
    packageId: 'Robhan.CdkLib.AwsAps',
  },
  publishToPypi: {
    distName: 'robhan_cdk_lib.aws_aps',
    module: 'robhan_cdk_lib.aws_aps',
  },
  repositoryUrl: 'https://github.com/robert-hanuschke/cdk-aws_aps',
});

project.gitignore.addPatterns('.jsii.tabl.json');
project.gitattributes.addAttributes(
  '/test/integ.*.snapshot/asset.*/**',
  '-diff',
  'linguist-generated',
);
project.testTask.exec('tsc --project test/tsconfig.json --noEmit');

const strictRosettaTask = project.addTask('rosetta:strict', {
  description: 'Compile documentation examples in strict mode',
});
strictRosettaTask.exec('jsii-rosetta extract .jsii --strict --cleanup');
project.postCompileTask.spawn(strictRosettaTask);

const integTask = project.addTask('integ', {
  description: 'Deploy the integration test in a non-production AWS account',
});
integTask.exec(
  'integ-runner --force --language typescript --parallel-regions us-east-1 --max-workers 1 --strict test/integ.workspace.ts',
);

const integSnapshotTask = project.addTask('integ:snapshot', {
  description: 'Update the integration snapshot without deploying',
});
integSnapshotTask.exec(
  'integ-runner --dry-run --language typescript --parallel-regions us-east-1 --max-workers 1 --strict --update-on-failed test/integ.workspace.ts',
);

const releaseWorkflow = project.github?.tryFindWorkflow('release');

releaseWorkflow?.file!.addOverride(
  'jobs.release_npm.env.NPM_ACCESS_LEVEL',
  'public',
);

project.synth();
