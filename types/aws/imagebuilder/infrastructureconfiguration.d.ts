/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::ImageBuilder::InfrastructureConfiguration
 */
export interface AwsImagebuilderInfrastructureconfiguration {
  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration.
   */
  Arn?: string;
  /**
   * The name of the infrastructure configuration.
   */
  Name: string;
  /**
   * The description of the infrastructure configuration.
   */
  Description?: string;
  /**
   * The instance types of the infrastructure configuration.
   */
  InstanceTypes?: string[];
  /**
   * The security group IDs of the infrastructure configuration.
   */
  SecurityGroupIds?: string[];
  Logging?: Logging;
  /**
   * The subnet ID of the infrastructure configuration.
   */
  SubnetId?: string;
  /**
   * The EC2 key pair of the infrastructure configuration..
   */
  KeyPair?: string;
  /**
   * The terminate instance on failure configuration of the infrastructure configuration.
   */
  TerminateInstanceOnFailure?: boolean;
  /**
   * The instance profile of the infrastructure configuration.
   */
  InstanceProfileName: string;
  InstanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration.
   */
  SnsTopicArn?: string;
  /**
   * The tags attached to the resource created by Image Builder.
   */
  ResourceTags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".{1,}".
     */
    [k: string]: string;
  };
  /**
   * The tags associated with the component.
   */
  Tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".{1,}".
     */
    [k: string]: string;
  };
}
/**
 * The logging configuration of the infrastructure configuration.
 */
export interface Logging {
  S3Logs?: S3Logs;
}
/**
 * The S3 path in which to store the logs.
 */
export interface S3Logs {
  /**
   * S3BucketName
   */
  S3BucketName?: string;
  /**
   * S3KeyPrefix
   */
  S3KeyPrefix?: string;
}
/**
 * The instance metadata option settings for the infrastructure configuration.
 */
export interface InstanceMetadataOptions {
  /**
   * Limit the number of hops that an instance metadata request can traverse to reach its destination.
   */
  HttpPutResponseHopLimit?: number;
  /**
   * Indicates whether a signed token header is required for instance metadata retrieval requests. The values affect the response as follows:
   */
  HttpTokens?: "required" | "optional";
}
