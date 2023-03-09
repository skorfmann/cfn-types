/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::Route53Resolver::FirewallRuleGroupAssociation.
 */
export interface AwsRoute53ResolverFirewallrulegroupassociation {
  /**
   * Id
   */
  Id?: string;
  /**
   * Arn
   */
  Arn?: string;
  /**
   * FirewallRuleGroupId
   */
  FirewallRuleGroupId: string;
  /**
   * VpcId
   */
  VpcId: string;
  /**
   * FirewallRuleGroupAssociationName
   */
  Name?: string;
  /**
   * Priority
   */
  Priority: number;
  /**
   * MutationProtectionStatus
   */
  MutationProtection?: "ENABLED" | "DISABLED";
  /**
   * ServicePrincipal
   */
  ManagedOwnerName?: string;
  /**
   * ResolverFirewallRuleGroupAssociation, possible values are COMPLETE, DELETING, UPDATING, and INACTIVE_OWNER_ACCOUNT_CLOSED.
   */
  Status?: "COMPLETE" | "DELETING" | "UPDATING" | "INACTIVE_OWNER_ACCOUNT_CLOSED";
  /**
   * FirewallDomainListAssociationStatus
   */
  StatusMessage?: string;
  /**
   * The id of the creator request.
   */
  CreatorRequestId?: string;
  /**
   * Rfc3339TimeString
   */
  CreationTime?: string;
  /**
   * Rfc3339TimeString
   */
  ModificationTime?: string;
  /**
   * Tags
   */
  Tags?: Tag[];
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}
