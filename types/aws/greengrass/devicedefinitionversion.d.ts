/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Greengrass::DeviceDefinitionVersion
 */
export interface AwsGreengrassDevicedefinitionversion {
  Id?: string;
  DeviceDefinitionId: string;
  Devices: Device[];
}
export interface Device {
  SyncShadow?: boolean;
  ThingArn: string;
  Id: string;
  CertificateArn: string;
}
