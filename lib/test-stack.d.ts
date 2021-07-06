import { Stack, StackProps, Construct, Stage, StageProps } from '@aws-cdk/core';
export declare class s3Stack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps);
}
export declare class MyApplication extends Stage {
    constructor(scope: Construct, id: string, props?: StageProps);
}
export declare class MyPipelineStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps);
}
