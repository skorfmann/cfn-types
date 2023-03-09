/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Cognito::IdentityPool
 */
export interface AwsCognitoIdentitypool {
  PushSync?: PushSync;
  CognitoIdentityProviders?: CognitoIdentityProvider[];
  DeveloperProviderName?: string;
  CognitoStreams?: CognitoStreams;
  SupportedLoginProviders?: {
    [k: string]: unknown;
  };
  Name?: string;
  CognitoEvents?: {
    [k: string]: unknown;
  };
  Id?: string;
  IdentityPoolName?: string;
  AllowUnauthenticatedIdentities: boolean;
  SamlProviderARNs?: string[];
  OpenIdConnectProviderARNs?: string[];
  AllowClassicFlow?: boolean;
}
export interface PushSync {
  ApplicationArns?: string[];
  RoleArn?: string;
}
export interface CognitoIdentityProvider {
  ServerSideTokenCheck?: boolean;
  ProviderName?: string;
  ClientId?: string;
}
export interface CognitoStreams {
  StreamingStatus?: string;
  StreamName?: string;
  RoleArn?: string;
}
