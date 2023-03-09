/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Describes a route for a local gateway route table.
 */
export type AwsEc2Localgatewayroute = {
  /**
   * The CIDR block used for destination matches.
   */
  DestinationCidrBlock?: string;
  /**
   * The ID of the local gateway route table.
   */
  LocalGatewayRouteTableId?: string;
  /**
   * The ID of the virtual interface group.
   */
  LocalGatewayVirtualInterfaceGroupId?: string;
  /**
   * The ID of the network interface.
   */
  NetworkInterfaceId?: string;
  /**
   * The state of the route.
   */
  State?: string;
  /**
   * The route type.
   */
  Type?: string;
} & {
  [k: string]: unknown;
};