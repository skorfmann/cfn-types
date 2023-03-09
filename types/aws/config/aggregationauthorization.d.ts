/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Config::AggregationAuthorization
 */
export interface AwsConfigAggregationauthorization {
  /**
   * The 12-digit account ID of the account authorized to aggregate data.
   */
  AuthorizedAccountId: string;
  /**
   * The region authorized to collect aggregated data.
   */
  AuthorizedAwsRegion: string;
  /**
   * The ARN of the AggregationAuthorization.
   */
  AggregationAuthorizationArn?: string;
  /**
   * The tags for the AggregationAuthorization.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
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
