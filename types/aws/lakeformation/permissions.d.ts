/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::LakeFormation::Permissions
 */
export interface AwsLakeformationPermissions {
  Resource: Resource;
  Permissions?: string[];
  Id?: string;
  DataLakePrincipal: DataLakePrincipal;
  PermissionsWithGrantOption?: string[];
}
export interface Resource {
  DatabaseResource?: DatabaseResource;
  DataLocationResource?: DataLocationResource;
  TableWithColumnsResource?: TableWithColumnsResource;
  TableResource?: TableResource;
}
export interface DatabaseResource {
  CatalogId?: string;
  Name?: string;
}
export interface DataLocationResource {
  S3Resource?: string;
  CatalogId?: string;
}
export interface TableWithColumnsResource {
  DatabaseName?: string;
  ColumnNames?: string[];
  CatalogId?: string;
  Name?: string;
  ColumnWildcard?: ColumnWildcard;
}
export interface ColumnWildcard {
  ExcludedColumnNames?: string[];
}
export interface TableResource {
  DatabaseName?: string;
  CatalogId?: string;
  TableWildcard?: TableWildcard;
  Name?: string;
}
export interface TableWildcard {}
export interface DataLakePrincipal {
  DataLakePrincipalIdentifier?: string;
}
