/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ApiGatewayV2::Model
 */
export interface AwsApigatewayv2Model {
  ModelId?: string;
  Description?: string;
  ContentType?: string;
  Schema: {
    [k: string]: unknown;
  };
  ApiId: string;
  Name: string;
}
