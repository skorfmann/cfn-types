/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A module that has been registered in the CloudFormation registry.
 */
export interface AwsCloudformationModuleversion {
  /**
   * The Amazon Resource Name (ARN) of the module.
   */
  Arn?: string;
  /**
   * The description of the registered module.
   */
  Description?: string;
  /**
   * The URL of a page providing detailed documentation for this module.
   */
  DocumentationUrl?: string;
  /**
   * The name of the module being registered.
   *
   * Recommended module naming pattern: company_or_organization::service::type::MODULE.
   */
  ModuleName: string;
  /**
   * The url to the S3 bucket containing the schema and template fragment for the module you want to register.
   */
  ModulePackage: string;
  /**
   * Indicator of whether this module version is the current default version
   */
  IsDefaultVersion?: boolean;
  /**
   * The schema defining input parameters to and resources generated by the module.
   */
  Schema?: string;
  /**
   * The time that the specified module version was registered.
   */
  TimeCreated?: string;
  /**
   * The version ID of the module represented by this module instance.
   */
  VersionId?: string;
  /**
   * The scope at which the type is visible and usable in CloudFormation operations.
   *
   * The only allowed value at present is:
   *
   * PRIVATE: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you register as PRIVATE.
   */
  Visibility?: "PRIVATE";
}
