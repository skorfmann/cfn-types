/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::SES::DedicatedIpPool
 */
export interface AwsSesDedicatedippool {
  /**
   * The name of the dedicated IP pool.
   */
  PoolName?: string;
  /**
   * Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD.
   */
  ScalingMode?: string;
}