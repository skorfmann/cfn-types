/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
 */
export type Iso8601UTC = string;
export type IntendedUse = "SingleUse" | "Storage";
export type PricingPlan = "RequestBasedUsage";

/**
 * Definition of AWS::Location::PlaceIndex Resource Type
 */
export interface AwsLocationPlaceindex {
  CreateTime?: Iso8601UTC;
  DataSource: string;
  DataSourceConfiguration?: DataSourceConfiguration;
  Description?: string;
  IndexArn?: string;
  Arn?: string;
  IndexName: string;
  PricingPlan?: PricingPlan;
  UpdateTime?: Iso8601UTC;
}
export interface DataSourceConfiguration {
  IntendedUse?: IntendedUse;
}
