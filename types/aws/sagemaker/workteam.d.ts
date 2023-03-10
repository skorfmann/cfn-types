/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::SageMaker::Workteam
 */
export interface AwsSagemakerWorkteam {
  Description?: string;
  NotificationConfiguration?: NotificationConfiguration;
  WorkteamName?: string;
  MemberDefinitions?: MemberDefinition[];
  Id?: string;
  WorkforceName?: string;
  Tags?: Tag[];
}
export interface NotificationConfiguration {
  NotificationTopicArn: string;
}
export interface MemberDefinition {
  CognitoMemberDefinition?: CognitoMemberDefinition;
  OidcMemberDefinition?: OidcMemberDefinition;
}
export interface CognitoMemberDefinition {
  CognitoUserGroup: string;
  CognitoUserPool: string;
  CognitoClientId: string;
}
export interface OidcMemberDefinition {
  OidcGroups: string[];
}
export interface Tag {
  Value: string;
  Key: string;
}
