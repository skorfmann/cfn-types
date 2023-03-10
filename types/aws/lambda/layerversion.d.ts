/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Lambda::LayerVersion
 */
export interface AwsLambdaLayerversion {
  CompatibleRuntimes?: string[];
  LicenseInfo?: string;
  Description?: string;
  LayerName?: string;
  Content: Content;
  Id?: string;
  CompatibleArchitectures?: string[];
}
export interface Content {
  S3ObjectVersion?: string;
  S3Bucket: string;
  S3Key: string;
}
