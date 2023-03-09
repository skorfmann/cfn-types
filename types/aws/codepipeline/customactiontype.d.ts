/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The AWS::CodePipeline::CustomActionType resource creates a custom action for activities that aren't included in the CodePipeline default actions, such as running an internally developed build process or a test suite. You can use these custom actions in the stage of a pipeline.
 */
export interface AwsCodepipelineCustomactiontype {
  /**
   * The category of the custom action, such as a build action or a test action.
   */
  Category: string;
  /**
   * The configuration properties for the custom action.
   */
  ConfigurationProperties?: ConfigurationProperties[];
  InputArtifactDetails: ArtifactDetails;
  OutputArtifactDetails: ArtifactDetails1;
  /**
   * The provider of the service used in the custom action, such as AWS CodeDeploy.
   */
  Provider: string;
  Settings?: Settings;
  /**
   * Any tags assigned to the custom action.
   */
  Tags?: Tag[];
  /**
   * The version identifier of the custom action.
   */
  Version: string;
  Id?: string;
}
/**
 * The configuration properties for the custom action.
 */
export interface ConfigurationProperties {
  /**
   * The description of the action configuration property that is displayed to users.
   */
  Description?: string;
  /**
   * Whether the configuration property is a key.
   */
  Key: boolean;
  /**
   * The name of the action configuration property.
   */
  Name: string;
  /**
   * Indicates that the property is used with PollForJobs. When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret.If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to other restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens.
   */
  Queryable?: boolean;
  /**
   * Whether the configuration property is a required value.
   */
  Required: boolean;
  /**
   * Whether the configuration property is secret. Secrets are hidden from all calls except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and PollForThirdPartyJobs.
   */
  Secret: boolean;
  /**
   * The type of the configuration property.
   */
  Type?: string;
}
/**
 * The details of the input artifact for the action, such as its commit ID.
 */
export interface ArtifactDetails {
  /**
   * The maximum number of artifacts allowed for the action type.
   */
  MaximumCount: number;
  /**
   * The minimum number of artifacts allowed for the action type.
   */
  MinimumCount: number;
}
/**
 * The details of the output artifact of the action, such as its commit ID.
 */
export interface ArtifactDetails1 {
  /**
   * The maximum number of artifacts allowed for the action type.
   */
  MaximumCount: number;
  /**
   * The minimum number of artifacts allowed for the action type.
   */
  MinimumCount: number;
}
/**
 * URLs that provide users information about this custom action.
 */
export interface Settings {
  /**
   * The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group. This link is provided as part of the action display in the pipeline.
   */
  EntityUrlTemplate?: string;
  /**
   * The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for AWS CodeDeploy. This link is shown on the pipeline view page in the AWS CodePipeline console and provides a link to the execution entity of the external action.
   */
  ExecutionUrlTemplate?: string;
  /**
   * The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.
   */
  RevisionUrlTemplate?: string;
  /**
   * The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.
   */
  ThirdPartyConfigurationUrl?: string;
}
export interface Tag {
  Value: string;
  Key: string;
}
