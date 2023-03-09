/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The AWS::KMS::Alias resource specifies a display name for an AWS KMS key in AWS Key Management Service (AWS KMS). You can use an alias to identify an AWS KMS key in cryptographic operations.
 */
export interface AwsKmsAlias {
  /**
   * Specifies the alias name. This value must begin with alias/ followed by a name, such as alias/ExampleAlias. The alias name cannot begin with alias/aws/. The alias/aws/ prefix is reserved for AWS managed keys.
   */
  AliasName: string;
  /**
   * Identifies the AWS KMS key to which the alias refers. Specify the key ID or the Amazon Resource Name (ARN) of the AWS KMS key. You cannot specify another alias. For help finding the key ID and ARN, see Finding the Key ID and ARN in the AWS Key Management Service Developer Guide.
   */
  TargetKeyId: string;
}