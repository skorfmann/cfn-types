/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::EC2::VPCPeeringConnection
 */
export interface AwsEc2Vpcpeeringconnection {
  Id?: string;
  /**
   * The AWS account ID of the owner of the accepter VPC.
   */
  PeerOwnerId?: string;
  /**
   * The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request.
   */
  PeerRegion?: string;
  /**
   * The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account.
   */
  PeerRoleArn?: string;
  /**
   * The ID of the VPC with which you are creating the VPC peering connection. You must specify this parameter in the request.
   */
  PeerVpcId: string;
  /**
   * The ID of the VPC.
   */
  VpcId: string;
  Tags?: Tag[];
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}
