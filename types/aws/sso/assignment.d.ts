/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for SSO assignmet
 */
export interface AwsSsoAssignment {
  /**
   * The sso instance that the permission set is owned.
   */
  InstanceArn: string;
  /**
   * The account id to be provisioned.
   */
  TargetId: string;
  /**
   * The type of resource to be provsioned to, only aws account now
   */
  TargetType: "AWS_ACCOUNT";
  /**
   * The permission set that the assignemt will be assigned
   */
  PermissionSetArn: string;
  /**
   * The assignee's type, user/group
   */
  PrincipalType: "USER" | "GROUP";
  /**
   * The assignee's identifier, user id/group id
   */
  PrincipalId: string;
}
