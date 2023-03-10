/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::Application
 */
export interface AwsServicecatalogappregistryApplication {
  Id?: string;
  Arn?: string;
  /**
   * The name of the application.
   */
  Name: string;
  /**
   * The description of the application.
   */
  Description?: string;
  Tags?: Tags;
}
export interface Tags {
  /**
   * This interface was referenced by `Tags`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z+-=._:/]+$".
   */
  [k: string]: string;
}
