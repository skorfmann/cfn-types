/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type PipeState =
  | "RUNNING"
  | "STOPPED"
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "STARTING"
  | "STOPPING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "START_FAILED"
  | "STOP_FAILED";
export type RequestedPipeState = "RUNNING" | "STOPPED";
export type OnPartialBatchItemFailureStreams = "AUTOMATIC_BISECT";
export type KinesisStreamStartPosition = "TRIM_HORIZON" | "LATEST" | "AT_TIMESTAMP";
export type DynamoDBStreamStartPosition = "TRIM_HORIZON" | "LATEST";
export type MQBrokerAccessCredentials = BasicAuth;
export type MSKStartPosition = "TRIM_HORIZON" | "LATEST";
export type MSKAccessCredentials = SaslScram512Auth | ClientCertificateTlsAuth;
export type SelfManagedKafkaStartPosition = "TRIM_HORIZON" | "LATEST";
export type SelfManagedKafkaAccessConfigurationCredentials =
  | BasicAuth1
  | SaslScram512Auth1
  | SaslScram256Auth
  | ClientCertificateTlsAuth1;
export type PipeTargetInvocationType = "REQUEST_RESPONSE" | "FIRE_AND_FORGET";
export type LaunchType = "EC2" | "FARGATE" | "EXTERNAL";
export type AssignPublicIp = "ENABLED" | "DISABLED";
export type PlacementConstraintType = "distinctInstance" | "memberOf";
export type PlacementStrategyType = "random" | "spread" | "binpack";
export type PropagateTags = "TASK_DEFINITION";
export type EcsEnvironmentFileType = "s3";
export type EcsResourceRequirementType = "GPU" | "InferenceAccelerator";
export type BatchResourceRequirementType = "GPU" | "MEMORY" | "VCPU";
export type BatchJobDependencyType = "N_TO_N" | "SEQUENTIAL";

/**
 * Definition of AWS::Pipes::Pipe Resource Type
 */
