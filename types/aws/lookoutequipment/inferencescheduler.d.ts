/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Bucket = string;
export type Prefix = string;

/**
 * Resource schema for LookoutEquipment InferenceScheduler.
 */
export interface AwsLookoutequipmentInferencescheduler {
  /**
   * A period of time (in minutes) by which inference on the data is delayed after the data starts.
   */
  DataDelayOffsetInMinutes?: number;
  /**
   * Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.
   */
  DataInputConfiguration: {
    /**
     * Indicates the difference between your time zone and Greenwich Mean Time (GMT).
     */
    InputTimeZoneOffset?: string;
    InferenceInputNameConfiguration?: InputNameConfiguration;
    S3InputConfiguration: S3InputConfiguration;
  };
  /**
   * Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.
   */
  DataOutputConfiguration: {
    /**
     * The ID number for the AWS KMS key used to encrypt the inference output.
     */
    KmsKeyId?: string;
    S3OutputConfiguration: S3OutputConfiguration;
  };
  /**
   * How often data is uploaded to the source S3 bucket for the input data.
   */
  DataUploadFrequency: "PT5M" | "PT10M" | "PT15M" | "PT30M" | "PT1H";
  /**
   * The name of the inference scheduler being created.
   */
  InferenceSchedulerName?: string;
  /**
   * The name of the previously trained ML model being used to create the inference scheduler.
   */
  ModelName: string;
  /**
   * The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.
   */
  RoleArn: string;
  /**
   * Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment.
   */
  ServerSideKmsKeyId?: string;
  /**
   * Any tags associated with the inference scheduler.
   *
   * @maxItems 200
   */
  Tags?: Tag[];
  /**
   * The Amazon Resource Name (ARN) of the inference scheduler being created.
   */
  InferenceSchedulerArn?: string;
}
/**
 * Specifies configuration information for the input data for the inference, including timestamp format and delimiter.
 */
export interface InputNameConfiguration {
  /**
   * Indicates the delimiter character used between items in the data.
   */
  ComponentTimestampDelimiter?: string;
  /**
   * The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-).
   */
  TimestampFormat?: string;
}
/**
 * Specifies configuration information for the input data for the inference, including input data S3 location.
 */
export interface S3InputConfiguration {
  Bucket: Bucket;
  Prefix?: Prefix;
}
/**
 * Specifies configuration information for the output results from the inference, including output S3 location.
 */
export interface S3OutputConfiguration {
  Bucket: Bucket;
  Prefix?: Prefix;
}
/**
 * A tag is a key-value pair that can be added to a resource as metadata.
 */
export interface Tag {
  /**
   * The key for the specified tag.
   */
  Key: string;
  /**
   * The value for the specified tag.
   */
  Value: string;
}
