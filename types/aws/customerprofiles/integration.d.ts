/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type MarketoConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type S3ConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type SalesforceConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "CONTAINS"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type ServiceNowConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "CONTAINS"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type ZendeskConnectorOperator =
  | "PROJECTION"
  | "GREATER_THAN"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type DestinationField = string;
export type TaskType = "Arithmetic" | "Filter" | "Map" | "Mask" | "Merge" | "Truncate" | "Validate";
export type OperatorPropertiesKeys =
  | "VALUE"
  | "VALUES"
  | "DATA_TYPE"
  | "UPPER_BOUND"
  | "LOWER_BOUND"
  | "SOURCE_DATA_TYPE"
  | "DESTINATION_DATA_TYPE"
  | "VALIDATION_ACTION"
  | "MASK_VALUE"
  | "MASK_LENGTH"
  | "TRUNCATE_LENGTH"
  | "MATH_OPERATION_FIELDS_ORDER"
  | "CONCAT_FORMAT"
  | "SUBFIELD_CATEGORY_MAP";
export type TriggerType = "Scheduled" | "Event" | "OnDemand";
export type Date = number;
export type ConnectorType = "Salesforce" | "Marketo" | "ServiceNow" | "Zendesk" | "S3";
export type Object = string;

/**
 * The resource schema for creating an Amazon Connect Customer Profiles Integration.
 */
export interface AwsCustomerprofilesIntegration {
  /**
   * The unique name of the domain.
   */
  DomainName: string;
  /**
   * The URI of the S3 bucket or any other type of data source.
   */
  Uri?: string;
  FlowDefinition?: FlowDefinition;
  /**
   * The name of the ObjectType defined for the 3rd party data in Profile Service
   */
  ObjectTypeName?: string;
  /**
   * The time of this integration got created
   */
  CreatedAt?: string;
  /**
   * The time of this integration got last updated at
   */
  LastUpdatedAt?: string;
  /**
   * The tags (keys and values) associated with the integration
   *
   * @minItems 0
   * @maxItems 50
   */
  Tags?: Tag[];
  /**
   * The mapping between 3rd party event types and ObjectType names
   */
  ObjectTypeNames?: ObjectTypeMapping[];
}
export interface FlowDefinition {
  FlowName: string;
  Description?: string;
  KmsArn: string;
  Tasks: Task[];
  TriggerConfig: TriggerConfig;
  SourceFlowConfig: SourceFlowConfig;
}
export interface Task {
  ConnectorOperator?: ConnectorOperator;
  SourceFields: string[];
  DestinationField?: DestinationField;
  TaskType: TaskType;
  TaskProperties?: TaskPropertiesMap[];
}
export interface ConnectorOperator {
  Marketo?: MarketoConnectorOperator;
  S3?: S3ConnectorOperator;
  Salesforce?: SalesforceConnectorOperator;
  ServiceNow?: ServiceNowConnectorOperator;
  Zendesk?: ZendeskConnectorOperator;
}
export interface TaskPropertiesMap {
  OperatorPropertyKey: OperatorPropertiesKeys;
  Property: string;
}
export interface TriggerConfig {
  TriggerType: TriggerType;
  TriggerProperties?: TriggerProperties;
}
export interface TriggerProperties {
  Scheduled?: ScheduledTriggerProperties;
}
export interface ScheduledTriggerProperties {
  ScheduleExpression: string;
  DataPullMode?: "Incremental" | "Complete";
  ScheduleStartTime?: Date;
  ScheduleEndTime?: Date;
  Timezone?: string;
  ScheduleOffset?: number;
  FirstExecutionFrom?: Date;
}
export interface SourceFlowConfig {
  ConnectorType: ConnectorType;
  ConnectorProfileName?: string;
  IncrementalPullConfig?: IncrementalPullConfig;
  SourceConnectorProperties: SourceConnectorProperties;
}
export interface IncrementalPullConfig {
  DatetimeTypeFieldName?: string;
}
export interface SourceConnectorProperties {
  Marketo?: MarketoSourceProperties;
  S3?: S3SourceProperties;
  Salesforce?: SalesforceSourceProperties;
  ServiceNow?: ServiceNowSourceProperties;
  Zendesk?: ZendeskSourceProperties;
}
export interface MarketoSourceProperties {
  Object: Object;
}
export interface S3SourceProperties {
  BucketName: string;
  BucketPrefix?: string;
}
export interface SalesforceSourceProperties {
  Object: Object;
  EnableDynamicFieldUpdate?: boolean;
  IncludeDeletedRecords?: boolean;
}
export interface ServiceNowSourceProperties {
  Object: Object;
}
export interface ZendeskSourceProperties {
  Object: Object;
}
export interface Tag {
  Key: string;
  Value: string;
}
export interface ObjectTypeMapping {
  Key: string;
  Value: string;
}
