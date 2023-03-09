/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Glue::MLTransform
 */
export interface AwsGlueMltransform {
  MaxRetries?: number;
  Description?: string;
  TransformEncryption?: TransformEncryption;
  Timeout?: number;
  Name?: string;
  Role: string;
  WorkerType?: string;
  GlueVersion?: string;
  TransformParameters: TransformParameters;
  Id?: string;
  InputRecordTables: InputRecordTables;
  NumberOfWorkers?: number;
  Tags?: {
    [k: string]: unknown;
  };
  MaxCapacity?: number;
}
export interface TransformEncryption {
  TaskRunSecurityConfigurationName?: string;
  MLUserDataEncryption?: MLUserDataEncryption;
}
export interface MLUserDataEncryption {
  KmsKeyId?: string;
  MLUserDataEncryptionMode: string;
}
export interface TransformParameters {
  TransformType: string;
  FindMatchesParameters?: FindMatchesParameters;
}
export interface FindMatchesParameters {
  PrecisionRecallTradeoff?: number;
  EnforceProvidedLabels?: boolean;
  PrimaryKeyColumnName: string;
  AccuracyCostTradeoff?: number;
}
export interface InputRecordTables {
  GlueTables?: GlueTables[];
}
export interface GlueTables {
  ConnectionName?: string;
  DatabaseName: string;
  TableName: string;
  CatalogId?: string;
}
