/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ElastiCache::ParameterGroup
 */
export interface AwsElasticacheParametergroup {
  Description: string;
  Id?: string;
  Properties?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "[a-zA-Z0-9]+".
     */
    [k: string]: string;
  };
  Tags?: Tag[];
  CacheParameterGroupFamily: string;
}
export interface Tag {
  Value: string;
  Key: string;
}
