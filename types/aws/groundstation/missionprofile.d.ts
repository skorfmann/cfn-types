/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * AWS Ground Station Mission Profile resource type for CloudFormation.
 */
export interface AwsGroundstationMissionprofile {
  /**
   * A name used to identify a mission profile.
   */
  Name: string;
  /**
   * Pre-pass time needed before the contact.
   */
  ContactPrePassDurationSeconds?: number;
  /**
   * Post-pass time needed after the contact.
   */
  ContactPostPassDurationSeconds?: number;
  /**
   * Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.
   */
  MinimumViableContactDurationSeconds: number;
  /**
   * @minItems 1
   */
  DataflowEdges: [DataflowEdge, ...DataflowEdge[]];
  TrackingConfigArn: string;
  Tags?: Tag[];
  Id?: string;
  Arn?: string;
  Region?: string;
}
export interface DataflowEdge {
  Source?: string;
  Destination?: string;
}
export interface Tag {
  Key: string;
  Value: string;
}