/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Events::Rule
 */
export interface AwsEventsRule {
  EventBusName?: string;
  EventPattern?: {
    [k: string]: unknown;
  };
  ScheduleExpression?: string;
  Description?: string;
  State?: string;
  Targets?: Target[];
  Id?: string;
  Arn?: string;
  RoleArn?: string;
  Name?: string;
}
export interface Target {
  InputPath?: string;
  HttpParameters?: HttpParameters;
  DeadLetterConfig?: DeadLetterConfig;
  RunCommandParameters?: RunCommandParameters;
  InputTransformer?: InputTransformer;
  KinesisParameters?: KinesisParameters;
  RoleArn?: string;
  RedshiftDataParameters?: RedshiftDataParameters;
  Input?: string;
  SqsParameters?: SqsParameters;
  EcsParameters?: EcsParameters;
  BatchParameters?: BatchParameters;
  Id: string;
  Arn: string;
  SageMakerPipelineParameters?: SageMakerPipelineParameters;
  RetryPolicy?: RetryPolicy;
}
export interface HttpParameters {
  PathParameterValues?: string[];
  HeaderParameters?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "[a-zA-Z0-9]+".
     */
    [k: string]: string;
  };
  QueryStringParameters?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "[a-zA-Z0-9]+".
     */
    [k: string]: string;
  };
}
export interface DeadLetterConfig {
  Arn?: string;
}
export interface RunCommandParameters {
  RunCommandTargets: RunCommandTarget[];
}
export interface RunCommandTarget {
  Values: string[];
  Key: string;
}
export interface InputTransformer {
  InputTemplate: string;
  InputPathsMap?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "[a-zA-Z0-9]+".
     */
    [k: string]: string;
  };
}
export interface KinesisParameters {
  PartitionKeyPath: string;
}
export interface RedshiftDataParameters {
  StatementName?: string;
  Database: string;
  SecretManagerArn?: string;
  DbUser?: string;
  Sql: string;
  WithEvent?: boolean;
}
export interface SqsParameters {
  MessageGroupId: string;
}
export interface EcsParameters {
  PlatformVersion?: string;
  Group?: string;
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  PlacementConstraints?: PlacementConstraint[];
  PropagateTags?: string;
  TaskCount?: number;
  PlacementStrategies?: PlacementStrategy[];
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];
  LaunchType?: string;
  ReferenceId?: string;
  TagList?: Tag[];
  NetworkConfiguration?: NetworkConfiguration;
  TaskDefinitionArn: string;
}
export interface PlacementConstraint {
  Expression?: string;
  Type?: string;
}
export interface PlacementStrategy {
  Field?: string;
  Type?: string;
}
export interface CapacityProviderStrategyItem {
  Base?: number;
  Weight?: number;
  CapacityProvider: string;
}
export interface Tag {
  Value?: string;
  Key?: string;
}
export interface NetworkConfiguration {
  AwsVpcConfiguration?: AwsVpcConfiguration;
}
export interface AwsVpcConfiguration {
  SecurityGroups?: string[];
  Subnets: string[];
  AssignPublicIp?: string;
}
export interface BatchParameters {
  JobName: string;
  RetryStrategy?: BatchRetryStrategy;
  ArrayProperties?: BatchArrayProperties;
  JobDefinition: string;
}
export interface BatchRetryStrategy {
  Attempts?: number;
}
export interface BatchArrayProperties {
  Size?: number;
}
export interface SageMakerPipelineParameters {
  PipelineParameterList?: SageMakerPipelineParameter[];
}
export interface SageMakerPipelineParameter {
  Value: string;
  Name: string;
}
export interface RetryPolicy {
  MaximumEventAgeInSeconds?: number;
  MaximumRetryAttempts?: number;
}
