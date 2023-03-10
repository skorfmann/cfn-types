/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Schema describing various properties for ECS TaskDefinition
 */
export interface AwsEcsTaskdefinition {
  /**
   * The Amazon Resource Name (ARN) of the Amazon ECS task definition
   */
  TaskDefinitionArn?: string;
  Family?: string;
  ContainerDefinitions?: ContainerDefinition[];
  Cpu?: string;
  ExecutionRoleArn?: string;
  EphemeralStorage?: EphemeralStorage;
  InferenceAccelerators?: InferenceAccelerator[];
  Memory?: string;
  NetworkMode?: string;
  PlacementConstraints?: TaskDefinitionPlacementConstraint[];
  ProxyConfiguration?: ProxyConfiguration;
  RequiresCompatibilities?: string[];
  TaskRoleArn?: string;
  Volumes?: Volume[];
  PidMode?: string;
  RuntimePlatform?: RuntimePlatform;
  IpcMode?: string;
  Tags?: Tag[];
}
/**
 * List of container definitions that are passed to the Docker daemon on a container instance
 */
export interface ContainerDefinition {
  Command?: string[];
  Cpu?: number;
  DependsOn?: ContainerDependency[];
  DisableNetworking?: boolean;
  DnsSearchDomains?: string[];
  DnsServers?: string[];
  DockerLabels?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".{1,}".
     */
    [k: string]: string;
  };
  DockerSecurityOptions?: string[];
  EntryPoint?: string[];
  /**
   * The environment variables to pass to a container
   */
  Environment?: KeyValuePair[];
  /**
   * The list of one or more files that contain the environment variables to pass to a container
   */
  EnvironmentFiles?: EnvironmentFile[];
  Essential?: boolean;
  ExtraHosts?: HostEntry[];
  FirelensConfiguration?: FirelensConfiguration;
  HealthCheck?: HealthCheck;
  Hostname?: string;
  /**
   * The image used to start a container. This string is passed directly to the Docker daemon.
   */
  Image: string;
  Links?: string[];
  LinuxParameters?: LinuxParameters;
  LogConfiguration?: LogConfiguration;
  /**
   * The amount (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed.
   */
  Memory?: number;
  MemoryReservation?: number;
  MountPoints?: MountPoint[];
  /**
   * The name of a container. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed
   */
  Name: string;
  /**
   * Port mappings allow containers to access ports on the host container instance to send or receive traffic.
   */
  PortMappings?: PortMapping[];
  Privileged?: boolean;
  ReadonlyRootFilesystem?: boolean;
  RepositoryCredentials?: RepositoryCredentials;
  ResourceRequirements?: ResourceRequirement[];
  Secrets?: Secret[];
  StartTimeout?: number;
  StopTimeout?: number;
  Ulimits?: Ulimit[];
  User?: string;
  VolumesFrom?: VolumeFrom[];
  WorkingDirectory?: string;
  Interactive?: boolean;
  PseudoTerminal?: boolean;
  SystemControls?: SystemControl[];
}
export interface ContainerDependency {
  ContainerName?: string;
  Condition?: string;
}
export interface KeyValuePair {
  Name?: string;
  Value?: string;
}
export interface EnvironmentFile {
  Value?: string;
  Type?: string;
}
export interface HostEntry {
  Hostname?: string;
  IpAddress?: string;
}
export interface FirelensConfiguration {
  Type?: string;
  Options?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".{1,}".
     */
    [k: string]: string;
  };
}
/**
 * The health check command and associated configuration parameters for the container.
 */
export interface HealthCheck {
  /**
   * A string array representing the command that the container runs to determine if it is healthy.
   */
  Command?: string[];
  /**
   * The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds.
   */
  Interval?: number;
  /**
   * The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5 seconds.
   */
  Timeout?: number;
  /**
   * The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is three retries.
   */
  Retries?: number;
  /**
   * The optional grace period within which to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You may specify between 0 and 300 seconds. The startPeriod is disabled by default.
   */
  StartPeriod?: number;
}
export interface LinuxParameters {
  Capabilities?: KernelCapabilities;
  Devices?: Device[];
  InitProcessEnabled?: boolean;
  MaxSwap?: number;
  SharedMemorySize?: number;
  Swappiness?: number;
  Tmpfs?: Tmpfs[];
}
export interface KernelCapabilities {
  Add?: string[];
  Drop?: string[];
}
export interface Device {
  ContainerPath?: string;
  HostPath?: string;
  Permissions?: string[];
}
export interface Tmpfs {
  ContainerPath?: string;
  MountOptions?: string[];
  Size: number;
}
export interface LogConfiguration {
  LogDriver: string;
  Options?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".{1,}".
     */
    [k: string]: string;
  };
  SecretOptions?: Secret[];
}
export interface Secret {
  Name: string;
  ValueFrom: string;
}
export interface MountPoint {
  ContainerPath?: string;
  ReadOnly?: boolean;
  SourceVolume?: string;
}
export interface PortMapping {
  Name?: string;
  ContainerPort?: number;
  ContainerPortRange?: string;
  HostPort?: number;
  Protocol?: string;
  AppProtocol?: "http" | "http2" | "grpc";
}
export interface RepositoryCredentials {
  CredentialsParameter?: string;
}
export interface ResourceRequirement {
  Type: string;
  Value: string;
}
export interface Ulimit {
  HardLimit: number;
  Name: string;
  SoftLimit: number;
}
export interface VolumeFrom {
  ReadOnly?: boolean;
  SourceContainer?: string;
}
export interface SystemControl {
  Namespace?: string;
  Value?: string;
}
export interface EphemeralStorage {
  SizeInGiB?: number;
}
export interface InferenceAccelerator {
  DeviceName?: string;
  DeviceType?: string;
}
export interface TaskDefinitionPlacementConstraint {
  Type: string;
  Expression?: string;
}
export interface ProxyConfiguration {
  ContainerName: string;
  ProxyConfigurationProperties?: KeyValuePair[];
  Type?: string;
}
export interface Volume {
  DockerVolumeConfiguration?: DockerVolumeConfiguration;
  EFSVolumeConfiguration?: EFSVolumeConfiguration;
  Host?: HostVolumeProperties;
  Name?: string;
}
export interface DockerVolumeConfiguration {
  Autoprovision?: boolean;
  Driver?: string;
  DriverOpts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".{1,}".
     */
    [k: string]: string;
  };
  Labels?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".{1,}".
     */
    [k: string]: string;
  };
  Scope?: string;
}
export interface EFSVolumeConfiguration {
  FilesystemId: string;
  RootDirectory?: string;
  TransitEncryption?: "ENABLED" | "DISABLED";
  TransitEncryptionPort?: number;
  AuthorizationConfig?: AuthorizationConfig;
}
export interface AuthorizationConfig {
  IAM?: "ENABLED" | "DISABLED";
  AccessPointId?: string;
}
export interface HostVolumeProperties {
  SourcePath?: string;
}
export interface RuntimePlatform {
  CpuArchitecture?: string;
  OperatingSystemFamily?: string;
}
export interface Tag {
  Key?: string;
  Value?: string;
}
