/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for StateMachine
 */
export interface AwsStepfunctionsStatemachine {
  Arn?: string;
  Name?: string;
  DefinitionString?: string;
  RoleArn: string;
  StateMachineName?: string;
  StateMachineType?: "STANDARD" | "EXPRESS";
  LoggingConfiguration?: LoggingConfiguration;
  TracingConfiguration?: TracingConfiguration;
  DefinitionS3Location?: S3Location;
  DefinitionSubstitutions?: DefinitionSubstitutions;
  Definition?: Definition;
  Tags?: TagsEntry[];
}
export interface LoggingConfiguration {
  Level?: "ALL" | "ERROR" | "FATAL" | "OFF";
  IncludeExecutionData?: boolean;
  /**
   * @minItems 1
   */
  Destinations?: [LogDestination, ...LogDestination[]];
}
export interface LogDestination {
  CloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
}
export interface CloudWatchLogsLogGroup {
  LogGroupArn?: string;
}
export interface TracingConfiguration {
  Enabled?: boolean;
}
export interface S3Location {
  Bucket: string;
  Key: string;
  Version?: string;
}
export interface DefinitionSubstitutions {
  /**
   * This interface was referenced by `DefinitionSubstitutions`'s JSON-Schema definition
   * via the `patternProperty` ".*".
   */
  [k: string]: string | number | boolean;
}
export interface Definition {
  [k: string]: unknown;
}
export interface TagsEntry {
  Key: string;
  Value: string;
}
