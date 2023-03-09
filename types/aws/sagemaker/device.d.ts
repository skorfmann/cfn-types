/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::SageMaker::Device
 */
export interface AwsSagemakerDevice {
  /**
   * The name of the edge device fleet
   */
  DeviceFleetName: string;
  Device?: Device;
  /**
   * Associate tags with the resource
   */
  Tags?: Tag[];
}
/**
 * The Edge Device you want to register against a device fleet
 */
export interface Device {
  /**
   * Description of the device
   */
  Description?: string;
  /**
   * The name of the device
   */
  DeviceName: string;
  /**
   * AWS Internet of Things (IoT) object name.
   */
  IotThingName?: string;
}
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The key value of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}