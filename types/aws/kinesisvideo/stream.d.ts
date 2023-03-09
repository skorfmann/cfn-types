/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type Definition for AWS::KinesisVideo::Stream
 */
export interface AwsKinesisvideoStream {
  /**
   * The Amazon Resource Name (ARN) of the Kinesis Video stream.
   */
  Arn?: string;
  /**
   * The name of the Kinesis Video stream.
   */
  Name?: string;
  /**
   * The number of hours till which Kinesis Video will retain the data in the stream
   */
  DataRetentionInHours?: number;
  /**
   * The name of the device that is writing to the stream.
   */
  DeviceName?: string;
  /**
   * AWS KMS key ID that Kinesis Video Streams uses to encrypt stream data.
   */
  KmsKeyId?: string;
  /**
   * The media type of the stream. Consumers of the stream can use this information when processing the stream.
   */
  MediaType?: string;
  /**
   * An array of key-value pairs associated with the Kinesis Video Stream.
   *
   * @minItems 1
   * @maxItems 50
   */
  Tags?: [Tag, ...Tag[]];
}
/**
 * A key-value pair to associated with the Kinesis Video Stream.
 */
export interface Tag {
  /**
   * The key name of the tag. Specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. Specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}