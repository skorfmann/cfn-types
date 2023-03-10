/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::Route53::CidrCollection.
 */
export interface AwsRoute53Cidrcollection {
  /**
   * UUID of the CIDR collection.
   */
  Id?: string;
  /**
   * A unique name for the CIDR collection.
   */
  Name: string;
  /**
   * The Amazon resource name (ARN) to uniquely identify the AWS resource.
   */
  Arn?: string;
  /**
   * A complex type that contains information about the list of CIDR locations.
   */
  Locations?: Location[];
}
export interface Location {
  /**
   * The name of the location that is associated with the CIDR collection.
   */
  LocationName: string;
  /**
   * A list of CIDR blocks.
   */
  CidrList: string[];
}
