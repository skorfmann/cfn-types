/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type VpcId = string;

/**
 * Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across AWS accounts.
 */
export interface AwsRedshiftEndpointauthorization {
  /**
   * The AWS account ID of the cluster owner.
   */
  Grantor?: string;
  /**
   * The AWS account ID of the grantee of the cluster.
   */
  Grantee?: string;
  /**
   * The cluster identifier.
   */
  ClusterIdentifier: string;
  /**
   * The time (UTC) when the authorization was created.
   */
  AuthorizeTime?: string;
  /**
   * The status of the cluster.
   */
  ClusterStatus?: string;
  /**
   * The status of the authorization action.
   */
  Status?: string;
  /**
   * Indicates whether all VPCs in the grantee account are allowed access to the cluster.
   */
  AllowedAllVPCs?: boolean;
  /**
   * The VPCs allowed access to the cluster.
   */
  AllowedVPCs?: VpcId[];
  /**
   * The number of Redshift-managed VPC endpoints created for the authorization.
   */
  EndpointCount?: number;
  /**
   * The target AWS account ID to grant or revoke access for.
   */
  Account: string;
  /**
   * The virtual private cloud (VPC) identifiers to grant or revoke access to.
   */
  VpcIds?: VpcId[];
  /**
   *  Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.
   */
  Force?: boolean;
}