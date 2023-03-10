/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Capacity mode for the specified table
 */
export type Mode = "PROVISIONED" | "ON_DEMAND";
/**
 * Server-side encryption type
 */
export type EncryptionType = "AWS_OWNED_KMS_KEY" | "CUSTOMER_MANAGED_KMS_KEY";
/**
 * The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN.
 */
export type KmsKeyIdentifier = string;

/**
 * Resource schema for AWS::Cassandra::Table
 */
export interface AwsCassandraTable {
  /**
   * Name for Cassandra table
   */
  TableName?: string;
  /**
   * Indicates whether point in time recovery is enabled (true) or disabled (false) on the table
   */
  PointInTimeRecoveryEnabled?: boolean;
  /**
   * Clustering key columns of the table
   */
  ClusteringKeyColumns?: ClusteringKeyColumn[];
  /**
   * Partition key columns of the table
   *
   * @minItems 1
   */
  PartitionKeyColumns: [Column, ...Column[]];
  BillingMode?: BillingMode;
  /**
   * Default TTL (Time To Live) in seconds, where zero is disabled. If the value is greater than zero, TTL is enabled for the entire table and an expiration timestamp is added to each column.
   */
  DefaultTimeToLive?: number;
  /**
   * Name for Cassandra keyspace
   */
  KeyspaceName: string;
  EncryptionSpecification?: EncryptionSpecification;
  /**
   * Non-key columns of the table
   */
  RegularColumns?: Column[];
  /**
   * An array of key-value pairs to apply to this resource
   *
   * @minItems 0
   * @maxItems 50
   */
  Tags?: Tag[];
}
export interface ClusteringKeyColumn {
  OrderBy?: "ASC" | "DESC";
  Column: Column;
}
export interface Column {
  ColumnName: string;
  ColumnType: string;
}
export interface BillingMode {
  Mode: Mode;
  ProvisionedThroughput?: ProvisionedThroughput;
}
/**
 * Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits
 */
export interface ProvisionedThroughput {
  WriteCapacityUnits: number;
  ReadCapacityUnits: number;
}
/**
 * Represents the settings used to enable server-side encryption
 */
export interface EncryptionSpecification {
  EncryptionType: EncryptionType;
  KmsKeyIdentifier?: KmsKeyIdentifier;
}
/**
 * A key-value pair to apply to the resource
 */
export interface Tag {
  Value: string;
  Key: string;
}
