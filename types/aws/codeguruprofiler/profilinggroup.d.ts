/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type IamArn = string;
/**
 * Unique identifier for each Channel in the notification configuration of a Profiling Group
 */
export type ChannelId = string;
/**
 * Unique arn of the resource to be used for notifications. We support a valid SNS topic arn as a channel uri.
 */
export type ChannelUri = string;

/**
 * This resource schema represents the Profiling Group resource in the Amazon CodeGuru Profiler service.
 */
export interface AwsCodeguruprofilerProfilinggroup {
  /**
   * The name of the profiling group.
   */
  ProfilingGroupName: string;
  /**
   * The compute platform of the profiling group.
   */
  ComputePlatform?: "Default" | "AWSLambda";
  /**
   * The agent permissions attached to this profiling group.
   */
  AgentPermissions?: {
    /**
     * The principals for the agent permissions.
     */
    Principals: IamArn[];
  };
  /**
   * Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency
   */
  AnomalyDetectionNotificationConfiguration?: Channel[];
  /**
   * The Amazon Resource Name (ARN) of the specified profiling group.
   */
  Arn?: string;
  /**
   * The tags associated with a profiling group.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
}
/**
 * Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.
 */
export interface Channel {
  channelId?: ChannelId;
  channelUri: ChannelUri;
  [k: string]: unknown;
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   */
  Value: string;
}