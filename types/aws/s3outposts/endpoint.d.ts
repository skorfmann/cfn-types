/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type Definition for AWS::S3Outposts::Endpoint
 */
export interface AwsS3OutpostsEndpoint {
  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   */
  Arn?: string;
  /**
   * The VPC CIDR committed by this endpoint.
   */
  CidrBlock?: string;
  /**
   * The time the endpoint was created.
   */
  CreationTime?: string;
  /**
   * The ID of the endpoint.
   */
  Id?: string;
  /**
   * The network interfaces of the endpoint.
   */
  NetworkInterfaces?: NetworkInterface[];
  /**
   * The id of the customer outpost on which the bucket resides.
   */
  OutpostId: string;
  /**
   * The ID of the security group to use with the endpoint.
   */
  SecurityGroupId: string;
  Status?: "Available" | "Pending" | "Deleting";
  /**
   * The ID of the subnet in the selected VPC. The subnet must belong to the Outpost.
   */
  SubnetId: string;
  /**
   * The type of access for the on-premise network connectivity for the Outpost endpoint. To access endpoint from an on-premises network, you must specify the access type and provide the customer owned Ipv4 pool.
   */
  AccessType?: "CustomerOwnedIp" | "Private";
  /**
   * The ID of the customer-owned IPv4 pool for the Endpoint. IP addresses will be allocated from this pool for the endpoint.
   */
  CustomerOwnedIpv4Pool?: string;
}
/**
 * The container for the network interface.
 */
export interface NetworkInterface {
  NetworkInterfaceId: string;
}