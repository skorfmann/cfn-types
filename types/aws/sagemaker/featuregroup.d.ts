/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type KmsKeyId = string;
/**
 * Format for the offline store feature group. Iceberg is the optimal format for feature groups shared between offline and online stores.
 */
export type TableFormat = "Iceberg" | "Glue";

/**
 * Resource Type definition for AWS::SageMaker::FeatureGroup
 */
export interface AwsSagemakerFeaturegroup {
  /**
   * The Name of the FeatureGroup.
   */
  FeatureGroupName: string;
  /**
   * The Record Identifier Feature Name.
   */
  RecordIdentifierFeatureName: string;
  /**
   * The Event Time Feature Name.
   */
  EventTimeFeatureName: string;
  /**
   * An Array of Feature Definition
   *
   * @minItems 1
   * @maxItems 2500
   */
  FeatureDefinitions: [FeatureDefinition, ...FeatureDefinition[]];
  OnlineStoreConfig?: {
    SecurityConfig?: OnlineStoreSecurityConfig;
    EnableOnlineStore?: boolean;
  };
  OfflineStoreConfig?: {
    S3StorageConfig: S3StorageConfig;
    DisableGlueTableCreation?: boolean;
    DataCatalogConfig?: DataCatalogConfig;
    TableFormat?: TableFormat;
  };
  /**
   * Role Arn
   */
  RoleArn?: string;
  /**
   * Description about the FeatureGroup.
   */
  Description?: string;
  /**
   * An array of key-value pair to apply to this resource.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
}
export interface FeatureDefinition {
  FeatureName: string;
  FeatureType: "Integral" | "Fractional" | "String";
}
export interface OnlineStoreSecurityConfig {
  KmsKeyId?: KmsKeyId;
}
export interface S3StorageConfig {
  S3Uri: string;
  KmsKeyId?: KmsKeyId;
}
export interface DataCatalogConfig {
  TableName: string;
  Catalog: string;
  Database: string;
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  Value: string;
  Key: string;
}