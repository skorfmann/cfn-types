/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The name of the image this version belongs to.
 */
export type ImageName = string;
/**
 * The Amazon Resource Name (ARN) of the parent image.
 */
export type ImageArn = string;
/**
 * The Amazon Resource Name (ARN) of the image version.
 */
export type ImageVersionArn = string;
/**
 * The registry path of the container image on which this image version is based.
 */
export type BaseImage = string;
/**
 * The registry path of the container image that contains this image version.
 */
export type ContainerImage = string;
/**
 * The version number of the image version.
 */
export type Version = number;

/**
 * Resource Type definition for AWS::SageMaker::ImageVersion
 */
export interface AwsSagemakerImageversion {
  ImageName: ImageName;
  ImageArn?: ImageArn;
  ImageVersionArn?: ImageVersionArn;
  BaseImage: BaseImage;
  ContainerImage?: ContainerImage;
  Version?: Version;
}
