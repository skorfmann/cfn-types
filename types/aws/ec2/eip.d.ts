/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::EC2::EIP
 */
export interface AwsEc2Eip {
  /**
   * The PublicIP of the EIP generated by resource.
   */
  PublicIp?: string;
  /**
   * The Allocation ID of the EIP generated by resource.
   */
  AllocationId?: string;
  /**
   * Indicates whether the Elastic IP address is for use with instances in a VPC or instance in EC2-Classic.
   */
  Domain?: string;
  /**
   * A unique set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises IP addresses.
   */
  NetworkBorderGroup?: string;
  /**
   * The PublicIP of the EIP generated by resource through transfer from another account
   */
  TransferAddress?: string;
  /**
   * The ID of the instance.
   */
  InstanceId?: string;
  /**
   * The ID of an address pool that you own. Use this parameter to let Amazon EC2 select an address from the address pool.
   */
  PublicIpv4Pool?: string;
  /**
   * Any tags assigned to the EIP.
   */
  Tags?: Tag[];
}
export interface Tag {
  Key: string;
  Value: string;
}
