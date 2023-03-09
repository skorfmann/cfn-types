/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The JSON repository policy text to apply to the repository.
 */
export type LifecyclePolicyText = string;
/**
 * The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.
 */
export type RegistryId = string;
/**
 * The setting that determines whether images are scanned after being pushed to a repository.
 */
export type ScanOnPush = boolean;
/**
 * The encryption type to use.
 */
export type EncryptionType = "AES256" | "KMS";
/**
 * If you use the KMS encryption type, specify the CMK to use for encryption. The alias, key ID, or full ARN of the CMK can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed CMK for Amazon ECR will be used.
 */
export type KmsKey = string;

/**
 * The AWS::ECR::Repository resource specifies an Amazon Elastic Container Registry (Amazon ECR) repository, where users can push and pull Docker images. For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html
 */
export interface AwsEcrRepository {
  LifecyclePolicy?: LifecyclePolicy;
  /**
   * The name to use for the repository. The repository name may be specified on its own (such as nginx-web-app) or it can be prepended with a namespace to group the repository into a category (such as project-a/nginx-web-app). If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the repository name. For more information, see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html.
   */
  RepositoryName?: string;
  /**
   * The JSON repository policy text to apply to the repository. For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/RepositoryPolicyExamples.html in the Amazon Elastic Container Registry User Guide.
   */
  RepositoryPolicyText?:
    | {
        [k: string]: unknown;
      }
    | string;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
  Arn?: string;
  RepositoryUri?: string;
  /**
   * The image tag mutability setting for the repository.
   */
  ImageTagMutability?: "MUTABLE" | "IMMUTABLE";
  ImageScanningConfiguration?: ImageScanningConfiguration;
  EncryptionConfiguration?: EncryptionConfiguration;
}
/**
 * The LifecyclePolicy property type specifies a lifecycle policy. For information about lifecycle policy syntax, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html
 */
export interface LifecyclePolicy {
  LifecyclePolicyText?: LifecyclePolicyText;
  RegistryId?: RegistryId;
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
/**
 * The image scanning configuration for the repository. This setting determines whether images are scanned for known vulnerabilities after being pushed to the repository.
 */
export interface ImageScanningConfiguration {
  ScanOnPush?: ScanOnPush;
}
/**
 * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
 *
 * By default, when no encryption configuration is set or the AES256 encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES-256 encryption algorithm. This does not require any action on your part.
 *
 * For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html
 */
export interface EncryptionConfiguration {
  EncryptionType: EncryptionType;
  KmsKey?: KmsKey;
}