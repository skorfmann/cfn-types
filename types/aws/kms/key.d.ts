/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The AWS::KMS::Key resource specifies an AWS KMS key in AWS Key Management Service (AWS KMS). Authorized users can use the AWS KMS key to encrypt and decrypt small amounts of data (up to 4096 bytes), but they are more commonly used to generate data keys. You can also use AWS KMS keys to encrypt data stored in AWS services that are integrated with AWS KMS or within their applications.
 */
export interface AwsKmsKey {
  /**
   * A description of the AWS KMS key. Use a description that helps you to distinguish this AWS KMS key from others in the account, such as its intended use.
   */
  Description?: string;
  /**
   * Specifies whether the AWS KMS key is enabled. Disabled AWS KMS keys cannot be used in cryptographic operations.
   */
  Enabled?: boolean;
  /**
   * Enables automatic rotation of the key material for the specified AWS KMS key. By default, automation key rotation is not enabled.
   */
  EnableKeyRotation?: boolean;
  /**
   * The key policy that authorizes use of the AWS KMS key. The key policy must observe the following rules.
   */
  KeyPolicy:
    | {
        [k: string]: unknown;
      }
    | string;
  /**
   * Determines the cryptographic operations for which you can use the AWS KMS key. The default value is ENCRYPT_DECRYPT. This property is required only for asymmetric AWS KMS keys. You can't change the KeyUsage value after the AWS KMS key is created.
   */
  KeyUsage?: "ENCRYPT_DECRYPT" | "SIGN_VERIFY" | "GENERATE_VERIFY_MAC";
  /**
   * Specifies the type of AWS KMS key to create. The default value is SYMMETRIC_DEFAULT. This property is required only for asymmetric AWS KMS keys. You can't change the KeySpec value after the AWS KMS key is created.
   */
  KeySpec?:
    | "SYMMETRIC_DEFAULT"
    | "RSA_2048"
    | "RSA_3072"
    | "RSA_4096"
    | "ECC_NIST_P256"
    | "ECC_NIST_P384"
    | "ECC_NIST_P521"
    | "ECC_SECG_P256K1"
    | "HMAC_224"
    | "HMAC_256"
    | "HMAC_384"
    | "HMAC_512"
    | "SM2";
  /**
   * Specifies whether the AWS KMS key should be Multi-Region. You can't change the MultiRegion value after the AWS KMS key is created.
   */
  MultiRegion?: boolean;
  /**
   * Specifies the number of days in the waiting period before AWS KMS deletes an AWS KMS key that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.
   */
  PendingWindowInDays?: number;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  Arn?: string;
  KeyId?: string;
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}