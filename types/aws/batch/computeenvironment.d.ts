/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Batch::ComputeEnvironment
 */
export interface AwsBatchComputeenvironment {
  ComputeEnvironmentArn?: string;
  ComputeEnvironmentName?: string;
  ComputeResources?: ComputeResources;
  ReplaceComputeEnvironment?: boolean;
  ServiceRole?: string;
  State?: string;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string;
  };
  Type: string;
  UpdatePolicy?: UpdatePolicy;
  UnmanagedvCpus?: number;
  EksConfiguration?: EksConfiguration;
}
export interface ComputeResources {
  AllocationStrategy?: string;
  BidPercentage?: number;
  DesiredvCpus?: number;
  Ec2Configuration?: Ec2ConfigurationObject[];
  Ec2KeyPair?: string;
  ImageId?: string;
  InstanceRole?: string;
  InstanceTypes?: string[];
  LaunchTemplate?: LaunchTemplateSpecification;
  MaxvCpus: number;
  MinvCpus?: number;
  PlacementGroup?: string;
  SecurityGroupIds?: string[];
  SpotIamFleetRole?: string;
  Subnets: string[];
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string;
  };
  Type: string;
  UpdateToLatestImageVersion?: boolean;
}
export interface Ec2ConfigurationObject {
  ImageIdOverride?: string;
  ImageType: string;
  ImageKubernetesVersion?: string;
}
export interface LaunchTemplateSpecification {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version?: string;
}
export interface UpdatePolicy {
  TerminateJobsOnUpdate?: boolean;
  JobExecutionTimeoutMinutes?: number;
}
export interface EksConfiguration {
  EksClusterArn: boolean & string;
  KubernetesNamespace: boolean & string;
}
