/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Cloud9::EnvironmentEC2
 */
export interface AwsCloud9Environmentec2 {
  Repositories?: Repository[];
  OwnerArn?: string;
  Description?: string;
  ConnectionType?: string;
  AutomaticStopTimeMinutes?: number;
  ImageId?: string;
  SubnetId?: string;
  Id?: string;
  Arn?: string;
  InstanceType: string;
  Tags?: Tag[];
  Name?: string;
}
export interface Repository {
  RepositoryUrl: string;
  PathComponent: string;
}
export interface Tag {
  Value: string;
  Key: string;
}
