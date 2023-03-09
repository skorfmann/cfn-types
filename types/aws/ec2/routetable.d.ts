/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::EC2::RouteTable
 */
export interface AwsEc2Routetable {
  /**
   * The route table ID.
   */
  RouteTableId?: string;
  /**
   * Any tags assigned to the route table.
   */
  Tags?: Tag[];
  /**
   * The ID of the VPC.
   */
  VpcId: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
