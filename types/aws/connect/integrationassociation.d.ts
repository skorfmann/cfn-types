/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Identifier of the association with Connect Instance
 */
export type IntegrationAssociationId = string;
/**
 * Amazon Connect instance identifier
 */
export type InstanceId = string;
/**
 * ARN of Integration being associated with the instance
 */
export type IntegrationArn = string;
/**
 * Specifies the integration type to be associated with the instance
 */
export type IntegrationType = "LEX_BOT" | "LAMBDA_FUNCTION";

/**
 * Resource Type definition for AWS::Connect::IntegrationAssociation
 */
export interface AwsConnectIntegrationassociation {
  IntegrationAssociationId?: IntegrationAssociationId;
  InstanceId: InstanceId;
  IntegrationArn: IntegrationArn;
  IntegrationType: IntegrationType;
}