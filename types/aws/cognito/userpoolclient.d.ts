/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Cognito::UserPoolClient
 */
export interface AwsCognitoUserpoolclient {
  AnalyticsConfiguration?: AnalyticsConfiguration;
  GenerateSecret?: boolean;
  CallbackURLs?: string[];
  IdTokenValidity?: number;
  TokenValidityUnits?: TokenValidityUnits;
  ReadAttributes?: string[];
  AllowedOAuthFlowsUserPoolClient?: boolean;
  DefaultRedirectURI?: string;
  Name?: string;
  ClientName?: string;
  ExplicitAuthFlows?: string[];
  AccessTokenValidity?: number;
  EnableTokenRevocation?: boolean;
  EnablePropagateAdditionalUserContextData?: boolean;
  AuthSessionValidity?: number;
  AllowedOAuthScopes?: string[];
  SupportedIdentityProviders?: string[];
  UserPoolId: string;
  AllowedOAuthFlows?: string[];
  ClientSecret?: string;
  LogoutURLs?: string[];
  RefreshTokenValidity?: number;
  Id?: string;
  WriteAttributes?: string[];
  PreventUserExistenceErrors?: string;
}
export interface AnalyticsConfiguration {
  ApplicationArn?: string;
  ApplicationId?: string;
  UserDataShared?: boolean;
  RoleArn?: string;
  ExternalId?: string;
}
export interface TokenValidityUnits {
  IdToken?: string;
  RefreshToken?: string;
  AccessToken?: string;
}
