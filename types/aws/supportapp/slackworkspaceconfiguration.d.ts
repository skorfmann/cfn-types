/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An AWS Support App resource that creates, updates, lists, and deletes Slack workspace configurations.
 */
export interface AwsSupportappSlackworkspaceconfiguration {
  /**
   * The team ID in Slack, which uniquely identifies a workspace.
   */
  TeamId: string;
  /**
   * An identifier used to update an existing Slack workspace configuration in AWS CloudFormation.
   */
  VersionId?: string;
}
