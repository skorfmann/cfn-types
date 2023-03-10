/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type FilesystemPath = string;
export type LambdaFilesystemPermission = "ro" | "rw";
export type LambdaAddGroupOwnerBoolean = boolean;

/**
 * Resource for Greengrass component version.
 */
export interface AwsGreengrassv2Componentversion {
  Arn?: string;
  ComponentName?: string;
  ComponentVersion?: string;
  InlineRecipe?: string;
  LambdaFunction?: LambdaFunctionRecipeSource;
  Tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^(?!aws:)[a-zA-Z+-=._:/]{1,128}$".
     */
    [k: string]: string;
  };
}
export interface LambdaFunctionRecipeSource {
  LambdaArn?: string;
  ComponentName?: string;
  ComponentVersion?: string;
  ComponentPlatforms?: ComponentPlatform[];
  ComponentDependencies?: {
    [k: string]: ComponentDependencyRequirement;
  };
  ComponentLambdaParameters?: LambdaExecutionParameters;
}
export interface ComponentPlatform {
  Name?: string;
  Attributes?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".+".
     */
    [k: string]: string;
  };
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface ComponentDependencyRequirement {
  VersionRequirement?: string;
  DependencyType?: "SOFT" | "HARD";
}
export interface LambdaExecutionParameters {
  EventSources?: LambdaEventSource[];
  MaxQueueSize?: number;
  MaxInstancesCount?: number;
  MaxIdleTimeInSeconds?: number;
  TimeoutInSeconds?: number;
  StatusTimeoutInSeconds?: number;
  Pinned?: boolean;
  InputPayloadEncodingType?: "json" | "binary";
  ExecArgs?: string[];
  EnvironmentVariables?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".+".
     */
    [k: string]: string;
  };
  LinuxProcessParams?: LambdaLinuxProcessParams;
}
export interface LambdaEventSource {
  Topic?: string;
  Type?: "PUB_SUB" | "IOT_CORE";
}
export interface LambdaLinuxProcessParams {
  IsolationMode?: "GreengrassContainer" | "NoContainer";
  ContainerParams?: LambdaContainerParams;
}
export interface LambdaContainerParams {
  MemorySizeInKB?: number;
  MountROSysfs?: boolean;
  Volumes?: LambdaVolumeMount[];
  Devices?: LambdaDeviceMount[];
}
export interface LambdaVolumeMount {
  SourcePath?: FilesystemPath;
  DestinationPath?: FilesystemPath;
  Permission?: LambdaFilesystemPermission;
  AddGroupOwner?: LambdaAddGroupOwnerBoolean;
}
export interface LambdaDeviceMount {
  Path?: FilesystemPath;
  Permission?: LambdaFilesystemPermission;
  AddGroupOwner?: LambdaAddGroupOwnerBoolean;
}
