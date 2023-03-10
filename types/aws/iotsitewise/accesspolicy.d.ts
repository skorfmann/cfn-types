/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::IoTSiteWise::AccessPolicy
 */
export interface AwsIotsitewiseAccesspolicy {
  /**
   * The ID of the access policy.
   */
  AccessPolicyId?: string;
  /**
   * The ARN of the access policy.
   */
  AccessPolicyArn?: string;
  AccessPolicyIdentity: AccessPolicyIdentity;
  /**
   * The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.
   */
  AccessPolicyPermission: string;
  AccessPolicyResource: AccessPolicyResource;
}
/**
 * The identity for this access policy. Choose either a user or a group but not both.
 */
export interface AccessPolicyIdentity {
  User?: User;
  IamUser?: IamUser;
  IamRole?: IamRole;
}
/**
 * Contains information for a user identity in an access policy.
 */
export interface User {
  /**
   * The AWS SSO ID of the user.
   */
  id?: string;
}
/**
 * Contains information for an IAM user identity in an access policy.
 */
export interface IamUser {
  /**
   * The ARN of the IAM user.
   */
  arn?: string;
}
/**
 * Contains information for an IAM role identity in an access policy.
 */
export interface IamRole {
  /**
   * The ARN of the IAM role.
   */
  arn?: string;
}
/**
 * The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.
 */
export interface AccessPolicyResource {
  Portal?: Portal;
  Project?: Project;
}
/**
 * A portal resource.
 */
export interface Portal {
  /**
   * The ID of the portal.
   */
  id?: string;
}
/**
 * A project resource.
 */
export interface Project {
  /**
   * The ID of the project.
   */
  id?: string;
}
