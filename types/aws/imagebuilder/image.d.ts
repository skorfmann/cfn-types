/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::ImageBuilder::Image
 */
export type AwsImagebuilderImage = {
  /**
   * The Amazon Resource Name (ARN) of the image.
   */
  Arn?: string;
  /**
   * The name of the image.
   */
  Name?: string;
  ImageTestsConfiguration?: ImageTestsConfiguration;
  /**
   * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
   */
  ImageRecipeArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
   */
  ContainerRecipeArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the distribution configuration.
   */
  DistributionConfigurationArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration.
   */
  InfrastructureConfigurationArn?: string;
  /**
   * The AMI ID of the EC2 AMI in current region.
   */
  ImageId?: string;
  /**
   * URI for containers created in current Region with default ECR image tag
   */
  ImageUri?: string;
  /**
   * Collects additional information about the image being created, including the operating system (OS) version and package list.
   */
  EnhancedImageMetadataEnabled?: boolean;
  ImageScanningConfiguration?: ImageScanningConfiguration;
  /**
   * The tags associated with the image.
   */
  Tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".{1,}".
     */
    [k: string]: string;
  };
} & {
  [k: string]: unknown;
};

/**
 * The image tests configuration used when creating this image.
 */
export interface ImageTestsConfiguration {
  /**
   * ImageTestsEnabled
   */
  ImageTestsEnabled?: boolean;
  /**
   * TimeoutMinutes
   */
  TimeoutMinutes?: number;
}
/**
 * Contains settings for vulnerability scans.
 */
export interface ImageScanningConfiguration {
  EcrConfiguration?: EcrConfiguration;
  /**
   * This sets whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.
   */
  ImageScanningEnabled?: boolean;
}
/**
 * Contains ECR settings for vulnerability scans.
 */
export interface EcrConfiguration {
  /**
   * Tags for Image Builder to apply the output container image that is scanned. Tags can help you identify and manage your scanned images.
   */
  ContainerTags?: string[];
  /**
   * The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don’t provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository to use for vulnerability scans for your output container images.
   */
  RepositoryName?: string;
}
