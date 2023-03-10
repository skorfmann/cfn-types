/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Schema for AWS::EKS::FargateProfile
 */
export interface AwsEksFargateprofile {
  /**
   * Name of the Cluster
   */
  ClusterName: string;
  /**
   * Name of FargateProfile
   */
  FargateProfileName?: string;
  /**
   * The IAM policy arn for pods
   */
  PodExecutionRoleArn: string;
  Arn?: string;
  Subnets?: string[];
  /**
   * @minItems 1
   */
  Selectors: [Selector, ...Selector[]];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
}
export interface Selector {
  Namespace: string;
  Labels?: Label[];
}
/**
 * A key-value pair to associate with a pod.
 */
export interface Label {
  /**
   * The key name of the label.
   */
  Key: string;
  /**
   * The value for the label.
   */
  Value: string;
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
