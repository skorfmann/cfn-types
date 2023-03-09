/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ApiGatewayV2::IntegrationResponse
 */
export interface AwsApigatewayv2Integrationresponse {
  Id?: string;
  ResponseTemplates?: {
    [k: string]: unknown;
  };
  TemplateSelectionExpression?: string;
  ResponseParameters?: {
    [k: string]: unknown;
  };
  ContentHandlingStrategy?: string;
  IntegrationId: string;
  IntegrationResponseKey: string;
  ApiId: string;
}