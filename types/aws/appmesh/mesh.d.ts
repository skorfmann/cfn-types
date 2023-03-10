/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::AppMesh::Mesh
 */
export interface AwsAppmeshMesh {
  Uid?: string;
  MeshName?: string;
  MeshOwner?: string;
  ResourceOwner?: string;
  Id?: string;
  Arn?: string;
  Spec?: MeshSpec;
  Tags?: Tag[];
}
export interface MeshSpec {
  EgressFilter?: EgressFilter;
  ServiceDiscovery?: MeshServiceDiscovery;
}
export interface EgressFilter {
  Type: string;
}
export interface MeshServiceDiscovery {
  IpPreference?: string;
}
export interface Tag {
  Value: string;
  Key: string;
}
