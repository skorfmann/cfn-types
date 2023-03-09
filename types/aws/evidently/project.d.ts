/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Destinations for data.
 */
export type DataDeliveryObject = {
  S3?: S3Destination;
  LogGroup?: string;
} & DataDeliveryObject1;
export type DataDeliveryObject1 = {
  [k: string]: unknown;
};

/**
 * Resource Type definition for AWS::Evidently::Project
 */
export interface AwsEvidentlyProject {
  Arn?: string;
  Name: string;
  Description?: string;
  DataDelivery?: DataDeliveryObject;
  AppConfigResource?: AppConfigResourceObject;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
}
export interface S3Destination {
  BucketName: string;
  Prefix?: string;
}
export interface AppConfigResourceObject {
  ApplicationId: string;
  EnvironmentId: string;
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
