/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The repository filter to be applied for replication.
 */
export type Filter = string;
/**
 * Type of repository filter
 */
export type FilterType = "PREFIX_MATCH";
/**
 * A Region to replicate to.
 */
export type Region = string;
/**
 * The account ID of the destination registry to replicate to.
 */
export type RegistryId = string;

/**
 * The AWS::ECR::ReplicationConfiguration resource configures the replication destinations for an Amazon Elastic Container Registry (Amazon Private ECR). For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/replication.html
 */
export interface AwsEcrReplicationconfiguration {
  ReplicationConfiguration: ReplicationConfiguration;
  /**
   * The RegistryId associated with the aws account.
   */
  RegistryId?: string;
}
/**
 * An object representing the replication configuration for a registry.
 */
export interface ReplicationConfiguration {
  /**
   * An array of objects representing the replication rules for a replication configuration. A replication configuration may contain a maximum of 10 rules.
   *
   * @minItems 0
   * @maxItems 10
   */
  Rules:
    | []
    | [ReplicationRule]
    | [ReplicationRule, ReplicationRule]
    | [ReplicationRule, ReplicationRule, ReplicationRule]
    | [ReplicationRule, ReplicationRule, ReplicationRule, ReplicationRule]
    | [ReplicationRule, ReplicationRule, ReplicationRule, ReplicationRule, ReplicationRule]
    | [ReplicationRule, ReplicationRule, ReplicationRule, ReplicationRule, ReplicationRule, ReplicationRule]
    | [
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule
      ]
    | [
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule
      ]
    | [
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule
      ]
    | [
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule,
        ReplicationRule
      ];
}
/**
 * An array of objects representing the details of a replication destination.
 */
export interface ReplicationRule {
  /**
   * An array of objects representing the details of a repository filter.
   *
   * @minItems 0
   * @maxItems 100
   */
  RepositoryFilters?: RepositoryFilter[];
  /**
   * An array of objects representing the details of a replication destination.
   *
   * @minItems 1
   * @maxItems 25
   */
  Destinations: [ReplicationDestination, ...ReplicationDestination[]];
}
/**
 * An array of objects representing the details of a repository filter.
 */
export interface RepositoryFilter {
  Filter: Filter;
  FilterType: FilterType;
}
/**
 * An array of objects representing the details of a replication destination.
 */
export interface ReplicationDestination {
  Region: Region;
  RegistryId: RegistryId;
}
