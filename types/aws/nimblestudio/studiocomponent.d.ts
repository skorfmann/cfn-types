/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * <p>The configuration of the studio component, based on component type.</p>
 */
export type StudioComponentConfiguration =
  | ActiveDirectoryConfiguration
  | ComputeFarmConfiguration
  | LicenseServiceConfiguration
  | SharedFileSystemConfiguration;
export type LaunchProfilePlatform = "LINUX" | "WINDOWS";
export type StudioComponentInitializationScriptRunContext = "SYSTEM_INITIALIZATION" | "USER_INITIALIZATION";
export type StudioComponentSubtype =
  | "AWS_MANAGED_MICROSOFT_AD"
  | "AMAZON_FSX_FOR_WINDOWS"
  | "AMAZON_FSX_FOR_LUSTRE"
  | "CUSTOM";
export type StudioComponentType =
  | "ACTIVE_DIRECTORY"
  | "SHARED_FILE_SYSTEM"
  | "COMPUTE_FARM"
  | "LICENSE_SERVICE"
  | "CUSTOM";

/**
 * Represents a studio component that connects a non-Nimble Studio resource in your account to your studio
 */
export interface AwsNimblestudioStudiocomponent {
  Configuration?: StudioComponentConfiguration;
  /**
   * <p>The description.</p>
   */
  Description?: string;
  /**
   * <p>The EC2 security groups that control access to the studio component.</p>
   *
   * @minItems 0
   * @maxItems 30
   */
  Ec2SecurityGroupIds?: string[];
  /**
   * <p>Initialization scripts for studio components.</p>
   */
  InitializationScripts?: StudioComponentInitializationScript[];
  /**
   * <p>The name for the studio component.</p>
   */
  Name: string;
  RuntimeRoleArn?: string;
  /**
   * <p>Parameters for the studio component scripts.</p>
   *
   * @minItems 0
   * @maxItems 30
   */
  ScriptParameters?: ScriptParameterKeyValue[];
  SecureInitializationRoleArn?: string;
  StudioComponentId?: string;
  /**
   * <p>The studio ID. </p>
   */
  StudioId: string;
  Subtype?: StudioComponentSubtype;
  Tags?: Tags;
  Type: StudioComponentType;
}
export interface ActiveDirectoryConfiguration {
  ActiveDirectoryConfiguration: ActiveDirectoryConfiguration1;
}
/**
 * <p>The configuration for a Microsoft Active Directory (Microsoft AD) studio
 *             resource.</p>
 */
export interface ActiveDirectoryConfiguration1 {
  /**
   * <p>A collection of custom attributes for an Active Directory computer.</p>
   *
   * @minItems 0
   * @maxItems 50
   */
  ComputerAttributes?: ActiveDirectoryComputerAttribute[];
  /**
   * <p>The directory ID of the Directory Service for Microsoft Active Directory to access
   *             using this studio component.</p>
   */
  DirectoryId?: string;
  /**
   * <p>The distinguished name (DN) and organizational unit (OU) of an Active Directory
   *             computer.</p>
   */
  OrganizationalUnitDistinguishedName?: string;
}
/**
 * <p>An LDAP attribute of an Active Directory computer account, in the form of a name:value
 *             pair.</p>
 */
export interface ActiveDirectoryComputerAttribute {
  /**
   * <p>The name for the LDAP attribute.</p>
   */
  Name?: string;
  /**
   * <p>The value for the LDAP attribute.</p>
   */
  Value?: string;
}
export interface ComputeFarmConfiguration {
  ComputeFarmConfiguration: ComputeFarmConfiguration1;
}
/**
 * <p>The configuration for a render farm that is associated with a studio resource.</p>
 */
export interface ComputeFarmConfiguration1 {
  /**
   * <p>The name of an Active Directory user that is used on ComputeFarm worker
   *             instances.</p>
   */
  ActiveDirectoryUser?: string;
  /**
   * <p>The endpoint of the ComputeFarm that is accessed by the studio component
   *             resource.</p>
   */
  Endpoint?: string;
}
export interface LicenseServiceConfiguration {
  LicenseServiceConfiguration: LicenseServiceConfiguration1;
}
/**
 * <p>The configuration for a license service that is associated with a studio
 *             resource.</p>
 */
export interface LicenseServiceConfiguration1 {
  /**
   * <p>The endpoint of the license service that is accessed by the studio component
   *             resource.</p>
   */
  Endpoint?: string;
}
export interface SharedFileSystemConfiguration {
  SharedFileSystemConfiguration: SharedFileSystemConfiguration1;
}
/**
 * <p>The configuration for a shared file storage system that is associated with a studio
 *             resource.</p>
 */
export interface SharedFileSystemConfiguration1 {
  /**
   * <p>The endpoint of the shared file system that is accessed by the studio component
   *             resource.</p>
   */
  Endpoint?: string;
  /**
   * <p>The unique identifier for a file system.</p>
   */
  FileSystemId?: string;
  /**
   * <p>The mount location for a shared file system on a Linux virtual workstation.</p>
   */
  LinuxMountPoint?: string;
  /**
   * <p>The name of the file share.</p>
   */
  ShareName?: string;
  /**
   * <p>The mount location for a shared file system on a Windows virtual workstation.</p>
   */
  WindowsMountDrive?: string;
}
/**
 * <p>Initialization scripts for studio components.</p>
 */
export interface StudioComponentInitializationScript {
  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
   */
  LaunchProfileProtocolVersion?: string;
  Platform?: LaunchProfilePlatform;
  RunContext?: StudioComponentInitializationScriptRunContext;
  /**
   * <p>The initialization script.</p>
   */
  Script?: string;
}
/**
 * <p>A parameter for a studio component script, in the form of a key:value pair.</p>
 */
export interface ScriptParameterKeyValue {
  /**
   * <p>A script parameter key.</p>
   */
  Key?: string;
  /**
   * <p>A script parameter value.</p>
   */
  Value?: string;
}
export interface Tags {
  /**
   * This interface was referenced by `Tags`'s JSON-Schema definition
   * via the `patternProperty` ".+".
   */
  [k: string]: string;
}
