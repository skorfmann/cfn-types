/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::EFS::MountTarget
 */
export interface AwsEfsMounttarget {
  Id?: string;
  IpAddress?: string;
  FileSystemId: string;
  SecurityGroups: string[];
  SubnetId: string;
}
