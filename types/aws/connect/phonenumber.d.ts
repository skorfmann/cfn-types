/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Connect::PhoneNumber
 */
export interface AwsConnectPhonenumber {
  /**
   * The ARN of the target the phone number is claimed to.
   */
  TargetArn: string;
  /**
   * The phone number ARN
   */
  PhoneNumberArn?: string;
  /**
   * The description of the phone number.
   */
  Description?: string;
  /**
   * The phone number type, either TOLL_FREE or DID.
   */
  Type: string;
  /**
   * The phone number country code.
   */
  CountryCode: string;
  /**
   * The phone number prefix.
   */
  Prefix?: string;
  /**
   * The phone number e164 address.
   */
  Address?: string;
  /**
   * One or more tags.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
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
   * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}