/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Greengrass::ConnectorDefinition
 */
export interface AwsGreengrassConnectordefinition {
  LatestVersionArn?: string;
  Id?: string;
  Arn?: string;
  Name: string;
  InitialVersion?: ConnectorDefinitionVersion;
  Tags?: {
    [k: string]: unknown;
  };
}
export interface ConnectorDefinitionVersion {
  Connectors: Connector[];
}
export interface Connector {
  ConnectorArn: string;
  Parameters?: {
    [k: string]: unknown;
  };
  Id: string;
}
