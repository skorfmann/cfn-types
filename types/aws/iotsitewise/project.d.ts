/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The ID of the asset
 */
export type AssetId = string;

/**
 * Resource schema for AWS::IoTSiteWise::Project
 */
export interface AwsIotsitewiseProject {
  /**
   * The ID of the portal in which to create the project.
   */
  PortalId: string;
  /**
   * The ID of the project.
   */
  ProjectId?: string;
  /**
   * A friendly name for the project.
   */
  ProjectName: string;
  /**
   * A description for the project.
   */
  ProjectDescription?: string;
  /**
   * The ARN of the project.
   */
  ProjectArn?: string;
  /**
   * The IDs of the assets to be associated to the project.
   */
  AssetIds?: AssetId[];
  /**
   * A list of key-value pairs that contain metadata for the project.
   */
  Tags?: Tag[];
}
/**
 * To add or update tag, provide both key and value. To delete tag, provide only tag key to be deleted
 */
export interface Tag {
  Key: string;
  Value: string;
}
