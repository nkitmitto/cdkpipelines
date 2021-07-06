import { App, Construct } from '@aws-cdk/core';
import { CloudFrontWebDistribution, Function, FunctionCode , FunctionEventType} from '@aws-cdk/aws-cloudfront'
import * as origins from '@aws-cdk/aws-cloudfront-origins';
import { Bucket } from '@aws-cdk/aws-s3';

import * as path from 'path';

interface ResponseHeaders {
  "x-frame-options": string
  "referrer-policy": string
  "content-security-policy": string
  "x-content-type-options": string
  "strict-transport-security": string  
}

interface Config {
  responseHeaders?: Partial<ResponseHeaders> // overrideable
}

export function generateCloudFrontFunction(responseHeaders: ResponseHeaders): string {
  const headerLines = Object.entries(responseHeaders).map(([key, value]) => `headers['${key.toLowerCase()}']: {value: '${value}'}`)

  return `
  var response = event.response;
  const headers = response.headers;
  ${headerLines}

  return response;
  `
}

export class cfHeaders extends Construct {
  
    constructor(
      scope: Construct,
      id: string,
      config?: Config
    ) {
      super(scope, id)


    const defaultResponseHeaders: ResponseHeaders = {
      "referrer-policy": "no-referrer-when-downgrade",
      "x-frame-options": "DENY",
      "content-security-policy": "default-src self",
      "x-content-type-options": "nosniff",
      "strict-transport-security": "max-age=31536000; includeSubDomains"
    }

    const responseHeaders = { ...defaultResponseHeaders, ...config?.responseHeaders }
    const cloudFrontFunctionCode = generateCloudFrontFunction(responseHeaders)

    const myBucket = new Bucket(this, 'cfntestbucket', {
      bucketName: 'nk-testing-headers.gingercdkdev.com'
    })

    const cfFunction = new Function(this, "securityHeaders", {
        code: FunctionCode.fromInline(cloudFrontFunctionCode)
    });

      new CloudFrontWebDistribution(this, 'distro', {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: myBucket
            },
            behaviors: [{
              isDefaultBehavior: true,
              functionAssociations: [{
                function: cfFunction,
                eventType: FunctionEventType.VIEWER_RESPONSE,
              }],
            }]
          }
        ]
      }
    );
    }
}