import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Robert Hanuschke',
  authorAddress: 'robhan-cdk-lib@hanuschke.eu',
  autoApproveOptions: {
    allowedUsernames: ['robert-hanuschke'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
  cdkVersion: '2.201.0',
  defaultReleaseBranch: 'main',
  deps: [
    '@robhan-cdk-lib/utils',
  ],
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve'],
    },
  },
  description: 'AWS CDK Construct Library for Amazon Managed Service for Prometheus',
  jsiiVersion: '~5.8.0',
  keywords: ['Prometheus', 'Amazon Managed Service for Prometheus', 'aps'],
  license: 'MIT',
  name: 'aws_aps',
  packageName: '@robhan-cdk-lib/aws_aps',
  packageManager: javascript.NodePackageManager.YARN_CLASSIC,
  projenrcTs: true,
  publishToGo: {
    moduleName: 'github.com/robert-hanuschke/robhan-cdk-lib-aws-aps',
  },
  /* publishToMaven: {
    javaPackage: 'io.github.roberthanuschke.cdk.aws.aps',
    mavenGroupId: 'io.github.robert-hanuschke',
    mavenArtifactId: 'cdk-aws-aps',
    mavenServerId: 'central-ossrh',
  }, */
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

const releaseWorkflow = project.github?.tryFindWorkflow('release');

releaseWorkflow?.file!.addOverride(
  'jobs.release_npm.env.NPM_ACCESS_LEVEL',
  'public',
);

project.synth();
