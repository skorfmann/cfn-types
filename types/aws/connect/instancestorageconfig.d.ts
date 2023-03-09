/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Specifies the type of storage resource available for the instance
 */
export type InstanceStorageResourceType =
  | "CHAT_TRANSCRIPTS"
  | "CALL_RECORDINGS"
  | "SCHEDULED_REPORTS"
  | "MEDIA_STREAMS"
  | "CONTACT_TRACE_RECORDS"
  | "AGENT_EVENTS";
/**
 * An associationID is automatically generated when a storage config is associated with an instance
 */
export type AssociationId = string;
/**
 * Specifies the storage type to be associated with the instance
 */
export type StorageType = "S3" | "KINESIS_VIDEO_STREAM" | "KINESIS_STREAM" | "KINESIS_FIREHOSE";
/**
 * A name for the S3 Bucket
 */
export type BucketName = string;
/**
 * Prefixes are used to infer logical hierarchy
 */
export type Prefix = string;
/**
 * Specifies default encryption using AWS KMS-Managed Keys
 */
export type EncryptionType = "KMS";
/**
 * Specifies the encryption key id
 */
export type KeyId = string;
/**
 * Number of hours
 */
export type Hours = number;
/**
 * An ARN is a unique AWS resource identifier.
 */
export type KinesisStreamArn = string;
/**
 * An ARN is a unique AWS resource identifier.
 */
export type FirehoseDeliveryStreamArn = string;

/**
 * Resource Type definition for AWS::Connect::InstanceStorageConfig
 */
export interface AwsConnectInstancestorageconfig {
  /**
   * Connect Instance ID with which the storage config will be associated
   */
  InstanceArn: string;
  ResourceType: InstanceStorageResourceType;
  AssociationId?: AssociationId;
  StorageType: StorageType;
  S3Config?: S3Config;
  KinesisVideoStreamConfig?: KinesisVideoStreamConfig;
  KinesisStreamConfig?: KinesisStreamConfig;
  KinesisFirehoseConfig?: KinesisFirehoseConfig;
}
export interface S3Config {
  BucketName: BucketName;
  BucketPrefix: Prefix;
  EncryptionConfig?: EncryptionConfig;
}
export interface EncryptionConfig {
  EncryptionType: EncryptionType;
  KeyId: KeyId;
}
export interface KinesisVideoStreamConfig {
  Prefix: Prefix;
  RetentionPeriodHours: Hours;
  EncryptionConfig?: EncryptionConfig;
}
export interface KinesisStreamConfig {
  StreamArn: KinesisStreamArn;
}
export interface KinesisFirehoseConfig {
  FirehoseArn: FirehoseDeliveryStreamArn;
}