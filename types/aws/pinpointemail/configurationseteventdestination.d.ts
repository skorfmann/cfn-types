/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::PinpointEmail::ConfigurationSetEventDestination
 */
export interface AwsPinpointemailConfigurationseteventdestination {
  Id?: string;
  EventDestinationName: string;
  ConfigurationSetName: string;
  EventDestination?: EventDestination;
}
export interface EventDestination {
  SnsDestination?: SnsDestination;
  CloudWatchDestination?: CloudWatchDestination;
  Enabled?: boolean;
  MatchingEventTypes: string[];
  PinpointDestination?: PinpointDestination;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
}
export interface SnsDestination {
  TopicArn: string;
}
export interface CloudWatchDestination {
  DimensionConfigurations?: DimensionConfiguration[];
}
export interface DimensionConfiguration {
  DimensionValueSource: string;
  DefaultDimensionValue: string;
  DimensionName: string;
}
export interface PinpointDestination {
  ApplicationArn?: string;
}
export interface KinesisFirehoseDestination {
  DeliveryStreamArn: string;
  IamRoleArn: string;
}