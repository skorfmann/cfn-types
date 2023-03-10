/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type Definition for AWS::S3Outposts::BucketPolicy
 */
export interface AwsS3OutpostsBucketpolicy {
  /**
   * The Amazon Resource Name (ARN) of the specified bucket.
   */
  Bucket: string;
  /**
   * A policy document containing permissions to add to the specified bucket.
   */
  PolicyDocument: {
    [k: string]: unknown;
  };
}
