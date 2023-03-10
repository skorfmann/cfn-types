/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for a Redshift-managed VPC endpoint.
 */
export interface AwsRedshiftEndpointaccess {
  /**
   * The DNS address of the endpoint.
   */
  Address?: string;
  /**
   * A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account
   */
  ClusterIdentifier: string;
  /**
   * A list of Virtual Private Cloud (VPC) security groups to be associated with the endpoint.
   */
  VpcSecurityGroups?: VpcSecurityGroup[];
  /**
   * The AWS account ID of the owner of the cluster.
   */
  ResourceOwner?: string;
  /**
   * The status of the endpoint.
   */
  EndpointStatus?: string;
  /**
   * The name of the endpoint.
   */
  EndpointName: string;
  /**
   * The time (UTC) that the endpoint was created.
   */
  EndpointCreateTime?: string;
  /**
   * The subnet group name where Amazon Redshift chooses to deploy the endpoint.
   */
  SubnetGroupName: string;
  /**
   * The port number on which the cluster accepts incoming connections.
   */
  Port?: number;
  /**
   * A list of vpc security group ids to apply to the created endpoint access.
   */
  VpcSecurityGroupIds: string[];
  /**
   * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
   */
  VpcEndpoint?: {
    /**
     * The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy.
     */
    VpcEndpointId?: string;
    /**
     * The VPC identifier that the endpoint is associated.
     */
    VpcId?: string;
    /**
     * One or more network interfaces of the endpoint. Also known as an interface endpoint.
     */
    NetworkInterfaces?: NetworkInterface[];
  };
}
/**
 * Describes the members of a VPC security group.
 */
export interface VpcSecurityGroup {
  /**
   * The identifier of the VPC security group.
   */
  VpcSecurityGroupId?: string;
  /**
   * The status of the VPC security group.
   */
  Status?: string;
}
/**
 * Describes a network interface.
 */
export interface NetworkInterface {
  /**
   * The network interface identifier.
   */
  NetworkInterfaceId?: string;
  /**
   * The subnet identifier.
   */
  SubnetId?: string;
  /**
   * The IPv4 address of the network interface within the subnet.
   */
  PrivateIpAddress?: string;
  /**
   * The Availability Zone.
   */
  AvailabilityZone?: string;
}
