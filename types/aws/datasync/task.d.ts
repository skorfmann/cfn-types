/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The Amazon Resource Names (ARNs) of the source ENIs (Elastic Network Interfaces) that were created for your subnet.
 *
 * @maxItems 128
 */
export type SourceNetworkInterfaceArns = string[];
/**
 * The Amazon Resource Names (ARNs) of the destination ENIs (Elastic Network Interfaces) that were created for your subnet.
 *
 * @maxItems 128
 */
export type DestinationNetworkInterfaceArns = string[];

/**
 * Resource schema for AWS::DataSync::Task.
 */
export interface AwsDatasyncTask {
  /**
   * @minItems 0
   * @maxItems 1
   */
  Excludes?: [] | [FilterRule];
  /**
   * @minItems 0
   * @maxItems 1
   */
  Includes?: [] | [FilterRule];
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
  /**
   * The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.
   */
  CloudWatchLogGroupArn?: string;
  /**
   * The ARN of an AWS storage resource's location.
   */
  DestinationLocationArn: string;
  /**
   * The name of a task. This value is a text reference that is used to identify the task in the console.
   */
  Name?: string;
  Options?: Options;
  Schedule?: TaskSchedule;
  /**
   * The ARN of the source location for the task.
   */
  SourceLocationArn: string;
  /**
   * The ARN of the task.
   */
  TaskArn?: string;
  /**
   * The status of the task that was described.
   */
  Status?: "AVAILABLE" | "CREATING" | "QUEUED" | "RUNNING" | "UNAVAILABLE";
  SourceNetworkInterfaceArns?: SourceNetworkInterfaceArns;
  DestinationNetworkInterfaceArns?: DestinationNetworkInterfaceArns;
}
/**
 * Specifies which files folders and objects to include or exclude when transferring files from source to destination.
 */
export interface FilterRule {
  /**
   * The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.
   */
  FilterType?: "SIMPLE_PATTERN";
  /**
   * A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".
   */
  Value?: string;
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key for an AWS resource tag.
   */
  Key: string;
  /**
   * The value for an AWS resource tag.
   */
  Value: string;
}
/**
 * Represents the options that are available to control the behavior of a StartTaskExecution operation.
 */
export interface Options {
  /**
   * A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to).
   */
  Atime?: "NONE" | "BEST_EFFORT";
  /**
   * A value that limits the bandwidth used by AWS DataSync.
   */
  BytesPerSecond?: number;
  /**
   * The group ID (GID) of the file's owners.
   */
  Gid?: "NONE" | "INT_VALUE" | "NAME" | "BOTH";
  /**
   * A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide.
   */
  LogLevel?: "OFF" | "BASIC" | "TRANSFER";
  /**
   * A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase.
   */
  Mtime?: "NONE" | "PRESERVE";
  /**
   * A value that determines whether files at the destination should be overwritten or preserved when copying files.
   */
  OverwriteMode?: "ALWAYS" | "NEVER";
  /**
   * A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file.
   */
  PosixPermissions?: "NONE" | "PRESERVE";
  /**
   * A value that specifies whether files in the destination that don't exist in the source file system should be preserved.
   */
  PreserveDeletedFiles?: "PRESERVE" | "REMOVE";
  /**
   * A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination.
   */
  PreserveDevices?: "NONE" | "PRESERVE";
  /**
   * A value that determines which components of the SMB security descriptor are copied during transfer.
   */
  SecurityDescriptorCopyFlags?: "NONE" | "OWNER_DACL" | "OWNER_DACL_SACL";
  /**
   * A value that determines whether tasks should be queued before executing the tasks.
   */
  TaskQueueing?: "ENABLED" | "DISABLED";
  /**
   * A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location.
   */
  TransferMode?: "CHANGED" | "ALL";
  /**
   * The user ID (UID) of the file's owner.
   */
  Uid?: "NONE" | "INT_VALUE" | "NAME" | "BOTH";
  /**
   * A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred.
   */
  VerifyMode?: "POINT_IN_TIME_CONSISTENT" | "ONLY_FILES_TRANSFERRED" | "NONE";
  /**
   * A value that determines whether object tags should be read from the source object store and written to the destination object store.
   */
  ObjectTags?: "PRESERVE" | "NONE";
}
/**
 * Specifies the schedule you want your task to use for repeated executions.
 */
export interface TaskSchedule {
  /**
   * A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location
   */
  ScheduleExpression: string;
}
