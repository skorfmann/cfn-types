/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * @maxItems 1
 */
export type AccessControlAttributeValueSourceList = [] | [AccessControlAttributeValueSource];
export type AccessControlAttributeValueSource = string;
/**
 * @maxItems 50
 */
export type AccessControlAttributeList = AccessControlAttribute[];

/**
 * Resource Type definition for SSO InstanceAccessControlAttributeConfiguration
 */
export interface AwsSsoInstanceaccesscontrolattributeconfiguration {
  /**
   * The ARN of the AWS SSO instance under which the operation will be executed.
   */
  InstanceArn: string;
  /**
   * The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. We recomend that you use  AccessControlAttributes property instead.
   */
  InstanceAccessControlAttributeConfiguration?: {
    AccessControlAttributes: AccessControlAttributeList;
  };
  AccessControlAttributes?: AccessControlAttributeList;
}
export interface AccessControlAttribute {
  Key: string;
  Value: AccessControlAttributeValue;
}
export interface AccessControlAttributeValue {
  Source: AccessControlAttributeValueSourceList;
}
