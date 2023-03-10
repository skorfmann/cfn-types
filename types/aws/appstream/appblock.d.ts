/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Arn = string;

/**
 * Resource Type definition for AWS::AppStream::AppBlock
 */
export interface AwsAppstreamAppblock {
  Name: string;
  Arn?: Arn;
  Description?: string;
  DisplayName?: string;
  SourceS3Location: S3Location;
  SetupScriptDetails: ScriptDetails;
  Tags?: Tag[];
  CreatedTime?: string;
}
export interface S3Location {
  S3Bucket: string;
  S3Key: string;
}
export interface ScriptDetails {
  ScriptS3Location: S3Location;
  ExecutablePath: string;
  ExecutableParameters?: string;
  TimeoutInSeconds: number;
}
export interface Tag {
  TagKey: string;
  TagValue: string;
}
