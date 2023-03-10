/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * IPv6 Cidrs
 */
export type Ipv6Cidrs = string[];
/**
 * cidr List Aliases
 */
export type CidrListAliases = string[];
/**
 * cidrs
 */
export type Cidrs = string[];

/**
 * Resource Type definition for AWS::Lightsail::Instance
 */
export interface AwsLightsailInstance {
  /**
   * Support code to help identify any issues
   */
  SupportCode?: string;
  /**
   * Resource type of Lightsail instance.
   */
  ResourceType?: string;
  /**
   * Is the IP Address of the Instance is the static IP
   */
  IsStaticIp?: boolean;
  /**
   * Private IP Address of the Instance
   */
  PrivateIpAddress?: string;
  /**
   * Public IP Address of the Instance
   */
  PublicIpAddress?: string;
  Location?: Location;
  Hardware?: Hardware;
  State?: State;
  Networking?: Networking;
  /**
   * Username of the  Lightsail instance.
   */
  UserName?: string;
  /**
   * SSH Key Name of the  Lightsail instance.
   */
  SshKeyName?: string;
  /**
   * The names to use for your new Lightsail instance.
   */
  InstanceName: string;
  /**
   * The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
   */
  AvailabilityZone?: string;
  /**
   * The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ).
   */
  BundleId: string;
  /**
   * The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ).
   */
  BlueprintId: string;
  /**
   * An array of objects representing the add-ons to enable for the new instance.
   */
  AddOns?: AddOn[];
  /**
   * A launch script you can create that configures a server with additional user data. For example, you might want to run apt-get -y update.
   */
  UserData?: string;
  /**
   * The name of your key pair.
   */
  KeyPairName?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  InstanceArn?: string;
}
/**
 * Location of a resource.
 */
export interface Location {
  /**
   * The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
   */
  AvailabilityZone?: string;
  /**
   * The Region Name in which to create your instance.
   */
  RegionName?: string;
}
/**
 * Hardware of the Instance.
 */
export interface Hardware {
  /**
   * CPU count of the Instance.
   */
  CpuCount?: number;
  /**
   * RAM Size of the Instance.
   */
  RamSizeInGb?: number;
  /**
   * Disks attached to the Instance.
   */
  Disks?: Disk[];
}
/**
 * Disk associated with the Instance.
 */
export interface Disk {
  /**
   * The names to use for your new Lightsail disk.
   */
  DiskName: string;
  /**
   * Size of the disk attached to the Instance.
   */
  SizeInGb?: string;
  /**
   * Is the Attached disk is the system disk of the Instance.
   */
  IsSystemDisk?: boolean;
  /**
   * IOPS of disk.
   */
  IOPS?: number;
  /**
   * Path of the disk attached to the instance.
   */
  Path: string;
  /**
   * Instance attached to the disk.
   */
  AttachedTo?: string;
  /**
   * Attachment state of the disk.
   */
  AttachmentState?: string;
}
/**
 * Current State of the Instance.
 */
export interface State {
  /**
   * Status code of the Instance.
   */
  Code?: number;
  /**
   * Status code of the Instance.
   */
  Name?: string;
}
/**
 * Networking of the Instance.
 */
export interface Networking {
  /**
   * Ports to the Instance.
   */
  Ports: Port[];
  MonthlyTransfer?: MonthlyTransfer;
}
/**
 * Port of the Instance.
 */
export interface Port {
  /**
   * From Port of the Instance.
   */
  FromPort?: number;
  /**
   * To Port of the Instance.
   */
  ToPort?: number;
  /**
   * Port Protocol of the Instance.
   */
  Protocol?: string;
  /**
   * Access From Protocol of the Instance.
   */
  AccessFrom?: string;
  /**
   * Access Type Protocol of the Instance.
   */
  AccessType?: string;
  /**
   * CommonName for Protocol of the Instance.
   */
  CommonName?: string;
  /**
   * Access Direction for Protocol of the Instance(inbound/outbound).
   */
  AccessDirection?: string;
  Ipv6Cidrs?: Ipv6Cidrs;
  CidrListAliases?: CidrListAliases;
  Cidrs?: Cidrs;
}
/**
 * Monthly Transfer of the Instance.
 */
export interface MonthlyTransfer {
  /**
   * GbPerMonthAllocated of the Instance.
   */
  GbPerMonthAllocated?: string;
}
/**
 * A addon associate with a resource.
 */
export interface AddOn {
  /**
   * The add-on type
   */
  AddOnType: string;
  /**
   * Status of the Addon
   */
  Status?: "Enabling" | "Disabling" | "Enabled" | "Terminating" | "Terminated" | "Disabled" | "Failed";
  AutoSnapshotAddOnRequest?: AutoSnapshotAddOn;
}
/**
 * An object that represents additional parameters when enabling or modifying the automatic snapshot add-on
 */
export interface AutoSnapshotAddOn {
  /**
   * The daily time when an automatic snapshot will be created.
   */
  SnapshotTimeOfDay?: string;
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value?: string;
}
