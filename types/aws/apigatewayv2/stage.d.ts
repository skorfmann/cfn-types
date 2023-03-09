/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ApiGatewayV2::Stage
 */
export interface AwsApigatewayv2Stage {
  DeploymentId?: string;
  Description?: string;
  AutoDeploy?: boolean;
  RouteSettings?: {
    [k: string]: unknown;
  };
  StageName: string;
  StageVariables?: {
    [k: string]: unknown;
  };
  AccessPolicyId?: string;
  ClientCertificateId?: string;
  AccessLogSettings?: AccessLogSettings;
  Id?: string;
  ApiId: string;
  DefaultRouteSettings?: RouteSettings;
  Tags?: {
    [k: string]: unknown;
  };
}
export interface AccessLogSettings {
  DestinationArn?: string;
  Format?: string;
}
export interface RouteSettings {
  DetailedMetricsEnabled?: boolean;
  LoggingLevel?: string;
  DataTraceEnabled?: boolean;
  ThrottlingBurstLimit?: number;
  ThrottlingRateLimit?: number;
}