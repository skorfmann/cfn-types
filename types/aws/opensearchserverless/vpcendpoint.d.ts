/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Amazon OpenSearchServerless vpc endpoint resource
 */
export interface AwsOpensearchserverlessVpcendpoint {
  /**
   * The identifier of the VPC Endpoint
   */
  Id?: string;
  /**
   * The name of the VPC Endpoint
   */
  Name: string;
  /**
   * The ID of one or more security groups to associate with the endpoint network interface
   *
   * @minItems 1
   * @maxItems 5
   */
  SecurityGroupIds?:
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string];
  /**
   * The ID of one or more subnets in which to create an endpoint network interface
   *
   * @minItems 1
   * @maxItems 6
   */
  SubnetIds:
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string];
  /**
   * The ID of the VPC in which the endpoint will be used.
   */
  VpcId: string;
}