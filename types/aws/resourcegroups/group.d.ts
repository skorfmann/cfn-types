/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Configuration = ConfigurationItem[];

/**
 * Schema for ResourceGroups::Group
 */
export interface AwsResourcegroupsGroup {
  /**
   * The name of the resource group
   */
  Name: string;
  /**
   * The description of the resource group
   */
  Description?: string;
  ResourceQuery?: ResourceQuery;
  Tags?: Tag[];
  /**
   * The Resource Group ARN.
   */
  Arn?: string;
  Configuration?: Configuration;
  Resources?: string[];
}
export interface ResourceQuery {
  Type?: "TAG_FILTERS_1_0" | "CLOUDFORMATION_STACK_1_0";
  Query?: Query;
}
export interface Query {
  ResourceTypeFilters?: string[];
  StackIdentifier?: string;
  TagFilters?: TagFilter[];
}
export interface TagFilter {
  Key?: string;
  Values?: string[];
}
export interface Tag {
  Key?: string;
  Value?: string;
}
export interface ConfigurationItem {
  Type?: string;
  Parameters?: ConfigurationParameter[];
}
export interface ConfigurationParameter {
  Name?: string;
  Values?: string[];
}
