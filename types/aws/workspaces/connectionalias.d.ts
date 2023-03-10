/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::WorkSpaces::ConnectionAlias
 */
export interface AwsWorkspacesConnectionalias {
  Associations?: ConnectionAliasAssociation[];
  AliasId?: string;
  ConnectionString: string;
  ConnectionAliasState?: "CREATING" | "CREATED" | "DELETING";
  Tags?: Tag[];
}
export interface ConnectionAliasAssociation {
  AssociationStatus?:
    | "NOT_ASSOCIATED"
    | "PENDING_ASSOCIATION"
    | "ASSOCIATED_WITH_OWNER_ACCOUNT"
    | "ASSOCIATED_WITH_SHARED_ACCOUNT"
    | "PENDING_DISASSOCIATION";
  AssociatedAccountId?: string;
  ResourceId?: string;
  ConnectionIdentifier?: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
