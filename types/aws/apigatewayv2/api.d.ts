/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ApiGatewayV2::Api
 */
export interface AwsApigatewayv2Api {
  RouteSelectionExpression?: string;
  BodyS3Location?: BodyS3Location;
  Description?: string;
  ApiEndpoint?: string;
  BasePath?: string;
  FailOnWarnings?: boolean;
  DisableExecuteApiEndpoint?: boolean;
  DisableSchemaValidation?: boolean;
  Name?: string;
  Target?: string;
  CredentialsArn?: string;
  CorsConfiguration?: Cors;
  Version?: string;
  ProtocolType?: string;
  RouteKey?: string;
  ApiId?: string;
  Body?: {
    [k: string]: unknown;
  };
  /**
   * This resource type use map for Tags, suggest to use List of Tag
   */
  Tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string;
  };
  ApiKeySelectionExpression?: string;
}
export interface BodyS3Location {
  Etag?: string;
  Bucket?: string;
  Version?: string;
  Key?: string;
}
export interface Cors {
  AllowOrigins?: string[];
  AllowCredentials?: boolean;
  ExposeHeaders?: string[];
  AllowHeaders?: string[];
  MaxAge?: number;
  AllowMethods?: string[];
}
