/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::AppMesh::VirtualService
 */
export interface AwsAppmeshVirtualservice {
  Uid?: string;
  MeshName: string;
  MeshOwner?: string;
  ResourceOwner?: string;
  Id?: string;
  VirtualServiceName: string;
  Arn?: string;
  Spec: VirtualServiceSpec;
  Tags?: Tag[];
}
export interface VirtualServiceSpec {
  Provider?: VirtualServiceProvider;
}
export interface VirtualServiceProvider {
  VirtualNode?: VirtualNodeServiceProvider;
  VirtualRouter?: VirtualRouterServiceProvider;
}
export interface VirtualNodeServiceProvider {
  VirtualNodeName: string;
}
export interface VirtualRouterServiceProvider {
  VirtualRouterName: string;
}
export interface Tag {
  Value: string;
  Key: string;
}