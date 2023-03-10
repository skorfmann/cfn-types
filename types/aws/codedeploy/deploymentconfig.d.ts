/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::CodeDeploy::DeploymentConfig
 */
export interface AwsCodedeployDeploymentconfig {
  /**
   * The destination platform type for the deployment (Lambda, Server, or ECS).
   */
  ComputePlatform?: string;
  /**
   * A name for the deployment configuration. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see Name Type.
   */
  DeploymentConfigName?: string;
  MinimumHealthyHosts?: MinimumHealthyHosts;
  TrafficRoutingConfig?: TrafficRoutingConfig;
}
/**
 * The minimum number of healthy instances that should be available at any time during the deployment. There are two parameters expected in the input: type and value.
 */
export interface MinimumHealthyHosts {
  Value: number;
  Type: string;
}
/**
 * The configuration that specifies how the deployment traffic is routed.
 */
export interface TrafficRoutingConfig {
  Type: string;
  TimeBasedLinear?: TimeBasedLinear;
  TimeBasedCanary?: TimeBasedCanary;
}
export interface TimeBasedLinear {
  LinearInterval: number;
  LinearPercentage: number;
}
export interface TimeBasedCanary {
  CanaryPercentage: number;
  CanaryInterval: number;
}
