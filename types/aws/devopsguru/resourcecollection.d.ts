/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Tagged resources for DevOps Guru to monitor
 */
export type TagCollections = TagCollection[];

/**
 * This resource schema represents the ResourceCollection resource in the Amazon DevOps Guru.
 */
export interface AwsDevopsguruResourcecollection {
  ResourceCollectionFilter: ResourceCollectionFilter;
  /**
   * The type of ResourceCollection
   */
  ResourceCollectionType?: "AWS_CLOUD_FORMATION" | "AWS_TAGS";
}
/**
 * Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.
 */
export interface ResourceCollectionFilter {
  CloudFormation?: CloudFormationCollectionFilter;
  Tags?: TagCollections;
}
/**
 * CloudFormation resource for DevOps Guru to monitor
 */
export interface CloudFormationCollectionFilter {
  /**
   * An array of CloudFormation stack names.
   *
   * @minItems 1
   * @maxItems 1000
   */
  StackNames?: [string, ...string[]];
}
/**
 * Tagged resource for DevOps Guru to monitor
 */
export interface TagCollection {
  /**
   * A Tag key for DevOps Guru app boundary.
   */
  AppBoundaryKey?: string;
  /**
   * Tag values of DevOps Guru app boundary.
   *
   * @minItems 1
   * @maxItems 1000
   */
  TagValues?: [string, ...string[]];
}