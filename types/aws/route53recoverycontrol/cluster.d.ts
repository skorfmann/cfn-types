/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * AWS Route53 Recovery Control Cluster resource schema
 */
export interface AwsRoute53RecoverycontrolCluster {
  /**
   * Name of a Cluster. You can use any non-white space character in the name
   */
  Name: string;
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   */
  ClusterArn?: string;
  /**
   * Deployment status of a resource. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
   */
  Status?: "PENDING" | "DEPLOYED" | "PENDING_DELETION";
  /**
   * Endpoints for the cluster.
   */
  ClusterEndpoints?: ClusterEndpoint[];
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
}
export interface ClusterEndpoint {
  Endpoint?: string;
  Region?: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
