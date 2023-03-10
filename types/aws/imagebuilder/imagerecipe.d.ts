/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::ImageBuilder::ImageRecipe
 */
export interface AwsImagebuilderImagerecipe {
  /**
   * The Amazon Resource Name (ARN) of the image recipe.
   */
  Arn?: string;
  /**
   * The name of the image recipe.
   */
  Name: string;
  /**
   * The description of the image recipe.
   */
  Description?: string;
  /**
   * The version of the image recipe.
   */
  Version: string;
  /**
   * The components of the image recipe.
   */
  Components: ComponentConfiguration[];
  /**
   * The block device mappings to apply when creating images from this recipe.
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[];
  /**
   * The parent image of the image recipe.
   */
  ParentImage: string;
  /**
   * The working directory to be used during build and test workflows.
   */
  WorkingDirectory?: string;
  AdditionalInstanceConfiguration?: AdditionalInstanceConfiguration;
  /**
   * The tags of the image recipe.
   */
  Tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".{1,}".
     */
    [k: string]: string;
  };
}
/**
 * Configuration details of the component.
 */
export interface ComponentConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the component.
   */
  ComponentArn?: string;
  /**
   * A group of parameter settings that are used to configure the component for a specific recipe.
   */
  Parameters?: ComponentParameter[];
}
/**
 * Contains a key/value pair that sets the named component parameter.
 */
export interface ComponentParameter {
  /**
   * The name of the component parameter to set.
   */
  Name: string;
  /**
   * Sets the value for the named component parameter.
   */
  Value: string[];
}
/**
 * Defines block device mappings for the instance used to configure your image.
 */
export interface InstanceBlockDeviceMapping {
  /**
   * The device to which these mappings apply.
   */
  DeviceName?: string;
  /**
   * Use to manage instance ephemeral devices.
   */
  VirtualName?: string;
  /**
   * Use to remove a mapping from the parent image.
   */
  NoDevice?: string;
  Ebs?: EbsInstanceBlockDeviceSpecification;
}
/**
 * Use to manage Amazon EBS-specific configuration for this mapping.
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * Use to configure device encryption.
   */
  Encrypted?: boolean;
  /**
   * Use to configure delete on termination of the associated device.
   */
  DeleteOnTermination?: boolean;
  /**
   * Use to configure device IOPS.
   */
  Iops?: number;
  /**
   * Use to configure the KMS key to use when encrypting the device.
   */
  KmsKeyId?: string;
  /**
   * The snapshot that defines the device contents.
   */
  SnapshotId?: string;
  /**
   * For GP3 volumes only - The throughput in MiB/s that the volume supports.
   */
  Throughput?: number;
  /**
   * Use to override the device's volume size.
   */
  VolumeSize?: number;
  /**
   * Use to override the device's volume type.
   */
  VolumeType?: "standard" | "io1" | "io2" | "gp2" | "gp3" | "sc1" | "st1";
}
/**
 * Specify additional settings and launch scripts for your build instances.
 */
export interface AdditionalInstanceConfiguration {
  SystemsManagerAgent?: SystemsManagerAgent;
  /**
   * Use this property to provide commands or a command script to run when you launch your build instance.
   */
  UserDataOverride?: string;
}
/**
 * Contains settings for the SSM agent on your build instance.
 */
export interface SystemsManagerAgent {
  /**
   * Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI. If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false.
   */
  UninstallAfterBuild?: boolean;
}
