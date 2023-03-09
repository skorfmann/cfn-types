/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The possible types for the collection
 */
export type CollectionType = "SEARCH" | "TIMESERIES";

/**
 * Amazon OpenSearchServerless collection resource
 */
export interface AwsOpensearchserverlessCollection {
  /**
   * The description of the collection
   */
  Description?: string;
  /**
   * The identifier of the collection
   */
  Id?: string;
  /**
   * The name of the collection.
   *
   * The name must meet the following criteria:
   * Unique to your account and AWS Region
   * Starts with a lowercase letter
   * Contains only lowercase letters a-z, the numbers 0-9 and the hyphen (-)
   * Contains between 3 and 32 characters
   *
   */
  Name: string;
  /**
   * List of tags to be added to the resource
   *
   * @minItems 0
   * @maxItems 50
   */
  Tags?: Tag[];
  /**
   * The Amazon Resource Name (ARN) of the collection.
   */
  Arn?: string;
  /**
   * The endpoint for the collection.
   */
  CollectionEndpoint?: string;
  /**
   * The OpenSearch Dashboards endpoint for the collection.
   */
  DashboardEndpoint?: string;
  Type?: CollectionType;
}
/**
 * A key-value pair metadata associated with resource
 */
export interface Tag {
  /**
   * The key in the key-value pair
   */
  Key: string;
  /**
   * The value in the key-value pair
   */
  Value: string;
}
