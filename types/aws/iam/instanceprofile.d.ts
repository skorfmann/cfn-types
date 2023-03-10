/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::IAM::InstanceProfile
 */
export interface AwsIamInstanceprofile {
  /**
   * The path to the instance profile.
   */
  Path?: string;
  /**
   * The name of the role to associate with the instance profile. Only one role can be assigned to an EC2 instance at a time, and all applications on the instance share the same role and permissions.
   */
  Roles: string[];
  /**
   * The name of the instance profile to create.
   */
  InstanceProfileName?: string;
  /**
   * The Amazon Resource Name (ARN) of the instance profile.
   */
  Arn?: string;
}
