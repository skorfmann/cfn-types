/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::IAM::SAMLProvider
 */
export interface AwsIamSamlprovider {
  Name?: string;
  SamlMetadataDocument: string;
  /**
   * Amazon Resource Name (ARN) of the SAML provider
   */
  Arn?: string;
  Tags?: Tag[];
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
}
