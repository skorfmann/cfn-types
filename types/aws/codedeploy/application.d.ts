/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The AWS::CodeDeploy::Application resource creates an AWS CodeDeploy application
 */
export interface AwsCodedeployApplication {
  /**
   * A name for the application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name.
   */
  ApplicationName?: string;
  /**
   * The compute platform that CodeDeploy deploys the application to.
   */
  ComputePlatform?: string;
  /**
   * The metadata that you apply to CodeDeploy applications to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define.
   */
  Tags?: Tag[];
}
export interface Tag {
  Value: string;
  Key: string;
}
