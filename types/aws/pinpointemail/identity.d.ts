/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::PinpointEmail::Identity
 */
export interface AwsPinpointemailIdentity {
  Id?: string;
  IdentityDNSRecordName3?: string;
  IdentityDNSRecordName1?: string;
  IdentityDNSRecordName2?: string;
  IdentityDNSRecordValue3?: string;
  IdentityDNSRecordValue2?: string;
  IdentityDNSRecordValue1?: string;
  FeedbackForwardingEnabled?: boolean;
  DkimSigningEnabled?: boolean;
  Tags?: Tags[];
  Name: string;
  MailFromAttributes?: MailFromAttributes;
}
export interface Tags {
  Value?: string;
  Key?: string;
}
export interface MailFromAttributes {
  MailFromDomain?: string;
  BehaviorOnMxFailure?: string;
}