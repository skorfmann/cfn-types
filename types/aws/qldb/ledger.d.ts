/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::QLDB::Ledger
 */
export interface AwsQldbLedger {
  PermissionsMode: string;
  DeletionProtection?: boolean;
  Id?: string;
  KmsKey?: string;
  Tags?: Tag[];
  Name?: string;
}
export interface Tag {
  Value: string;
  Key: string;
}