export interface AwsPipesPipe {
  Arn?: string;
  CreationTime?: string;
  CurrentState?: PipeState;
  Description?: string;
  DesiredState?: RequestedPipeState;
  Enrichment?: string;
  EnrichmentParameters?: PipeEnrichmentParameters;
  LastModifiedTime?: string;
  Name?: string;
  RoleArn: string;
  Source: string;
  SourceParameters?: PipeSourceParameters;
  StateReason?: string;
  Tags?: TagMap;
  Target: string;
  TargetParameters?: PipeTargetParameters;
}
export interface PipeEnrichmentParameters {
  InputTemplate?: string;
  HttpParameters?: PipeEnrichmentHttpParameters;
}
export interface PipeEnrichmentHttpParameters {
  /**
   * @minItems 0
   * @maxItems 1
   */
  PathParameterValues?: [] | [string];
  HeaderParameters?: HeaderParametersMap;
  QueryStringParameters?: QueryStringParametersMap;
}
export interface HeaderParametersMap {
  /**
   * This interface was referenced by `HeaderParametersMap`'s JSON-Schema definition
   * via the `patternProperty` "^[!#$%&'*+-.^_`|~0-9a-zA-Z]+$".
   */
  [k: string]: string;
}
export interface QueryStringParametersMap {
  /**
   * This interface was referenced by `QueryStringParametersMap`'s JSON-Schema definition
   * via the `patternProperty` "^[^\x00-\x1F\x7F]+$".
   */
  [k: string]: string;
}
export interface PipeSourceParameters {
  FilterCriteria?: FilterCriteria;
  KinesisStreamParameters?: PipeSourceKinesisStreamParameters;
  DynamoDBStreamParameters?: PipeSourceDynamoDBStreamParameters;
  SqsQueueParameters?: PipeSourceSqsQueueParameters;
  ActiveMQBrokerParameters?: PipeSourceActiveMQBrokerParameters;
  RabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParameters;
  ManagedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParameters;
  SelfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParameters;
}
export interface FilterCriteria {
  /**
   * @minItems 0
   * @maxItems 5
   */
  Filters?:
    | []
    | [Filter]
    | [Filter, Filter]
    | [Filter, Filter, Filter]
    | [Filter, Filter, Filter, Filter]
    | [Filter, Filter, Filter, Filter, Filter];
}
export interface Filter {
  Pattern?: string;
}
export interface PipeSourceKinesisStreamParameters {
  BatchSize?: number;
  DeadLetterConfig?: DeadLetterConfig;
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams;
  MaximumBatchingWindowInSeconds?: number;
  MaximumRecordAgeInSeconds?: number;
  MaximumRetryAttempts?: number;
  ParallelizationFactor?: number;
  StartingPosition: KinesisStreamStartPosition;
  StartingPositionTimestamp?: string;
}
export interface DeadLetterConfig {
  Arn?: string;
}
export interface PipeSourceDynamoDBStreamParameters {
  BatchSize?: number;
  DeadLetterConfig?: DeadLetterConfig;
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams;
  MaximumBatchingWindowInSeconds?: number;
  MaximumRecordAgeInSeconds?: number;
  MaximumRetryAttempts?: number;
  ParallelizationFactor?: number;
  StartingPosition: DynamoDBStreamStartPosition;
}
export interface PipeSourceSqsQueueParameters {
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export interface PipeSourceActiveMQBrokerParameters {
  Credentials: MQBrokerAccessCredentials;
  QueueName: string;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export interface BasicAuth {
  /**
   * Optional SecretManager ARN which stores the database credentials
   */
  BasicAuth: string;
}
export interface PipeSourceRabbitMQBrokerParameters {
  Credentials: MQBrokerAccessCredentials;
  QueueName: string;
  VirtualHost?: string;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export interface PipeSourceManagedStreamingKafkaParameters {
  TopicName: string;
  StartingPosition?: MSKStartPosition;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
  ConsumerGroupID?: string;
  Credentials?: MSKAccessCredentials;
}
export interface SaslScram512Auth {
  /**
   * Optional SecretManager ARN which stores the database credentials
   */
  SaslScram512Auth: string;
}
export interface ClientCertificateTlsAuth {
  /**
   * Optional SecretManager ARN which stores the database credentials
   */
  ClientCertificateTlsAuth: string;
}
export interface PipeSourceSelfManagedKafkaParameters {
  TopicName: string;
  StartingPosition?: SelfManagedKafkaStartPosition;
  /**
   * @minItems 0
   * @maxItems 2
   */
  AdditionalBootstrapServers?: [] | [string] | [string, string];
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
  ConsumerGroupID?: string;
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials;
  /**
   * Optional SecretManager ARN which stores the database credentials
   */
  ServerRootCaCertificate?: string;
  Vpc?: SelfManagedKafkaAccessConfigurationVpc;
}
export interface BasicAuth1 {
  /**
   * Optional SecretManager ARN which stores the database credentials
   */
  BasicAuth: string;
}
export interface SaslScram512Auth1 {
  /**
   * Optional SecretManager ARN which stores the database credentials
   */
  SaslScram512Auth: string;
}
export interface SaslScram256Auth {
  /**
   * Optional SecretManager ARN which stores the database credentials
   */
  SaslScram256Auth: string;
}
export interface ClientCertificateTlsAuth1 {
  /**
   * Optional SecretManager ARN which stores the database credentials
   */
  ClientCertificateTlsAuth: string;
}
export interface SelfManagedKafkaAccessConfigurationVpc {
  /**
   * List of SubnetId.
   *
   * @minItems 0
   * @maxItems 16
   */
  Subnets?:
    | []
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
      ];
  /**
   * List of SecurityGroupId.
   *
   * @minItems 0
   * @maxItems 5
   */
  SecurityGroup?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string];
}
export interface TagMap {
  /**
   * This interface was referenced by `TagMap`'s JSON-Schema definition
   * via the `patternProperty` ".+".
   */
  [k: string]: string;
}
export interface PipeTargetParameters {
  InputTemplate?: string;
  LambdaFunctionParameters?: PipeTargetLambdaFunctionParameters;
  StepFunctionStateMachineParameters?: PipeTargetStateMachineParameters;
  KinesisStreamParameters?: PipeTargetKinesisStreamParameters;
  EcsTaskParameters?: PipeTargetEcsTaskParameters;
  BatchJobParameters?: PipeTargetBatchJobParameters;
  SqsQueueParameters?: PipeTargetSqsQueueParameters;
  HttpParameters?: PipeTargetHttpParameters;
  RedshiftDataParameters?: PipeTargetRedshiftDataParameters;
  SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters;
  EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters;
  CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters;
}
export interface PipeTargetLambdaFunctionParameters {
  InvocationType?: PipeTargetInvocationType;
}
export interface PipeTargetStateMachineParameters {
  InvocationType?: PipeTargetInvocationType;
}
export interface PipeTargetKinesisStreamParameters {
  PartitionKey: string;
}
export interface PipeTargetEcsTaskParameters {
  TaskDefinitionArn: string;
  TaskCount?: number;
  LaunchType?: LaunchType;
  NetworkConfiguration?: NetworkConfiguration;
  PlatformVersion?: string;
  Group?: string;
  /**
   * @minItems 0
   * @maxItems 6
   */
  CapacityProviderStrategy?:
    | []
    | [CapacityProviderStrategyItem]
    | [CapacityProviderStrategyItem, CapacityProviderStrategyItem]
    | [CapacityProviderStrategyItem, CapacityProviderStrategyItem, CapacityProviderStrategyItem]
    | [
        CapacityProviderStrategyItem,
        CapacityProviderStrategyItem,
        CapacityProviderStrategyItem,
        CapacityProviderStrategyItem
      ]
    | [
        CapacityProviderStrategyItem,
        CapacityProviderStrategyItem,
        CapacityProviderStrategyItem,
        CapacityProviderStrategyItem,
        CapacityProviderStrategyItem
      ]
    | [
        CapacityProviderStrategyItem,
        CapacityProviderStrategyItem,
        CapacityProviderStrategyItem,
        CapacityProviderStrategyItem,
        CapacityProviderStrategyItem,
        CapacityProviderStrategyItem
      ];
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  /**
   * @minItems 0
   * @maxItems 10
   */
  PlacementConstraints?:
    | []
    | [PlacementConstraint]
    | [PlacementConstraint, PlacementConstraint]
    | [PlacementConstraint, PlacementConstraint, PlacementConstraint]
    | [PlacementConstraint, PlacementConstraint, PlacementConstraint, PlacementConstraint]
    | [PlacementConstraint, PlacementConstraint, PlacementConstraint, PlacementConstraint, PlacementConstraint]
    | [
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint
      ]
    | [
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint
      ]
    | [
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint
      ]
    | [
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint
      ]
    | [
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint,
        PlacementConstraint
      ];
  /**
   * @minItems 0
   * @maxItems 5
   */
  PlacementStrategy?:
    | []
    | [PlacementStrategy]
    | [PlacementStrategy, PlacementStrategy]
    | [PlacementStrategy, PlacementStrategy, PlacementStrategy]
    | [PlacementStrategy, PlacementStrategy, PlacementStrategy, PlacementStrategy]
    | [PlacementStrategy, PlacementStrategy, PlacementStrategy, PlacementStrategy, PlacementStrategy];
  PropagateTags?: PropagateTags;
  ReferenceId?: string;
  Overrides?: EcsTaskOverride;
  Tags?: Tag[];
}
export interface NetworkConfiguration {
  AwsvpcConfiguration?: AwsVpcConfiguration;
}
export interface AwsVpcConfiguration {
  /**
   * @minItems 0
   * @maxItems 16
   */
  Subnets:
    | []
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
      ];
  /**
   * @minItems 0
   * @maxItems 5
   */
  SecurityGroups?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string];
  AssignPublicIp?: AssignPublicIp;
}
export interface CapacityProviderStrategyItem {
  CapacityProvider: string;
  Weight?: number;
  Base?: number;
}
export interface PlacementConstraint {
  Type?: PlacementConstraintType;
  Expression?: string;
}
export interface PlacementStrategy {
  Type?: PlacementStrategyType;
  Field?: string;
}
export interface EcsTaskOverride {
  ContainerOverrides?: EcsContainerOverride[];
  Cpu?: string;
  EphemeralStorage?: EcsEphemeralStorage;
  ExecutionRoleArn?: string;
  InferenceAcceleratorOverrides?: EcsInferenceAcceleratorOverride[];
  Memory?: string;
  TaskRoleArn?: string;
}
export interface EcsContainerOverride {
  Command?: string[];
  Cpu?: number;
  Environment?: EcsEnvironmentVariable[];
  EnvironmentFiles?: EcsEnvironmentFile[];
  Memory?: number;
  MemoryReservation?: number;
  Name?: string;
  ResourceRequirements?: EcsResourceRequirement[];
}
export interface EcsEnvironmentVariable {
  Name?: string;
  Value?: string;
}
export interface EcsEnvironmentFile {
  Type: EcsEnvironmentFileType;
  Value: string;
}
export interface EcsResourceRequirement {
  Type: EcsResourceRequirementType;
  Value: string;
}
export interface EcsEphemeralStorage {
  SizeInGiB: number;
}
export interface EcsInferenceAcceleratorOverride {
  DeviceName?: string;
  DeviceType?: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
export interface PipeTargetBatchJobParameters {
  JobDefinition: string;
  JobName: string;
  ArrayProperties?: BatchArrayProperties;
  RetryStrategy?: BatchRetryStrategy;
  ContainerOverrides?: BatchContainerOverrides;
  /**
   * @minItems 0
   * @maxItems 20
   */
  DependsOn?:
    | []
    | [BatchJobDependency]
    | [BatchJobDependency, BatchJobDependency]
    | [BatchJobDependency, BatchJobDependency, BatchJobDependency]
    | [BatchJobDependency, BatchJobDependency, BatchJobDependency, BatchJobDependency]
    | [BatchJobDependency, BatchJobDependency, BatchJobDependency, BatchJobDependency, BatchJobDependency]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ]
    | [
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency,
        BatchJobDependency
      ];
  Parameters?: BatchParametersMap;
}
export interface BatchArrayProperties {
  Size?: number;
}
export interface BatchRetryStrategy {
  Attempts?: number;
}
export interface BatchContainerOverrides {
  Command?: string[];
  Environment?: BatchEnvironmentVariable[];
  InstanceType?: string;
  ResourceRequirements?: BatchResourceRequirement[];
}
export interface BatchEnvironmentVariable {
  Name?: string;
  Value?: string;
}
export interface BatchResourceRequirement {
  Type: BatchResourceRequirementType;
  Value: string;
}
export interface BatchJobDependency {
  JobId?: string;
  Type?: BatchJobDependencyType;
}
export interface BatchParametersMap {
  /**
   * This interface was referenced by `BatchParametersMap`'s JSON-Schema definition
   * via the `patternProperty` ".+".
   */
  [k: string]: string;
}
export interface PipeTargetSqsQueueParameters {
  MessageGroupId?: string;
  MessageDeduplicationId?: string;
}
export interface PipeTargetHttpParameters {
  /**
   * @minItems 0
   * @maxItems 1
   */
  PathParameterValues?: [] | [string];
  HeaderParameters?: HeaderParametersMap;
  QueryStringParameters?: QueryStringParametersMap;
}
export interface PipeTargetRedshiftDataParameters {
  /**
   * Optional SecretManager ARN which stores the database credentials
   */
  SecretManagerArn?: string;
  /**
   * Redshift Database
   */
  Database: string;
  /**
   * Database user name
   */
  DbUser?: string;
  /**
   * A name for Redshift DataAPI statement which can be used as filter of ListStatement.
   */
  StatementName?: string;
  WithEvent?: boolean;
  /**
   * A list of SQLs.
   *
   * @minItems 1
   */
  Sqls: [string, ...string[]];
}
export interface PipeTargetSageMakerPipelineParameters {
  /**
   * @minItems 0
   * @maxItems 200
   */
  PipelineParameterList?: SageMakerPipelineParameter[];
}
export interface SageMakerPipelineParameter {
  Name: string;
  Value: string;
}
export interface PipeTargetEventBridgeEventBusParameters {
  EndpointId?: string;
  DetailType?: string;
  Source?: string;
  /**
   * @minItems 0
   * @maxItems 10
   */
  Resources?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string];
  Time?: string;
}
export interface PipeTargetCloudWatchLogsParameters {
  LogStreamName?: string;
  Timestamp?: string;
}
