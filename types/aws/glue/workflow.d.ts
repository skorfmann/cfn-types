/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Glue::Workflow
 */
export interface AwsGlueWorkflow {
  Description?: string;
  Id?: string;
  Tags?: {
    [k: string]: unknown;
  };
  DefaultRunProperties?: {
    [k: string]: unknown;
  };
  Name?: string;
  MaxConcurrentRuns?: number;
}
