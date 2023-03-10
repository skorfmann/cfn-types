/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::SageMaker::CodeRepository
 */
export interface AwsSagemakerCoderepository {
  GitConfig: GitConfig;
  CodeRepositoryName?: string;
  Id?: string;
  Tags?: Tag[];
}
export interface GitConfig {
  SecretArn?: string;
  RepositoryUrl: string;
  Branch?: string;
}
export interface Tag {
  Value: string;
  Key: string;
}
