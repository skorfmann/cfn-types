/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::AppStream::Entitlement
 */
export interface AwsAppstreamEntitlement {
  Name: string;
  StackName: string;
  Description?: string;
  AppVisibility: string;
  Attributes: Attribute[];
  CreatedTime?: string;
  LastModifiedTime?: string;
}
export interface Attribute {
  Name: string;
  Value: string;
}
