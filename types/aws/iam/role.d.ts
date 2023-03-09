/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::IAM::Role
 */
export interface AwsIamRole {
  /**
   * The Amazon Resource Name (ARN) for the role.
   */
  Arn?: string;
  /**
   * The trust policy that is associated with this role.
   */
  AssumeRolePolicyDocument:
    | {
        [k: string]: unknown;
      }
    | string;
  /**
   * A description of the role that you provide.
   */
  Description?: string;
  /**
   * A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the role.
   */
  ManagedPolicyArns?: string[];
  /**
   * The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours.
   */
  MaxSessionDuration?: number;
  /**
   * The path to the role.
   */
  Path?: string;
  /**
   * The ARN of the policy used to set the permissions boundary for the role.
   */
  PermissionsBoundary?: string;
  /**
   * Adds or updates an inline policy document that is embedded in the specified IAM role.
   */
  Policies?: Policy[];
  /**
   * The stable and unique string identifying the role.
   */
  RoleId?: string;
  /**
   * A name for the IAM role, up to 64 characters in length.
   */
  RoleName?: string;
  /**
   * A list of tags that are attached to the role.
   */
  Tags?: Tag[];
}
/**
 * The inline policy document that is embedded in the specified IAM role.
 */
export interface Policy {
  /**
   * The policy document.
   */
  PolicyDocument:
    | string
    | {
        [k: string]: unknown;
      };
  /**
   * The friendly name (not ARN) identifying the policy.
   */
  PolicyName: string;
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}
