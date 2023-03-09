/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment
 */
export interface AwsCognitoUserpoolriskconfigurationattachment {
  Id?: string;
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;
  UserPoolId: string;
  ClientId: string;
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;
  RiskExceptionConfiguration?: RiskExceptionConfigurationType;
}
export interface CompromisedCredentialsRiskConfigurationType {
  Actions: CompromisedCredentialsActionsType;
  EventFilter?: string[];
}
export interface CompromisedCredentialsActionsType {
  EventAction: string;
}
export interface AccountTakeoverRiskConfigurationType {
  Actions: AccountTakeoverActionsType;
  NotifyConfiguration?: NotifyConfigurationType;
}
export interface AccountTakeoverActionsType {
  HighAction?: AccountTakeoverActionType;
  LowAction?: AccountTakeoverActionType;
  MediumAction?: AccountTakeoverActionType;
}
export interface AccountTakeoverActionType {
  Notify: boolean;
  EventAction: string;
}
export interface NotifyConfigurationType {
  BlockEmail?: NotifyEmailType;
  ReplyTo?: string;
  SourceArn: string;
  NoActionEmail?: NotifyEmailType;
  From?: string;
  MfaEmail?: NotifyEmailType;
}
export interface NotifyEmailType {
  TextBody?: string;
  HtmlBody?: string;
  Subject: string;
}
export interface RiskExceptionConfigurationType {
  BlockedIPRangeList?: string[];
  SkippedIPRangeList?: string[];
}
