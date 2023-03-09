/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ECS::Service
 */
export interface AwsEcsService {
  ServiceArn?: string;
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];
  Cluster?: string;
  DeploymentConfiguration?: DeploymentConfiguration;
  DeploymentController?: DeploymentController;
  DesiredCount?: number;
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  HealthCheckGracePeriodSeconds?: number;
  LaunchType?: "EC2" | "FARGATE" | "EXTERNAL";
  LoadBalancers?: LoadBalancer[];
  Name?: string;
  NetworkConfiguration?: NetworkConfiguration;
  PlacementConstraints?: PlacementConstraint[];
  PlacementStrategies?: PlacementStrategy[];
  PlatformVersion?: string;
  PropagateTags?: "SERVICE" | "TASK_DEFINITION";
  Role?: string;
  SchedulingStrategy?: "DAEMON" | "REPLICA";
  ServiceConnectConfiguration?: ServiceConnectConfiguration;
  ServiceName?: string;
  ServiceRegistries?: ServiceRegistry[];
  Tags?: Tag[];
  TaskDefinition?: string;
}
export interface CapacityProviderStrategyItem {
  Base?: number;
  CapacityProvider?: string;
  Weight?: number;
}
export interface DeploymentConfiguration {
  DeploymentCircuitBreaker?: DeploymentCircuitBreaker;
  MaximumPercent?: number;
  MinimumHealthyPercent?: number;
  Alarms?: DeploymentAlarms;
}
export interface DeploymentCircuitBreaker {
  Enable: boolean;
  Rollback: boolean;
}
export interface DeploymentAlarms {
  AlarmNames: string[];
  Rollback: boolean;
  Enable: boolean;
}
export interface DeploymentController {
  Type?: "CODE_DEPLOY" | "ECS" | "EXTERNAL";
}
export interface LoadBalancer {
  ContainerName?: string;
  ContainerPort?: number;
  LoadBalancerName?: string;
  TargetGroupArn?: string;
}
export interface NetworkConfiguration {
  AwsvpcConfiguration?: AwsVpcConfiguration;
}
export interface AwsVpcConfiguration {
  AssignPublicIp?: "DISABLED" | "ENABLED";
  SecurityGroups?: string[];
  Subnets?: string[];
}
export interface PlacementConstraint {
  Expression?: string;
  Type: "distinctInstance" | "memberOf";
}
export interface PlacementStrategy {
  Field?: string;
  Type: "binpack" | "random" | "spread";
}
export interface ServiceConnectConfiguration {
  Enabled: boolean;
  Namespace?: string;
  Services?: ServiceConnectService[];
  LogConfiguration?: LogConfiguration;
}
export interface ServiceConnectService {
  PortName: string;
  DiscoveryName?: string;
  ClientAliases?: ServiceConnectClientAlias[];
  IngressPortOverride?: number;
}
export interface ServiceConnectClientAlias {
  Port: number;
  DnsName?: string;
}
export interface LogConfiguration {
  LogDriver?: string;
  Options?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".{1,}".
     */
    [k: string]: string;
  };
  SecretOptions?: Secret[];
}
export interface Secret {
  Name: string;
  ValueFrom: string;
}
export interface ServiceRegistry {
  ContainerName?: string;
  ContainerPort?: number;
  Port?: number;
  RegistryArn?: string;
}
export interface Tag {
  Key?: string;
  Value?: string;
}
