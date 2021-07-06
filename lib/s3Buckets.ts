import { Construct } from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';

export class testBucket extends Construct {
    constructor(
        scope: Construct,
        id: string
      ) {
        super(scope, id)

    new Bucket(this, 'newbucket1', {
        bucketName: 'nk-ginger-test111'
    })
    }
}

export class testBucket2 extends Construct {
    constructor(
        scope: Construct,
        id: string
      ) {
        super(scope, id)

    new Bucket(this, 'newbucket2', {
        bucketName: 'nk-ginger-test222'
    })
    }
}