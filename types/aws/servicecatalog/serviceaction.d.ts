/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Schema for AWS::ServiceCatalog::ServiceAction
 */
export interface AwsServicecatalogServiceaction {
  AcceptLanguage?: "en" | "jp" | "zh";
  Name: string;
  DefinitionType: "SSM_AUTOMATION";
  Definition: DefinitionParameter[];
  Description?: string;
  Id?: string;
}
export interface DefinitionParameter {
  Key: string;
  Value: string;
}
