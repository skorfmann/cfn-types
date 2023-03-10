/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ResourceArn = string;

/**
 * Resource Type definition for AWS::Batch::JobQueue
 */
export interface AwsBatchJobqueue {
  JobQueueName?: string;
  JobQueueArn?: ResourceArn;
  ComputeEnvironmentOrder: ComputeEnvironmentOrder[];
  Priority: number;
  State?: "DISABLED" | "ENABLED";
  SchedulingPolicyArn?: ResourceArn;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string;
  };
}
export interface ComputeEnvironmentOrder {
  ComputeEnvironment: string;
  Order: number;
}
