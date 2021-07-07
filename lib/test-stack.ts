import { Stack, StackProps, Construct, SecretValue, Stage, StageProps } from '@aws-cdk/core';
import * as codepipeline_actions from "@aws-cdk/aws-codepipeline-actions";
import * as codepipeline from '@aws-cdk/aws-codepipeline';
import { CdkPipeline, SimpleSynthAction } from '@aws-cdk/pipelines';
import { Bucket } from '@aws-cdk/aws-s3';

type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;

export class s3Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Bucket(this, 'newbucket1', {
      bucketName: 'nk-ginger-test111',
      publicReadAccess: true
    })
  };
}

export class MyApplication extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);
    new s3Stack(this, 'bucket1')
  }
}

export class MyPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const sourceArtifact = new codepipeline.Artifact();
    const cloudAssemblyArtifact = new codepipeline.Artifact();
    const oauth = SecretValue.secretsManager('github');

    const pipeline = new CdkPipeline(this, 'Pipeline', {
      pipelineName: 'MyAppPipeline',
      cloudAssemblyArtifact,

      sourceAction: new codepipeline_actions.GitHubSourceAction({
        actionName: 'GitHub',
        output: sourceArtifact,
        oauthToken: oauth,
        trigger: codepipeline_actions.GitHubTrigger.POLL,
        // Replace these with your actual GitHub project info
        owner: 'ginger-io',
        repo: 'cdk-pipelines-prototype',
      }),

      synthAction: SimpleSynthAction.standardNpmSynth({
        sourceArtifact,
        cloudAssemblyArtifact,

        // Use this if you need a build step (if you're not using ts-node
        // or if you have TypeScript Lambdas that need to be compiled).
        buildCommand: 'npm run build',
      }),
    });
    pipeline.addApplicationStage(new MyApplication(this, 'Prod', {
      env: {
        account: '394979472778',
        region: 'us-east-1',
      }
    }));

  }
}
