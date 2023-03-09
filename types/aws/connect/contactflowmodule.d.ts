/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Connect::ContactFlowModule.
 */
export interface AwsConnectContactflowmodule {
  /**
   * The identifier of the Amazon Connect instance (ARN).
   */
  InstanceArn: string;
  /**
   * The identifier of the contact flow module (ARN).
   */
  ContactFlowModuleArn?: string;
  /**
   * The name of the contact flow module.
   */
  Name: string;
  /**
   * The content of the contact flow module in JSON format.
   */
  Content: string;
  /**
   * The description of the contact flow module.
   */
  Description?: string;
  /**
   * The state of the contact flow module.
   */
  State?: "ACTIVE" | "ARCHIVED";
  /**
   * The status of the contact flow module.
   */
  Status?: "PUBLISHED" | "SAVED";
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
   * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}
