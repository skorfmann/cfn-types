/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::MediaConnect::FlowVpcInterface
 */
export interface AwsMediaconnectFlowvpcinterface {
  /**
   * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
   */
  FlowArn: string;
  /**
   * Immutable and has to be a unique against other VpcInterfaces in this Flow.
   */
  Name: string;
  /**
   * Role Arn MediaConnect can assumes to create ENIs in customer's account.
   */
  RoleArn: string;
  /**
   * Security Group IDs to be used on ENI.
   */
  SecurityGroupIds: string[];
  /**
   * Subnet must be in the AZ of the Flow
   */
  SubnetId: string;
  /**
   * IDs of the network interfaces created in customer's account by MediaConnect.
   */
  NetworkInterfaceIds?: string[];
}
