/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::RDS::DBProxyEndpoint.
 */
export interface AwsRdsDbproxyendpoint {
  /**
   * The identifier for the DB proxy endpoint. This name must be unique for all DB proxy endpoints owned by your AWS account in the specified AWS Region.
   */
  DBProxyEndpointName: string;
  /**
   * The Amazon Resource Name (ARN) for the DB proxy endpoint.
   */
  DBProxyEndpointArn?: string;
  /**
   * The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
   */
  DBProxyName: string;
  /**
   * VPC ID to associate with the new DB proxy endpoint.
   */
  VpcId?: string;
  /**
   * VPC security group IDs to associate with the new DB proxy endpoint.
   *
   * @minItems 1
   */
  VpcSecurityGroupIds?: [string, ...string[]];
  /**
   * VPC subnet IDs to associate with the new DB proxy endpoint.
   *
   * @minItems 2
   */
  VpcSubnetIds: [string, string, ...string[]];
  /**
   * The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the connection string for a database client application.
   */
  Endpoint?: string;
  /**
   * A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.
   */
  TargetRole?: "READ_WRITE" | "READ_ONLY";
  /**
   * A value that indicates whether this endpoint is the default endpoint for the associated DB proxy. Default DB proxy endpoints always have read/write capability. Other endpoints that you associate with the DB proxy can be either read/write or read-only.
   */
  IsDefault?: boolean;
  /**
   * An optional set of key-value pairs to associate arbitrary data of your choosing with the DB proxy endpoint.
   */
  Tags?: TagFormat[];
}
export interface TagFormat {
  Key?: string;
  Value?: string;
}
