/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Arn = string;

/**
 * Resource schema for AWS::QLDB::Stream.
 */
export interface AwsQldbStream {
  LedgerName: string;
  StreamName: string;
  RoleArn: Arn;
  InclusiveStartTime: string;
  ExclusiveEndTime?: string;
  KinesisConfiguration: KinesisConfiguration;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
  Arn?: Arn;
  Id?: string;
}
export interface KinesisConfiguration {
  StreamArn?: Arn1;
  AggregationEnabled?: boolean;
}
export interface Arn1 {
  [k: string]: unknown;
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}
