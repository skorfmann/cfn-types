/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.
 */
export interface AwsApigatewayAuthorizer {
  /**
   * The identifier of the API.
   */
  RestApiId: string;
  AuthorizerId?: string;
  /**
   * Optional customer-defined field, used in OpenAPI imports and exports without functional impact.
   */
  AuthType?: string;
  /**
   * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer.
   */
  AuthorizerCredentials?: string;
  /**
   * The TTL in seconds of cached authorizer results.
   */
  AuthorizerResultTtlInSeconds?: number;
  /**
   * Specifies the authorizer's Uniform Resource Identifier (URI).
   */
  AuthorizerUri?: string;
  /**
   * The identity source for which authorization is requested.
   */
  IdentitySource?: string;
  /**
   * A validation expression for the incoming identity token.
   */
  IdentityValidationExpression?: string;
  /**
   * The name of the authorizer.
   */
  Name: string;
  /**
   * A list of the Amazon Cognito user pool ARNs for the COGNITO_USER_POOLS authorizer.
   */
  ProviderARNs?: string[];
  /**
   * The authorizer type.
   */
  Type: string;
}
