/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::RDS::GlobalCluster
 */
export type AwsRdsGlobalcluster = {
  /**
   * The name of the database engine to be used for this DB cluster. Valid Values: aurora (for MySQL 5.6-compatible Aurora), aurora-mysql (for MySQL 5.7-compatible Aurora).
   * If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.
   */
  Engine?: "aurora" | "aurora-mysql" | "aurora-postgresql";
  /**
   * The version number of the database engine to use. If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.
   */
  EngineVersion?: string;
  /**
   * The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.
   */
  DeletionProtection?: boolean;
  /**
   * The cluster identifier of the new global database cluster. This parameter is stored as a lowercase string.
   */
  GlobalClusterIdentifier?: string;
  /**
   * The Amazon Resource Name (ARN) to use as the primary cluster of the global database. This parameter is optional. This parameter is stored as a lowercase string.
   */
  SourceDBClusterIdentifier?: {
    [k: string]: unknown;
  } & string;
  /**
   *  The storage encryption setting for the new global database cluster.
   * If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.
   */
  StorageEncrypted?: boolean;
} & {
  [k: string]: unknown;
};
