/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::IoTTwinMaker::SyncJob
 */
export interface AwsIottwinmakerSyncjob {
  /**
   * The ID of the workspace.
   */
  WorkspaceId: string;
  /**
   * The source of the SyncJob.
   */
  SyncSource: string;
  /**
   * The IAM Role that execute SyncJob.
   */
  SyncRole: string;
  /**
   * The date and time when the sync job was created.
   */
  CreationDateTime?: string;
  /**
   * The date and time when the sync job was updated.
   */
  UpdateDateTime?: string;
  /**
   * The ARN of the SyncJob.
   */
  Arn?: string;
  /**
   * The state of SyncJob.
   */
  State?: string;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$".
     */
    [k: string]: string;
  };
}
