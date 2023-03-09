/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Determines whether the schedule is executed within a flexible time window.
 */
export type FlexibleTimeWindowMode = "OFF" | "FLEXIBLE";
/**
 * Specifies whether the schedule is enabled or disabled.
 */
export type ScheduleState = "ENABLED" | "DISABLED";
/**
 * Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The FARGATE value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see AWS Fargate on Amazon ECS in the Amazon Elastic Container Service Developer Guide.
 */
export type LaunchType = "EC2" | "FARGATE" | "EXTERNAL";
/**
 * Specifies whether the task's elastic network interface receives a public IP address. You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE.
 */
export type AssignPublicIp = "ENABLED" | "DISABLED";
/**
 * The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.
 */
export type PlacementConstraintType = "distinctInstance" | "memberOf";
/**
 * The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
 */
export type PlacementStrategyType = "random" | "spread" | "binpack";
/**
 * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action.
 */
export type PropagateTags = "TASK_DEFINITION";

/**
 * Definition of AWS::Scheduler::Schedule Resource Type
 */
export interface AwsSchedulerSchedule {
  /**
   * The Amazon Resource Name (ARN) of the schedule.
   */
  Arn?: string;
  /**
   * The description of the schedule.
   */
  Description?: string;
  /**
   * The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the EndDate you specify.
   */
  EndDate?: string;
  FlexibleTimeWindow: FlexibleTimeWindow;
  /**
   * The name of the schedule group to associate with this schedule. If you omit this, the default schedule group is used.
   */
  GroupName?: string;
  /**
   * The ARN for a KMS Key that will be used to encrypt customer data.
   */
  KmsKeyArn?: string;
  Name?: string;
  /**
   * The scheduling expression.
   */
  ScheduleExpression: string;
  /**
   * The timezone in which the scheduling expression is evaluated.
   */
  ScheduleExpressionTimezone?: string;
  /**
   * The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the StartDate you specify.
   */
  StartDate?: string;
  State?: ScheduleState;
  Target: Target;
}
/**
 * Flexible time window allows configuration of a window within which a schedule can be invoked
 */
export interface FlexibleTimeWindow {
  Mode: FlexibleTimeWindowMode;
  /**
   * The maximum time window during which a schedule can be invoked.
   */
  MaximumWindowInMinutes?: number;
}
/**
 * The schedule target.
 */
export interface Target {
  /**
   * The Amazon Resource Name (ARN) of the target.
   */
  Arn: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered.
   */
  RoleArn: string;
  DeadLetterConfig?: DeadLetterConfig;
  RetryPolicy?: RetryPolicy;
  /**
   * The text, or well-formed JSON, passed to the target. If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target, the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler delivers a default notification to the target.
   */
  Input?: string;
  EcsParameters?: EcsParameters;
  EventBridgeParameters?: EventBridgeParameters;
  KinesisParameters?: KinesisParameters;
  SageMakerPipelineParameters?: SageMakerPipelineParameters;
  SqsParameters?: SqsParameters;
}
/**
 * A DeadLetterConfig object that contains information about a dead-letter queue configuration.
 */
export interface DeadLetterConfig {
  /**
   * The ARN of the SQS queue specified as the target for the dead-letter queue.
   */
  Arn?: string;
}
/**
 * A RetryPolicy object that includes information about the retry policy settings.
 */
export interface RetryPolicy {
  /**
   * The maximum amount of time, in seconds, to continue to make retry attempts.
   */
  MaximumEventAgeInSeconds?: number;
  /**
   * The maximum number of retry attempts to make before the request fails. Retry attempts with exponential backoff continue until either the maximum number of attempts is made or until the duration of the MaximumEventAgeInSeconds is reached.
   */
  MaximumRetryAttempts?: number;
}
/**
 * The custom parameters to be used when the target is an Amazon ECS task.
 */
export interface EcsParameters {
  /**
   * The ARN of the task definition to use if the event target is an Amazon ECS task.
   */
  TaskDefinitionArn: string;
  /**
   * The number of tasks to create based on TaskDefinition. The default is 1.
   */
  TaskCount?: number;
  LaunchType?: LaunchType;
  NetworkConfiguration?: NetworkConfiguration;
  /**
   * Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0.
   */
  PlatformVersion?: string;
  /**
   * Specifies an ECS task group for the task. The maximum length is 255 characters.
   */
  Group?: string;
  /**
   * The capacity provider strategy to use for the task.
   *
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
  /**
   * Specifies whether to enable Amazon ECS managed tags for the task. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide.
   */
  EnableECSManagedTags?: boolean;
  /**
   * Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.
   */
  EnableExecuteCommand?: boolean;
  /**
   * An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
   *
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
   * The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.
   *
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
  /**
   * The reference ID to use for the task.
   */
  ReferenceId?: string;
  /**
   * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. To learn more, see RunTask in the Amazon ECS API Reference.
   *
   * @minItems 0
   * @maxItems 50
   */
  Tags?: TagMap[];
}
/**
 * This structure specifies the network configuration for an ECS task.
 */
export interface NetworkConfiguration {
  AwsvpcConfiguration?: AwsVpcConfiguration;
}
/**
 * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.
 */
export interface AwsVpcConfiguration {
  /**
   * Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
   *
   * @minItems 1
   * @maxItems 16
   */
  Subnets:
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
   * Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
   *
   * @minItems 1
   * @maxItems 5
   */
  SecurityGroups?:
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string];
  AssignPublicIp?: AssignPublicIp;
}
/**
 * The details of a capacity provider strategy.
 */
export interface CapacityProviderStrategyItem {
  /**
   * The short name of the capacity provider.
   */
  CapacityProvider: string;
  /**
   * The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.
   */
  Weight?: number;
  /**
   * The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.
   */
  Base?: number;
}
/**
 * An object representing a constraint on task placement.
 */
export interface PlacementConstraint {
  Type?: PlacementConstraintType;
  /**
   * A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is distinctInstance. To learn more, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.
   */
  Expression?: string;
}
/**
 * The task placement strategy for a task or service.
 */
export interface PlacementStrategy {
  Type?: PlacementStrategyType;
  /**
   * The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.
   */
  Field?: string;
}
export interface TagMap {
  /**
   * This interface was referenced by `TagMap`'s JSON-Schema definition
   * via the `patternProperty` ".+".
   */
  [k: string]: string;
}
/**
 * EventBridge PutEvent predefined target type.
 */
export interface EventBridgeParameters {
  /**
   * Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.
   */
  DetailType: string;
  /**
   * The source of the event.
   */
  Source: string;
}
/**
 * The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event.
 */
export interface KinesisParameters {
  /**
   * The custom parameter used as the Kinesis partition key. For more information, see Amazon Kinesis Streams Key Concepts in the Amazon Kinesis Streams Developer Guide.
   */
  PartitionKey: string;
}
/**
 * These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules.
 */
export interface SageMakerPipelineParameters {
  /**
   * List of Parameter names and values for SageMaker Model Building Pipeline execution.
   *
   * @minItems 0
   * @maxItems 200
   */
  PipelineParameterList?: SageMakerPipelineParameter[];
}
/**
 * Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline.
 */
export interface SageMakerPipelineParameter {
  /**
   * Name of parameter to start execution of a SageMaker Model Building Pipeline.
   */
  Name: string;
  /**
   * Value of parameter to start execution of a SageMaker Model Building Pipeline.
   */
  Value: string;
}
/**
 * Contains the message group ID to use when the target is a FIFO queue. If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.
 */
export interface SqsParameters {
  /**
   * The FIFO message group ID to use as the target.
   */
  MessageGroupId?: string;
}