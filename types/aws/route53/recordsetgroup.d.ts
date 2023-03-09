/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Route53::RecordSetGroup
 */
export interface AwsRoute53Recordsetgroup {
  Comment?: string;
  Id?: string;
  HostedZoneName?: string;
  RecordSets?: RecordSet[];
  HostedZoneId?: string;
}
export interface RecordSet {
  HealthCheckId?: string;
  AliasTarget?: AliasTarget;
  HostedZoneName?: string;
  ResourceRecords?: string[];
  HostedZoneId?: string;
  SetIdentifier?: string;
  TTL?: string;
  Weight?: number;
  Name: string;
  Type: string;
  CidrRoutingConfig?: CidrRoutingConfig;
  Failover?: string;
  Region?: string;
  GeoLocation?: GeoLocation;
  MultiValueAnswer?: boolean;
}
export interface AliasTarget {
  DNSName: string;
  HostedZoneId: string;
  EvaluateTargetHealth?: boolean;
}
export interface CidrRoutingConfig {
  CollectionId: string;
  LocationName: string;
}
export interface GeoLocation {
  ContinentCode?: string;
  CountryCode?: string;
  SubdivisionCode?: string;
}