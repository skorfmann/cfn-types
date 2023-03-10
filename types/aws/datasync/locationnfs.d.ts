/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::DataSync::LocationNFS
 */
export interface AwsDatasyncLocationnfs {
  MountOptions?: MountOptions;
  OnPremConfig: OnPremConfig;
  /**
   * The name of the NFS server. This value is the IP address or DNS name of the NFS server.
   */
  ServerHostname?: string;
  /**
   * The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination.
   */
  Subdirectory?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
  /**
   * The Amazon Resource Name (ARN) of the NFS location.
   */
  LocationArn?: string;
  /**
   * The URL of the NFS location that was described.
   */
  LocationUri?: string;
}
/**
 * The NFS mount options that DataSync can use to mount your NFS share.
 */
export interface MountOptions {
  /**
   * The specific NFS version that you want DataSync to use to mount your NFS share.
   */
  Version?: "AUTOMATIC" | "NFS3" | "NFS4_0" | "NFS4_1";
}
/**
 * Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect an NFS server.
 */
export interface OnPremConfig {
  /**
   * ARN(s) of the agent(s) to use for an NFS location.
   *
   * @minItems 1
   * @maxItems 4
   */
  AgentArns: [string] | [string, string] | [string, string, string] | [string, string, string, string];
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
