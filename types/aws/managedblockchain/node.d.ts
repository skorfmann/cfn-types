/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ManagedBlockchain::Node
 */
export interface AwsManagedblockchainNode {
  NodeId?: string;
  MemberId?: string;
  Arn?: string;
  NetworkId: string;
  NodeConfiguration: NodeConfiguration;
}
export interface NodeConfiguration {
  InstanceType: string;
  AvailabilityZone: string;
}
