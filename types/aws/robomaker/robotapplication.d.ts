/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Arn = string;

/**
 * This schema is for testing purpose only.
 */
export interface AwsRobomakerRobotapplication {
  /**
   * The name of the robot application.
   */
  Name?: string;
  /**
   * The sources of the robot application.
   */
  Sources?: SourceConfig[];
  /**
   * The URI of the Docker image for the robot application.
   */
  Environment?: string;
  RobotSoftwareSuite: RobotSoftwareSuite;
  /**
   * The revision ID of robot application.
   */
  CurrentRevisionId?: string;
  Arn?: Arn;
  Tags?: Tags;
}
export interface SourceConfig {
  /**
   * The Arn of the S3Bucket that stores the robot application source.
   */
  S3Bucket: string;
  /**
   * The s3 key of robot application source.
   */
  S3Key: string;
  /**
   * The architecture of robot application.
   */
  Architecture: "X86_64" | "ARM64" | "ARMHF";
}
/**
 * The robot software suite used by the robot application.
 */
export interface RobotSoftwareSuite {
  /**
   * The name of robot software suite.
   */
  Name: "ROS" | "ROS2" | "General";
  /**
   * The version of robot software suite.
   */
  Version?: "Kinetic" | "Melodic" | "Dashing";
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tags {
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   *
   * This interface was referenced by `Tags`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z0-9-]{1,128}$".
   */
  [k: string]: string;
}
