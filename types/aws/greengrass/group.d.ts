/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Greengrass::Group
 */
export interface AwsGreengrassGroup {
  RoleAttachedAt?: string;
  LatestVersionArn?: string;
  Id?: string;
  Arn?: string;
  RoleArn?: string;
  Name: string;
  InitialVersion?: GroupVersion;
  Tags?: {
    [k: string]: unknown;
  };
}
export interface GroupVersion {
  LoggerDefinitionVersionArn?: string;
  DeviceDefinitionVersionArn?: string;
  FunctionDefinitionVersionArn?: string;
  CoreDefinitionVersionArn?: string;
  ResourceDefinitionVersionArn?: string;
  ConnectorDefinitionVersionArn?: string;
  SubscriptionDefinitionVersionArn?: string;
}
