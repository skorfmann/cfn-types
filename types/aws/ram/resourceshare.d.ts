/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::RAM::ResourceShare
 */
export interface AwsRamResourceshare {
  PermissionArns?: string[];
  Principals?: string[];
  AllowExternalPrincipals?: boolean;
  Id?: string;
  Arn?: string;
  ResourceArns?: string[];
  Tags?: Tag[];
  Name: string;
}
export interface Tag {
  Value: string;
  Key: string;
}
