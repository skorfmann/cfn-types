/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The ARN of the Chatbot SNS topic.
 */
export type SnsArn = string;
export type ChatbotSns = SnsArn[];
/**
 * The ARN of the contact.
 */
export type SSMContact = string;
/**
 * A value of the parameter to set when starting the SSM automation document.
 */
export type SsmParameterValue = string;
/**
 * The variable types used as dynamic parameter value when starting the SSM automation document.
 */
export type VariableType = "INCIDENT_RECORD_ARN" | "INVOLVED_RESOURCES";
export type Integration = {
  PagerDutyConfiguration?: PagerDutyConfiguration;
} & Integration1;
export type Integration1 = {
  [k: string]: unknown;
};

/**
 * Resource type definition for AWS::SSMIncidents::ResponsePlan
 */
export interface AwsSsmincidentsResponseplan {
  /**
   * The ARN of the response plan.
   */
  Arn?: string;
  /**
   * The name of the response plan.
   */
  Name: string;
  /**
   * The display name of the response plan.
   */
  DisplayName?: string;
  ChatChannel?: ChatChannel;
  /**
   * The list of engagements to use.
   *
   * @maxItems 5
   */
  Engagements?:
    | []
    | [SSMContact]
    | [SSMContact, SSMContact]
    | [SSMContact, SSMContact, SSMContact]
    | [SSMContact, SSMContact, SSMContact, SSMContact]
    | [SSMContact, SSMContact, SSMContact, SSMContact, SSMContact];
  /**
   * The list of actions.
   *
   * @maxItems 1
   */
  Actions?: [] | [Action];
  /**
   * The list of integrations.
   *
   * @maxItems 1
   */
  Integrations?: [] | [Integration];
  /**
   * The tags to apply to the response plan.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
  IncidentTemplate: IncidentTemplate;
}
/**
 * The chat channel configuration.
 */
export interface ChatChannel {
  ChatbotSns?: ChatbotSns;
}
/**
 * The automation configuration to launch.
 */
export interface Action {
  SsmAutomation?: SsmAutomation;
}
/**
 * The configuration to use when starting the SSM automation document.
 */
export interface SsmAutomation {
  /**
   * The role ARN to use when starting the SSM automation document.
   */
  RoleArn: string;
  /**
   * The document name to use when starting the SSM automation document.
   */
  DocumentName: string;
  /**
   * The version of the document to use when starting the SSM automation document.
   */
  DocumentVersion?: string;
  /**
   * The account type to use when starting the SSM automation document.
   */
  TargetAccount?: "IMPACTED_ACCOUNT" | "RESPONSE_PLAN_OWNER_ACCOUNT";
  /**
   * The parameters to set when starting the SSM automation document.
   *
   * @minItems 1
   * @maxItems 200
   */
  Parameters?: [SsmParameter, ...SsmParameter[]];
  /**
   * The parameters with dynamic values to set when starting the SSM automation document.
   *
   * @maxItems 200
   */
  DynamicParameters?: DynamicSsmParameter[];
}
/**
 * A parameter to set when starting the SSM automation document.
 */
export interface SsmParameter {
  Key: string;
  /**
   * @maxItems 10
   */
  Values:
    | []
    | [SsmParameterValue]
    | [SsmParameterValue, SsmParameterValue]
    | [SsmParameterValue, SsmParameterValue, SsmParameterValue]
    | [SsmParameterValue, SsmParameterValue, SsmParameterValue, SsmParameterValue]
    | [SsmParameterValue, SsmParameterValue, SsmParameterValue, SsmParameterValue, SsmParameterValue]
    | [SsmParameterValue, SsmParameterValue, SsmParameterValue, SsmParameterValue, SsmParameterValue, SsmParameterValue]
    | [
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue
      ]
    | [
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue
      ]
    | [
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue
      ]
    | [
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue,
        SsmParameterValue
      ];
}
/**
 * A parameter with a dynamic value to set when starting the SSM automation document.
 */
export interface DynamicSsmParameter {
  Key: string;
  Value: DynamicSsmParameterValue;
}
/**
 * Value of the dynamic parameter to set when starting the SSM automation document.
 */
export interface DynamicSsmParameterValue {
  Variable?: VariableType;
}
/**
 * The pagerDuty configuration to use when starting the incident.
 */
export interface PagerDutyConfiguration {
  /**
   * The name of the pagerDuty configuration.
   */
  Name: string;
  /**
   * The AWS secrets manager secretId storing the pagerDuty token.
   */
  SecretId: string;
  PagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration;
}
/**
 * The pagerDuty incident configuration.
 */
export interface PagerDutyIncidentConfiguration {
  /**
   * The pagerDuty serviceId.
   */
  ServiceId: string;
}
/**
 * A key-value pair to tag a resource.
 */
export interface Tag {
  Key: string;
  Value: string;
}
/**
 * The incident template configuration.
 */
export interface IncidentTemplate {
  /**
   * The deduplication string.
   */
  DedupeString?: string;
  /**
   * The impact value.
   */
  Impact: number;
  /**
   * The list of notification targets.
   *
   * @maxItems 10
   */
  NotificationTargets?:
    | []
    | [NotificationTargetItem]
    | [NotificationTargetItem, NotificationTargetItem]
    | [NotificationTargetItem, NotificationTargetItem, NotificationTargetItem]
    | [NotificationTargetItem, NotificationTargetItem, NotificationTargetItem, NotificationTargetItem]
    | [
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem
      ]
    | [
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem
      ]
    | [
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem
      ]
    | [
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem
      ]
    | [
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem
      ]
    | [
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem,
        NotificationTargetItem
      ];
  /**
   * The summary string.
   */
  Summary?: string;
  /**
   * The title string.
   */
  Title: string;
  /**
   * Tags that get applied to incidents created by the StartIncident API action.
   *
   * @maxItems 50
   */
  IncidentTags?: Tag[];
}
/**
 * A notification target.
 */
export interface NotificationTargetItem {
  SnsTopicArn?: SnsArn;
}
