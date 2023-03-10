/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Batch::JobDefinition
 */
export interface AwsBatchJobdefinition {
  Parameters?: {
    [k: string]: unknown;
  };
  Timeout?: Timeout;
  JobDefinitionName?: string;
  PropagateTags?: boolean;
  PlatformCapabilities?: string[];
  EksProperties?: EksProperties;
  Type: string;
  NodeProperties?: NodeProperties;
  SchedulingPriority?: number;
  ContainerProperties?: ContainerProperties;
  Id?: string;
  RetryStrategy?: RetryStrategy;
  Tags?: {
    [k: string]: unknown;
  };
}
export interface Timeout {
  AttemptDurationSeconds?: number;
}
export interface EksProperties {
  PodProperties?: PodProperties;
}
export interface PodProperties {
  Containers?: EksContainer[];
  ServiceAccountName?: string;
  Volumes?: EksVolume[];
  HostNetwork?: boolean;
  DnsPolicy?: string;
}
export interface EksContainer {
  Args?: string[];
  VolumeMounts?: EksContainerVolumeMount[];
  ImagePullPolicy?: string;
  Command?: string[];
  SecurityContext?: SecurityContext;
  Resources?: Resources;
  Image: string;
  Env?: EksContainerEnvironmentVariable[];
  Name?: string;
}
export interface EksContainerVolumeMount {
  MountPath?: string;
  ReadOnly?: boolean;
  Name?: string;
}
export interface SecurityContext {
  RunAsUser?: number;
  RunAsGroup?: number;
  RunAsNonRoot?: boolean;
  Privileged?: boolean;
  ReadOnlyRootFilesystem?: boolean;
}
export interface Resources {
  Requests?: {
    [k: string]: unknown;
  };
  Limits?: {
    [k: string]: unknown;
  };
}
export interface EksContainerEnvironmentVariable {
  Value?: string;
  Name: string;
}
export interface EksVolume {
  Secret?: Secret;
  EmptyDir?: EmptyDir;
  HostPath?: HostPath;
  Name: string;
}
export interface Secret {
  ValueFrom: string;
  Name: string;
}
export interface EmptyDir {
  Medium?: string;
  SizeLimit?: string;
}
export interface HostPath {
  Path?: string;
}
export interface NodeProperties {
  MainNode: number;
  NodeRangeProperties: NodeRangeProperty[];
  NumNodes: number;
}
export interface NodeRangeProperty {
  Container?: ContainerProperties;
  TargetNodes: string;
}
export interface ContainerProperties {
  User?: string;
  Secrets?: Secret[];
  Memory?: number;
  Privileged?: boolean;
  LinuxParameters?: LinuxParameters;
  FargatePlatformConfiguration?: FargatePlatformConfiguration;
  JobRoleArn?: string;
  ReadonlyRootFilesystem?: boolean;
  Vcpus?: number;
  Image: string;
  ResourceRequirements?: ResourceRequirement[];
  LogConfiguration?: LogConfiguration;
  MountPoints?: MountPoints[];
  ExecutionRoleArn?: string;
  Volumes?: Volumes[];
  Command?: string[];
  Environment?: Environment[];
  Ulimits?: Ulimit[];
  NetworkConfiguration?: NetworkConfiguration;
  InstanceType?: string;
}
export interface LinuxParameters {
  Swappiness?: number;
  Tmpfs?: Tmpfs[];
  SharedMemorySize?: number;
  Devices?: Device[];
  InitProcessEnabled?: boolean;
  MaxSwap?: number;
}
export interface Tmpfs {
  ContainerPath: string;
  MountOptions?: string[];
  Size: number;
}
export interface Device {
  Permissions?: string[];
  HostPath?: string;
  ContainerPath?: string;
}
export interface FargatePlatformConfiguration {
  PlatformVersion?: string;
}
export interface ResourceRequirement {
  Value?: string;
  Type?: string;
}
export interface LogConfiguration {
  SecretOptions?: Secret[];
  Options?: {
    [k: string]: unknown;
  };
  LogDriver: string;
}
export interface MountPoints {
  ReadOnly?: boolean;
  SourceVolume?: string;
  ContainerPath?: string;
}
export interface Volumes {
  Host?: VolumesHost;
  EfsVolumeConfiguration?: EfsVolumeConfiguration;
  Name?: string;
}
export interface VolumesHost {
  SourcePath?: string;
}
export interface EfsVolumeConfiguration {
  FileSystemId: string;
  TransitEncryption?: string;
  RootDirectory?: string;
  TransitEncryptionPort?: number;
  AuthorizationConfig?: AuthorizationConfig;
}
export interface AuthorizationConfig {
  Iam?: string;
  AccessPointId?: string;
}
export interface Environment {
  Value?: string;
  Name?: string;
}
export interface Ulimit {
  SoftLimit: number;
  HardLimit: number;
  Name: string;
}
export interface NetworkConfiguration {
  AssignPublicIp?: string;
}
export interface RetryStrategy {
  EvaluateOnExit?: EvaluateOnExit[];
  Attempts?: number;
}
export interface EvaluateOnExit {
  Action: string;
  OnStatusReason?: string;
  OnExitCode?: string;
  OnReason?: string;
}
