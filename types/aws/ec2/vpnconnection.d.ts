/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::EC2::VPNConnection
 */
export interface AwsEc2Vpnconnection {
  /**
   * The provider-assigned unique ID for this managed resource
   */
  VpnConnectionId?: string;
  /**
   * The ID of the customer gateway at your end of the VPN connection.
   */
  CustomerGatewayId: string;
  /**
   * Indicates whether the VPN connection uses static routes only.
   */
  StaticRoutesOnly?: boolean;
  /**
   * Any tags assigned to the VPN connection.
   */
  Tags?: Tag[];
  /**
   * The ID of the transit gateway associated with the VPN connection.
   */
  TransitGatewayId?: string;
  /**
   * The type of VPN connection.
   */
  Type: string;
  /**
   * The ID of the virtual private gateway at the AWS side of the VPN connection.
   */
  VpnGatewayId?: string;
  /**
   * The tunnel options for the VPN connection.
   */
  VpnTunnelOptionsSpecifications?: VpnTunnelOptionsSpecification[];
}
export interface Tag {
  Key: string;
  Value: string;
}
export interface VpnTunnelOptionsSpecification {
  PreSharedKey?: string;
  TunnelInsideCidr?: string;
}