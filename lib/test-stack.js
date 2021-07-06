"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPipelineStack = exports.MyApplication = exports.s3Stack = void 0;
const core_1 = require("@aws-cdk/core");
const codepipeline_actions = require("@aws-cdk/aws-codepipeline-actions");
const codepipeline = require("@aws-cdk/aws-codepipeline");
const pipelines_1 = require("@aws-cdk/pipelines");
const aws_s3_1 = require("@aws-cdk/aws-s3");
class s3Stack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        new aws_s3_1.Bucket(this, 'newbucket1', {
            bucketName: 'nk-ginger-test111'
        });
    }
    ;
}
exports.s3Stack = s3Stack;
class MyApplication extends core_1.Stage {
    constructor(scope, id, props) {
        super(scope, id, props);
        new s3Stack(this, 'bucket1');
    }
}
exports.MyApplication = MyApplication;
class MyPipelineStack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const sourceArtifact = new codepipeline.Artifact();
        const cloudAssemblyArtifact = new codepipeline.Artifact();
        const oauth = core_1.SecretValue.secretsManager('github');
        const pipeline = new pipelines_1.CdkPipeline(this, 'Pipeline', {
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
            synthAction: pipelines_1.SimpleSynthAction.standardNpmSynth({
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
exports.MyPipelineStack = MyPipelineStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3Qtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQTZGO0FBQzdGLDBFQUEwRTtBQUMxRSwwREFBMEQ7QUFDMUQsa0RBQW9FO0FBQ3BFLDRDQUF5QztBQUl6QyxNQUFhLE9BQVEsU0FBUSxZQUFLO0lBQ2hDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBa0I7UUFDMUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUM3QixVQUFVLEVBQUUsbUJBQW1CO1NBQ2hDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFBQSxDQUFDO0NBQ0g7QUFSRCwwQkFRQztBQUVELE1BQWEsYUFBYyxTQUFRLFlBQUs7SUFDdEMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDOUIsQ0FBQztDQUNGO0FBTEQsc0NBS0M7QUFFRCxNQUFhLGVBQWdCLFNBQVEsWUFBSztJQUN4QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQWtCO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sY0FBYyxHQUFHLElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25ELE1BQU0scUJBQXFCLEdBQUcsSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUQsTUFBTSxLQUFLLEdBQUcsa0JBQVcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkQsTUFBTSxRQUFRLEdBQUcsSUFBSSx1QkFBVyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDakQsWUFBWSxFQUFFLGVBQWU7WUFDN0IscUJBQXFCO1lBRXJCLFlBQVksRUFBRSxJQUFJLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDO2dCQUN4RCxVQUFVLEVBQUUsUUFBUTtnQkFDcEIsTUFBTSxFQUFFLGNBQWM7Z0JBQ3RCLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixPQUFPLEVBQUUsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUk7Z0JBQ2hELHFEQUFxRDtnQkFDckQsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLElBQUksRUFBRSx5QkFBeUI7YUFDaEMsQ0FBQztZQUVGLFdBQVcsRUFBRSw2QkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDOUMsY0FBYztnQkFDZCxxQkFBcUI7Z0JBRXJCLGlFQUFpRTtnQkFDakUsK0RBQStEO2dCQUMvRCxZQUFZLEVBQUUsZUFBZTthQUM5QixDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBQ0gsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDM0QsR0FBRyxFQUFFO2dCQUNILE9BQU8sRUFBRSxjQUFjO2dCQUN2QixNQUFNLEVBQUUsV0FBVzthQUNwQjtTQUNGLENBQUMsQ0FBQyxDQUFDO0lBRU4sQ0FBQztDQUNGO0FBdkNELDBDQXVDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNrLCBTdGFja1Byb3BzLCBDb25zdHJ1Y3QsIFNlY3JldFZhbHVlLCBTdGFnZSwgU3RhZ2VQcm9wcyB9IGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0ICogYXMgY29kZXBpcGVsaW5lX2FjdGlvbnMgZnJvbSBcIkBhd3MtY2RrL2F3cy1jb2RlcGlwZWxpbmUtYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgY29kZXBpcGVsaW5lIGZyb20gJ0Bhd3MtY2RrL2F3cy1jb2RlcGlwZWxpbmUnO1xuaW1wb3J0IHsgQ2RrUGlwZWxpbmUsIFNpbXBsZVN5bnRoQWN0aW9uIH0gZnJvbSAnQGF3cy1jZGsvcGlwZWxpbmVzJztcbmltcG9ydCB7IEJ1Y2tldCB9IGZyb20gJ0Bhd3MtY2RrL2F3cy1zMyc7XG5cbnR5cGUgUmVxdWlyZUZpZWxkPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IFQgJiBSZXF1aXJlZDxQaWNrPFQsIEs+PjtcblxuZXhwb3J0IGNsYXNzIHMzU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgbmV3IEJ1Y2tldCh0aGlzLCAnbmV3YnVja2V0MScsIHtcbiAgICAgIGJ1Y2tldE5hbWU6ICduay1naW5nZXItdGVzdDExMSdcbiAgICB9KVxuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgTXlBcHBsaWNhdGlvbiBleHRlbmRzIFN0YWdlIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFnZVByb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG4gICAgbmV3IHMzU3RhY2sodGhpcywgJ2J1Y2tldDEnKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNeVBpcGVsaW5lU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3Qgc291cmNlQXJ0aWZhY3QgPSBuZXcgY29kZXBpcGVsaW5lLkFydGlmYWN0KCk7XG4gICAgY29uc3QgY2xvdWRBc3NlbWJseUFydGlmYWN0ID0gbmV3IGNvZGVwaXBlbGluZS5BcnRpZmFjdCgpO1xuICAgIGNvbnN0IG9hdXRoID0gU2VjcmV0VmFsdWUuc2VjcmV0c01hbmFnZXIoJ2dpdGh1YicpO1xuXG4gICAgY29uc3QgcGlwZWxpbmUgPSBuZXcgQ2RrUGlwZWxpbmUodGhpcywgJ1BpcGVsaW5lJywge1xuICAgICAgcGlwZWxpbmVOYW1lOiAnTXlBcHBQaXBlbGluZScsXG4gICAgICBjbG91ZEFzc2VtYmx5QXJ0aWZhY3QsXG5cbiAgICAgIHNvdXJjZUFjdGlvbjogbmV3IGNvZGVwaXBlbGluZV9hY3Rpb25zLkdpdEh1YlNvdXJjZUFjdGlvbih7XG4gICAgICAgIGFjdGlvbk5hbWU6ICdHaXRIdWInLFxuICAgICAgICBvdXRwdXQ6IHNvdXJjZUFydGlmYWN0LFxuICAgICAgICBvYXV0aFRva2VuOiBvYXV0aCxcbiAgICAgICAgdHJpZ2dlcjogY29kZXBpcGVsaW5lX2FjdGlvbnMuR2l0SHViVHJpZ2dlci5QT0xMLFxuICAgICAgICAvLyBSZXBsYWNlIHRoZXNlIHdpdGggeW91ciBhY3R1YWwgR2l0SHViIHByb2plY3QgaW5mb1xuICAgICAgICBvd25lcjogJ2dpbmdlci1pbycsXG4gICAgICAgIHJlcG86ICdjZGstcGlwZWxpbmVzLXByb3RvdHlwZScsXG4gICAgICB9KSxcblxuICAgICAgc3ludGhBY3Rpb246IFNpbXBsZVN5bnRoQWN0aW9uLnN0YW5kYXJkTnBtU3ludGgoe1xuICAgICAgICBzb3VyY2VBcnRpZmFjdCxcbiAgICAgICAgY2xvdWRBc3NlbWJseUFydGlmYWN0LFxuXG4gICAgICAgIC8vIFVzZSB0aGlzIGlmIHlvdSBuZWVkIGEgYnVpbGQgc3RlcCAoaWYgeW91J3JlIG5vdCB1c2luZyB0cy1ub2RlXG4gICAgICAgIC8vIG9yIGlmIHlvdSBoYXZlIFR5cGVTY3JpcHQgTGFtYmRhcyB0aGF0IG5lZWQgdG8gYmUgY29tcGlsZWQpLlxuICAgICAgICBidWlsZENvbW1hbmQ6ICducG0gcnVuIGJ1aWxkJyxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIHBpcGVsaW5lLmFkZEFwcGxpY2F0aW9uU3RhZ2UobmV3IE15QXBwbGljYXRpb24odGhpcywgJ1Byb2QnLCB7XG4gICAgICBlbnY6IHtcbiAgICAgICAgYWNjb3VudDogJzM5NDk3OTQ3Mjc3OCcsXG4gICAgICAgIHJlZ2lvbjogJ3VzLWVhc3QtMScsXG4gICAgICB9XG4gICAgfSkpO1xuXG4gIH1cbn1cbiJdfQ==