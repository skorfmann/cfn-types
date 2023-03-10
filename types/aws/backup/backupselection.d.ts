/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Backup::BackupSelection
 */
export interface AwsBackupBackupselection {
  Id?: string;
  BackupPlanId: string;
  BackupSelection: BackupSelectionResourceType;
  SelectionId?: string;
}
export interface BackupSelectionResourceType {
  IamRoleArn: string;
  ListOfTags?: ConditionResourceType[];
  Resources?: string[];
  SelectionName: string;
  NotResources?: string[];
  Conditions?: {
    StringEquals?: ConditionParameter[];
    StringNotEquals?: ConditionParameter[];
    StringLike?: ConditionParameter[];
    StringNotLike?: ConditionParameter[];
  };
}
export interface ConditionResourceType {
  ConditionKey: string;
  ConditionValue: string;
  ConditionType: string;
}
export interface ConditionParameter {
  ConditionKey?: string;
  ConditionValue?: string;
}
