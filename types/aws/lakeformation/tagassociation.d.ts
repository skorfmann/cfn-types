/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CatalogIdString = string;
export type NameString = string;
export type ColumnNames = NameString[];
export type LFTagKey = string;
/**
 * @minItems 1
 * @maxItems 50
 */
export type TagValueList = [LFTagValue, ...LFTagValue[]];
export type LFTagValue = string;
/**
 * List of Lake Formation Tags to associate with the Lake Formation Resource
 */
export type LFTagsList = LFTagPair[];

/**
 * A resource schema representing a Lake Formation Tag Association. While tag associations are not explicit Lake Formation resources, this CloudFormation resource can be used to associate tags with Lake Formation entities.
 */
export interface AwsLakeformationTagassociation {
  Resource: Resource;
  LFTags: LFTagsList;
  /**
   * Unique string identifying the resource. Used as primary identifier, which ideally should be a string
   */
  ResourceIdentifier?: string;
  /**
   * Unique string identifying the resource's tags. Used as primary identifier, which ideally should be a string
   */
  TagsIdentifier?: string;
}
/**
 * Resource to tag with the Lake Formation Tags
 */
export interface Resource {
  Catalog?: CatalogResource;
  Database?: DatabaseResource;
  Table?: TableResource;
  TableWithColumns?: TableWithColumnsResource;
}
export interface CatalogResource {}
export interface DatabaseResource {
  CatalogId: CatalogIdString;
  Name: NameString;
}
export interface TableResource {
  CatalogId: CatalogIdString;
  DatabaseName: NameString;
  Name?: NameString;
  TableWildcard?: TableWildcard;
}
export interface TableWildcard {}
export interface TableWithColumnsResource {
  CatalogId: CatalogIdString;
  DatabaseName: NameString;
  Name: NameString;
  ColumnNames: ColumnNames;
}
export interface LFTagPair {
  CatalogId: CatalogIdString;
  TagKey: LFTagKey;
  TagValues: TagValueList;
}
