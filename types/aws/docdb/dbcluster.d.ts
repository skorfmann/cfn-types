/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::DocDB::DBCluster
 */
export interface AwsDocdbDbcluster {
  StorageEncrypted?: boolean;
  RestoreToTime?: string;
  SnapshotIdentifier?: string;
  Port?: number;
  DBClusterIdentifier?: string;
  PreferredBackupWindow?: string;
  ClusterResourceId?: string;
  Endpoint?: string;
  VpcSecurityGroupIds?: string[];
  CopyTagsToSnapshot?: boolean;
  RestoreType?: string;
  Tags?: Tag[];
  EngineVersion?: string;
  KmsKeyId?: string;
  AvailabilityZones?: string[];
  PreferredMaintenanceWindow?: string;
  DBSubnetGroupName?: string;
  DeletionProtection?: boolean;
  UseLatestRestorableTime?: boolean;
  MasterUserPassword?: string;
  SourceDBClusterIdentifier?: string;
  MasterUsername?: string;
  ReadEndpoint?: string;
  DBClusterParameterGroupName?: string;
  BackupRetentionPeriod?: number;
  Id?: string;
  EnableCloudwatchLogsExports?: string[];
}
export interface Tag {
  Value: string;
  Key: string;
}
