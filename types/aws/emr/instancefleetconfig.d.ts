/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::EMR::InstanceFleetConfig
 */
export interface AwsEmrInstancefleetconfig {
  InstanceFleetType: string;
  TargetOnDemandCapacity?: number;
  ClusterId: string;
  TargetSpotCapacity?: number;
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
  Id?: string;
  InstanceTypeConfigs?: InstanceTypeConfig[];
  Name?: string;
}
export interface InstanceFleetProvisioningSpecifications {
  SpotSpecification?: SpotProvisioningSpecification;
  OnDemandSpecification?: OnDemandProvisioningSpecification;
}
export interface SpotProvisioningSpecification {
  AllocationStrategy?: string;
  TimeoutDurationMinutes: number;
  TimeoutAction: string;
  BlockDurationMinutes?: number;
}
export interface OnDemandProvisioningSpecification {
  AllocationStrategy: string;
}
export interface InstanceTypeConfig {
  BidPrice?: string;
  WeightedCapacity?: number;
  EbsConfiguration?: EbsConfiguration;
  BidPriceAsPercentageOfOnDemandPrice?: number;
  CustomAmiId?: string;
  Configurations?: Configuration[];
  InstanceType: string;
}
export interface EbsConfiguration {
  EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[];
  EbsOptimized?: boolean;
}
export interface EbsBlockDeviceConfig {
  VolumeSpecification: VolumeSpecification;
  VolumesPerInstance?: number;
}
export interface VolumeSpecification {
  SizeInGB: number;
  VolumeType: string;
  Iops?: number;
}
export interface Configuration {
  ConfigurationProperties?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "[a-zA-Z0-9]+".
     */
    [k: string]: string;
  };
  Configurations?: Configuration[];
  Classification?: string;
}
