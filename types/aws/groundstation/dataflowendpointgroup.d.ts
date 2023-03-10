/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * AWS Ground Station DataflowEndpointGroup schema for CloudFormation
 */
export interface AwsGroundstationDataflowendpointgroup {
  Id?: string;
  Arn?: string;
  /**
   * @minItems 1
   */
  EndpointDetails: [EndpointDetails, ...EndpointDetails[]];
  ContactPrePassDurationSeconds?: number;
  ContactPostPassDurationSeconds?: number;
  Tags?: Tag[];
}
export interface EndpointDetails {
  SecurityDetails?: SecurityDetails;
  Endpoint?: DataflowEndpoint;
}
export interface SecurityDetails {
  SubnetIds?: string[];
  SecurityGroupIds?: string[];
  RoleArn?: string;
}
export interface DataflowEndpoint {
  Name?: string;
  Address?: SocketAddress;
  Mtu?: number;
}
export interface SocketAddress {
  Name?: string;
  Port?: number;
}
export interface Tag {
  Key: string;
  Value: string;
}
