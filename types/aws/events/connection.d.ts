/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type AuthParameters = {
  ApiKeyAuthParameters?: ApiKeyAuthParameters;
  BasicAuthParameters?: BasicAuthParameters;
  OAuthParameters?: OAuthParameters;
  InvocationHttpParameters?: ConnectionHttpParameters;
} & AuthParameters1;
export type AuthParameters1 = {
  [k: string]: unknown;
};

/**
 * Resource Type definition for AWS::Events::Connection.
 */
export interface AwsEventsConnection {
  /**
   * Name of the connection.
   */
  Name?: string;
  /**
   * The arn of the connection resource.
   */
  Arn?: string;
  /**
   * The arn of the secrets manager secret created in the customer account.
   */
  SecretArn?: string;
  /**
   * Description of the connection.
   */
  Description?: string;
  AuthorizationType: "API_KEY" | "BASIC" | "OAUTH_CLIENT_CREDENTIALS";
  AuthParameters: AuthParameters;
}
export interface ApiKeyAuthParameters {
  ApiKeyName: string;
  ApiKeyValue: string;
}
export interface BasicAuthParameters {
  Username: string;
  Password: string;
}
export interface OAuthParameters {
  ClientParameters: ClientParameters;
  AuthorizationEndpoint: string;
  HttpMethod: "GET" | "POST" | "PUT";
  OAuthHttpParameters?: ConnectionHttpParameters;
}
export interface ClientParameters {
  ClientID: string;
  ClientSecret: string;
}
export interface ConnectionHttpParameters {
  HeaderParameters?: Parameter[];
  QueryStringParameters?: Parameter[];
  BodyParameters?: Parameter[];
}
export interface Parameter {
  Key: string;
  Value: string;
  IsValueSecret?: boolean;
}