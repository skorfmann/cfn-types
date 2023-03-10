/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Length of time, in seconds, it takes for a new instance to start new game server processes and register with GameLift FleetIQ.
 */
export type EstimatedInstanceWarmup = number;
/**
 * Desired value to use with a game server group target-based scaling policy.
 */
export type TargetValue = number;
/**
 * A set of EC2 instance types to use when creating instances in the group.
 *
 * @minItems 2
 * @maxItems 20
 */
export type InstanceDefinitions =
  | [InstanceDefinition, InstanceDefinition]
  | [InstanceDefinition, InstanceDefinition, InstanceDefinition]
  | [InstanceDefinition, InstanceDefinition, InstanceDefinition, InstanceDefinition]
  | [InstanceDefinition, InstanceDefinition, InstanceDefinition, InstanceDefinition, InstanceDefinition]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ]
  | [
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition,
      InstanceDefinition
    ];
/**
 * An EC2 instance type designation.
 */
export type InstanceType = string;
/**
 * Instance weighting that indicates how much this instance type contributes to the total capacity of a game server group.
 */
export type WeightedCapacity = string;
/**
 * A unique identifier for an existing EC2 launch template.
 */
export type LaunchTemplateId = string;
/**
 * A readable identifier for an existing EC2 launch template.
 */
export type LaunchTemplateName = string;
/**
 * The version of the EC2 launch template to use.
 */
export type Version = string;
/**
 * A list of labels to assign to the new game server group resource.
 *
 * @minItems 0
 * @maxItems 200
 */
export type Tags = Tag[];
/**
 * A list of virtual private cloud (VPC) subnets to use with instances in the game server group.
 *
 * @minItems 1
 * @maxItems 20
 */
export type VpcSubnets =
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string]
  | [string, string, string, string, string, string]
  | [string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string, string, string, string, string]
  | [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  | [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  | [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  | [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  | [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  | [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ];

/**
 * The AWS::GameLift::GameServerGroup resource creates an Amazon GameLift (GameLift) GameServerGroup.
 */
export interface AwsGameliftGameservergroup {
  /**
   * A generated unique ID for the EC2 Auto Scaling group that is associated with this game server group.
   */
  AutoScalingGroupArn?: string;
  AutoScalingPolicy?: AutoScalingPolicy;
  /**
   * The fallback balancing method to use for the game server group when Spot Instances in a Region become unavailable or are not viable for game hosting.
   */
  BalancingStrategy?: "SPOT_ONLY" | "SPOT_PREFERRED" | "ON_DEMAND_ONLY";
  /**
   * The type of delete to perform.
   */
  DeleteOption?: "SAFE_DELETE" | "FORCE_DELETE" | "RETAIN";
  /**
   * A generated unique ID for the game server group.
   */
  GameServerGroupArn?: string;
  /**
   * An identifier for the new game server group.
   */
  GameServerGroupName: string;
  /**
   * A flag that indicates whether instances in the game server group are protected from early termination.
   */
  GameServerProtectionPolicy?: "NO_PROTECTION" | "FULL_PROTECTION";
  InstanceDefinitions: InstanceDefinitions;
  LaunchTemplate: LaunchTemplate;
  /**
   * The maximum number of instances allowed in the EC2 Auto Scaling group.
   */
  MaxSize?: number;
  /**
   * The minimum number of instances allowed in the EC2 Auto Scaling group.
   */
  MinSize?: number;
  /**
   * The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups.
   */
  RoleArn: string;
  Tags?: Tags;
  VpcSubnets?: VpcSubnets;
}
/**
 * Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting
 */
export interface AutoScalingPolicy {
  EstimatedInstanceWarmup?: EstimatedInstanceWarmup;
  TargetTrackingConfiguration: TargetTrackingConfiguration;
}
/**
 * Settings for a target-based scaling policy applied to Auto Scaling group.
 */
export interface TargetTrackingConfiguration {
  TargetValue: TargetValue;
}
/**
 * An allowed instance type for your game server group.
 */
export interface InstanceDefinition {
  InstanceType: InstanceType;
  WeightedCapacity?: WeightedCapacity;
}
/**
 * The EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group.
 */
export interface LaunchTemplate {
  LaunchTemplateId?: LaunchTemplateId;
  LaunchTemplateName?: LaunchTemplateName;
  Version?: Version;
}
export interface Tag {
  /**
   * The key for a developer-defined key:value pair for tagging an AWS resource.
   */
  Key?: string;
  /**
   * The value for a developer-defined key:value pair for tagging an AWS resource.
   */
  Value?: string;
}
