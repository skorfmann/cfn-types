/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The AWS::Timestream::Table resource creates a Timestream Table.
 */
export interface AwsTimestreamTable {
  Arn?: string;
  /**
   * The table name exposed as a read-only attribute.
   */
  Name?: string;
  /**
   * The name for the database which the table to be created belongs to.
   */
  DatabaseName: string;
  /**
   * The name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name.
   */
  TableName?: string;
  /**
   * The retention duration of the memory store and the magnetic store.
   */
  RetentionProperties?: {
    /**
     * The duration for which data must be stored in the memory store.
     */
    MemoryStoreRetentionPeriodInHours?: string;
    /**
     * The duration for which data must be stored in the magnetic store.
     */
    MagneticStoreRetentionPeriodInDays?: string;
  };
  /**
   * The properties that determine whether magnetic store writes are enabled.
   */
  MagneticStoreWriteProperties?: {
    /**
     * Boolean flag indicating whether magnetic store writes are enabled.
     */
    EnableMagneticStoreWrites: boolean;
    /**
     * Location to store information about records that were asynchronously rejected during magnetic store writes.
     */
    MagneticStoreRejectedDataLocation?: {
      /**
       * S3 configuration for location to store rejections from magnetic store writes
       */
      S3Configuration?: {
        /**
         * The bucket name used to store the data.
         */
        BucketName: string;
        /**
         * String used to prefix all data in the bucket.
         */
        ObjectKeyPrefix?: string;
        /**
         * Either SSE_KMS or SSE_S3.
         */
        EncryptionOption: string;
        /**
         * Must be provided if SSE_KMS is specified as the encryption option
         */
        KmsKeyId?: string;
      };
    };
  };
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * @maxItems 200
   */
  Tags?: Tag[];
}
/**
 * You can use the Resource Tags property to apply tags to resources, which can help you identify and categorize those resources.
 */
export interface Tag {
  Key?: string;
  Value?: string;
}
