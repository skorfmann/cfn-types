/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::EC2::VPC
 */
export interface AwsEc2Vpc {
  /**
   * The Id for the model.
   */
  VpcId?: string;
  /**
   * The primary IPv4 CIDR block for the VPC.
   */
  CidrBlock?: string;
  /**
   * A list of IPv4 CIDR block association IDs for the VPC.
   */
  CidrBlockAssociations?: string[];
  /**
   * The default network ACL ID that is associated with the VPC.
   */
  DefaultNetworkAcl?: string;
  /**
   * The default security group ID that is associated with the VPC.
   */
  DefaultSecurityGroup?: string;
  /**
   * A list of IPv6 CIDR blocks that are associated with the VPC.
   */
  Ipv6CidrBlocks?: string[];
  /**
   * Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not. Disabled by default for nondefault VPCs.
   */
  EnableDnsHostnames?: boolean;
  /**
   * Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is not enabled. Enabled by default.
   */
  EnableDnsSupport?: boolean;
  /**
   * The allowed tenancy of instances launched into the VPC.
   *
   * "default": An instance launched into the VPC runs on shared hardware by default, unless you explicitly specify a different tenancy during instance launch.
   *
   * "dedicated": An instance launched into the VPC is a Dedicated Instance by default, unless you explicitly specify a tenancy of host during instance launch. You cannot specify a tenancy of default during instance launch.
   *
   * Updating InstanceTenancy requires no replacement only if you are updating its value from "dedicated" to "default". Updating InstanceTenancy from "default" to "dedicated" requires replacement.
   */
  InstanceTenancy?: string;
  /**
   * The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR
   */
  Ipv4IpamPoolId?: string;
  /**
   * The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool
   */
  Ipv4NetmaskLength?: number;
  /**
   * The tags for the VPC.
   */
  Tags?: Tag[];
}
export interface Tag {
  Key: string;
  Value: string;
}