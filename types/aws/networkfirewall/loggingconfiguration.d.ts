/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A resource ARN.
 */
export type ResourceArn = string;

/**
 * Resource type definition for AWS::NetworkFirewall::LoggingConfiguration
 */
export interface AwsNetworkfirewallLoggingconfiguration {
  FirewallName?: string;
  FirewallArn: ResourceArn;
  LoggingConfiguration: LoggingConfiguration;
}
export interface LoggingConfiguration {
  /**
   * @minItems 1
   */
  LogDestinationConfigs: [LogDestinationConfig, ...LogDestinationConfig[]];
}
export interface LogDestinationConfig {
  LogType: "ALERT" | "FLOW";
  LogDestinationType: "S3" | "CloudWatchLogs" | "KinesisDataFirehose";
  /**
   * A key-value pair to configure the logDestinations.
   */
  LogDestination: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[0-9A-Za-z.\-_@\/]+$".
     */
    [k: string]: string;
  };
}
