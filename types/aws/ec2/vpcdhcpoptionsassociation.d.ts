/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Associates a set of DHCP options with a VPC, or associates no DHCP options with the VPC.
 */
export interface AwsEc2Vpcdhcpoptionsassociation {
  /**
   * The ID of the VPC DHCPOptions Association.
   */
  Id?: string;
  /**
   * The ID of the DHCP options set, or default to associate no DHCP options with the VPC.
   */
  DhcpOptionsId: string;
  /**
   * The ID of the VPC.
   */
  VpcId: string;
}
