/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type BackupVaultNamePattern = string;

/**
 * Resource Type definition for AWS::Backup::BackupVault
 */
export interface AwsBackupBackupvault {
  AccessPolicy?:
    | {
        [k: string]: unknown;
      }
    | string;
  BackupVaultName: BackupVaultNamePattern;
  BackupVaultTags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.{1,128}$".
     */
    [k: string]: string;
  };
  EncryptionKeyArn?: string;
  Notifications?: NotificationObjectType;
  LockConfiguration?: LockConfigurationType;
  BackupVaultArn?: string;
}
export interface NotificationObjectType {
  BackupVaultEvents: string[];
  SNSTopicArn: string;
}
export interface LockConfigurationType {
  MinRetentionDays: number;
  MaxRetentionDays?: number;
  ChangeableForDays?: number;
}