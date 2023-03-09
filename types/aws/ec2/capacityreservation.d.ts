/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::EC2::CapacityReservation
 */
export interface AwsEc2Capacityreservation {
  Tenancy?: string;
  EndDateType?: string;
  TagSpecifications?: TagSpecification[];
  AvailabilityZone: string;
  TotalInstanceCount?: number;
  EndDate?: string;
  EbsOptimized?: boolean;
  OutPostArn?: string;
  InstanceCount: number;
  PlacementGroupArn?: string;
  AvailableInstanceCount?: number;
  InstancePlatform: string;
  Id?: string;
  InstanceType: string;
  EphemeralStorage?: boolean;
  InstanceMatchCriteria?: string;
}
export interface TagSpecification {
  ResourceType?: string;
  Tags?: Tag[];
}
export interface Tag {
  Value: string;
  Key: string;
}