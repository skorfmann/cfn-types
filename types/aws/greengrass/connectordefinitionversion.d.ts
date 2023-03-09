/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Greengrass::ConnectorDefinitionVersion
 */
export interface AwsGreengrassConnectordefinitionversion {
  Id?: string;
  Connectors: Connector[];
  ConnectorDefinitionId: string;
}
export interface Connector {
  ConnectorArn: string;
  Parameters?: {
    [k: string]: unknown;
  };
  Id: string;
}