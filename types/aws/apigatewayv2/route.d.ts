/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ApiGatewayV2::Route
 */
export interface AwsApigatewayv2Route {
  Id?: string;
  Target?: string;
  RouteResponseSelectionExpression?: string;
  AuthorizerId?: string;
  RequestModels?: {
    [k: string]: unknown;
  };
  OperationName?: string;
  AuthorizationScopes?: string[];
  ApiKeyRequired?: boolean;
  RouteKey: string;
  AuthorizationType?: string;
  ModelSelectionExpression?: string;
  ApiId: string;
  RequestParameters?: {
    [k: string]: unknown;
  };
}
