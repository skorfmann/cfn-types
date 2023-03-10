/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type WorkflowEngine = "WDL" | "NEXTFLOW";
export type WorkflowStatus = "CREATING" | "ACTIVE" | "UPDATING" | "DELETED" | "FAILED";
export type WorkflowType = "PRIVATE";

/**
 * Definition of AWS::Omics::Workflow Resource Type
 */
export interface AwsOmicsWorkflow {
  Arn?: string;
  CreationTime?: string;
  DefinitionUri?: string;
  Description?: string;
  Engine?: WorkflowEngine;
  Id?: string;
  Main?: string;
  Name?: string;
  ParameterTemplate?: WorkflowParameterTemplate;
  Status?: WorkflowStatus;
  StorageCapacity?: number;
  Tags?: TagMap;
  Type?: WorkflowType;
}
export interface WorkflowParameterTemplate {
  [k: string]: WorkflowParameter;
}
/**
 * This interface was referenced by `WorkflowParameterTemplate`'s JSON-Schema definition
 * via the `patternProperty` "^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$".
 */
export interface WorkflowParameter {
  Description?: string;
  Optional?: boolean;
}
/**
 * A map of resource tags
 */
export interface TagMap {
  /**
   * Resource tag value
   *
   * This interface was referenced by `TagMap`'s JSON-Schema definition
   * via the `patternProperty` ".+".
   */
  [k: string]: string;
}
