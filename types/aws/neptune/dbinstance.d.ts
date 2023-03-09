/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Neptune::DBInstance
 */
export interface AwsNeptuneDbinstance {
  Id?: string;
  Endpoint?: string;
  Port?: string;
  DBParameterGroupName?: string;
  DBInstanceClass: string;
  AllowMajorVersionUpgrade?: boolean;
  DBClusterIdentifier?: string;
  AvailabilityZone?: string;
  PreferredMaintenanceWindow?: string;
  AutoMinorVersionUpgrade?: boolean;
  DBSubnetGroupName?: string;
  DBInstanceIdentifier?: string;
  DBSnapshotIdentifier?: string;
  Tags?: Tag[];
}
export interface Tag {
  Key: string;
  Value: string;
}