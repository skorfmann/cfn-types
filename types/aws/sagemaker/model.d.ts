/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::SageMaker::Model
 */
export interface AwsSagemakerModel {
  ExecutionRoleArn: string;
  EnableNetworkIsolation?: boolean;
  PrimaryContainer?: ContainerDefinition;
  ModelName?: string;
  VpcConfig?: VpcConfig;
  Containers?: ContainerDefinition[];
  InferenceExecutionConfig?: InferenceExecutionConfig;
  Id?: string;
  Tags?: Tag[];
}
export interface ContainerDefinition {
  ImageConfig?: ImageConfig;
  InferenceSpecificationName?: string;
  ContainerHostname?: string;
  ModelPackageName?: string;
  Mode?: string;
  Environment?: {
    [k: string]: unknown;
  };
  ModelDataUrl?: string;
  Image?: string;
  MultiModelConfig?: MultiModelConfig;
}
export interface ImageConfig {
  RepositoryAuthConfig?: RepositoryAuthConfig;
  RepositoryAccessMode: string;
}
export interface RepositoryAuthConfig {
  RepositoryCredentialsProviderArn: string;
}
export interface MultiModelConfig {
  ModelCacheSetting?: string;
}
export interface VpcConfig {
  SecurityGroupIds: string[];
  Subnets: string[];
}
export interface InferenceExecutionConfig {
  Mode: string;
}
export interface Tag {
  Value: string;
  Key: string;
}
