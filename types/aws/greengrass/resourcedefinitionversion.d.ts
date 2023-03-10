/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Greengrass::ResourceDefinitionVersion
 */
export interface AwsGreengrassResourcedefinitionversion {
  ResourceDefinitionId: string;
  Resources: ResourceInstance[];
  Id?: string;
}
export interface ResourceInstance {
  ResourceDataContainer: ResourceDataContainer;
  Id: string;
  Name: string;
}
export interface ResourceDataContainer {
  LocalVolumeResourceData?: LocalVolumeResourceData;
  LocalDeviceResourceData?: LocalDeviceResourceData;
  S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;
  SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
  SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;
}
export interface LocalVolumeResourceData {
  SourcePath: string;
  DestinationPath: string;
  GroupOwnerSetting?: GroupOwnerSetting;
}
export interface GroupOwnerSetting {
  AutoAddGroupOwner: boolean;
  GroupOwner?: string;
}
export interface LocalDeviceResourceData {
  SourcePath: string;
  GroupOwnerSetting?: GroupOwnerSetting;
}
export interface S3MachineLearningModelResourceData {
  OwnerSetting?: ResourceDownloadOwnerSetting;
  DestinationPath: string;
  S3Uri: string;
}
export interface ResourceDownloadOwnerSetting {
  GroupPermission: string;
  GroupOwner: string;
}
export interface SecretsManagerSecretResourceData {
  ARN: string;
  AdditionalStagingLabelsToDownload?: string[];
}
export interface SageMakerMachineLearningModelResourceData {
  OwnerSetting?: ResourceDownloadOwnerSetting;
  SageMakerJobArn: string;
  DestinationPath: string;
}
