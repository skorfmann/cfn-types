/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The ID that identifies the Amazon S3 Storage Lens configuration.
 */
export type Id = string;
/**
 * The Amazon Resource Name (ARN) of the specified resource.
 */
export type Arn = string;
/**
 * Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).
 */
export type Encryption =
  | {
      /**
       * S3 default server-side encryption.
       */
      SSES3: {};
    }
  | {
      SSEKMS: SSEKMS;
    };

/**
 * The AWS::S3::StorageLens resource is an Amazon S3 resource type that you can use to create Storage Lens configurations.
 */
export interface AwsS3Storagelens {
  StorageLensConfiguration: StorageLensConfiguration;
  /**
   * A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
}
/**
 * Specifies the details of Amazon S3 Storage Lens configuration.
 */
export interface StorageLensConfiguration {
  Id: Id;
  Include?: BucketsAndRegions;
  Exclude?: BucketsAndRegions;
  AwsOrg?: AwsOrg;
  AccountLevel: AccountLevel;
  DataExport?: DataExport;
  /**
   * Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled.
   */
  IsEnabled: boolean;
  /**
   * The ARN for the Amazon S3 Storage Lens configuration.
   */
  StorageLensArn?: string;
}
/**
 * S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.
 */
export interface BucketsAndRegions {
  Buckets?: Arn[];
  Regions?: string[];
}
/**
 * The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration.
 */
export interface AwsOrg {
  Arn: Arn;
}
/**
 * Account-level metrics configurations.
 */
export interface AccountLevel {
  ActivityMetrics?: ActivityMetrics;
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
  BucketLevel: BucketLevel;
}
/**
 * Enables activity metrics.
 */
export interface ActivityMetrics {
  /**
   * Specifies whether activity metrics are enabled or disabled.
   */
  IsEnabled?: boolean;
}
/**
 * Enables advanced cost optimization metrics.
 */
export interface AdvancedCostOptimizationMetrics {
  /**
   * Specifies whether advanced cost optimization metrics are enabled or disabled.
   */
  IsEnabled?: boolean;
}
/**
 * Enables advanced data protection metrics.
 */
export interface AdvancedDataProtectionMetrics {
  /**
   * Specifies whether advanced data protection metrics are enabled or disabled.
   */
  IsEnabled?: boolean;
}
/**
 * Enables detailed status codes metrics.
 */
export interface DetailedStatusCodesMetrics {
  /**
   * Specifies whether detailed status codes metrics are enabled or disabled.
   */
  IsEnabled?: boolean;
}
/**
 * Bucket-level metrics configurations.
 */
export interface BucketLevel {
  ActivityMetrics?: ActivityMetrics;
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
  PrefixLevel?: PrefixLevel;
}
/**
 * Prefix-level metrics configurations.
 */
export interface PrefixLevel {
  StorageMetrics: PrefixLevelStorageMetrics;
}
export interface PrefixLevelStorageMetrics {
  /**
   * Specifies whether prefix-level storage metrics are enabled or disabled.
   */
  IsEnabled?: boolean;
  SelectionCriteria?: SelectionCriteria;
}
/**
 * Selection criteria for prefix-level metrics.
 */
export interface SelectionCriteria {
  /**
   * Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze.
   */
  MaxDepth?: number;
  /**
   * Delimiter to divide S3 key into hierarchy of prefixes.
   */
  Delimiter?: string;
  /**
   * The minimum storage bytes threshold for the prefixes to be included in the analysis.
   */
  MinStorageBytesPercentage?: number;
}
/**
 * Specifies how Amazon S3 Storage Lens metrics should be exported.
 */
export interface DataExport {
  S3BucketDestination?: S3BucketDestination;
  CloudWatchMetrics?: CloudWatchMetrics;
}
/**
 * S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.
 */
export interface S3BucketDestination {
  /**
   * The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.
   */
  OutputSchemaVersion: "V_1";
  /**
   * Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.
   */
  Format: "CSV" | "Parquet";
  /**
   * The AWS account ID that owns the destination S3 bucket.
   */
  AccountId: string;
  /**
   * The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.
   */
  Arn: string;
  /**
   * The prefix to use for Amazon S3 Storage Lens export.
   */
  Prefix?: string;
  Encryption?: Encryption;
}
/**
 * AWS KMS server-side encryption.
 */
export interface SSEKMS {
  /**
   * The ARN of the KMS key to use for encryption.
   */
  KeyId: string;
}
/**
 * CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export.
 */
export interface CloudWatchMetrics {
  /**
   * Specifies whether CloudWatch metrics are enabled or disabled.
   */
  IsEnabled: boolean;
}
export interface Tag {
  Key: string;
  Value: string;
}
