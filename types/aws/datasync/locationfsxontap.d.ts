/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::DataSync::LocationFSxONTAP.
 */
export interface AwsDatasyncLocationfsxontap {
  /**
   * The Amazon Resource Name (ARN) for the FSx ONTAP SVM.
   */
  StorageVirtualMachineArn: string;
  /**
   * The Amazon Resource Name (ARN) for the FSx ONAP file system.
   */
  FsxFilesystemArn?: string;
  /**
   * The ARNs of the security groups that are to use to configure the FSx ONTAP file system.
   *
   * @minItems 1
   * @maxItems 5
   */
  SecurityGroupArns:
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string];
  Protocol?: Protocol;
  /**
   * A subdirectory in the location's path.
   */
  Subdirectory?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * @minItems 0
   * @maxItems 50
   */
  Tags?: Tag[];
  /**
   * The Amazon Resource Name (ARN) of the Amazon FSx ONTAP file system location that is created.
   */
  LocationArn?: string;
  /**
   * The URL of the FSx ONTAP file system that was described.
   */
  LocationUri?: string;
}
/**
 * Configuration settings for NFS or SMB protocol.
 */
export interface Protocol {
  NFS?: NFS;
  SMB?: SMB;
}
/**
 * NFS protocol configuration for FSx ONTAP file system.
 */
export interface NFS {
  MountOptions: NfsMountOptions;
}
/**
 * The NFS mount options that DataSync can use to mount your NFS share.
 */
export interface NfsMountOptions {
  /**
   * The specific NFS version that you want DataSync to use to mount your NFS share.
   */
  Version?: "AUTOMATIC" | "NFS3" | "NFS4_0" | "NFS4_1";
}
/**
 * SMB protocol configuration for FSx ONTAP file system.
 */
export interface SMB {
  MountOptions: SmbMountOptions;
  /**
   * The name of the Windows domain that the SMB server belongs to.
   */
  Domain?: string;
  /**
   * The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
   */
  Password: string;
  /**
   * The user who can mount the share, has the permissions to access files and folders in the SMB share.
   */
  User: string;
}
/**
 * The mount options used by DataSync to access the SMB server.
 */
export interface SmbMountOptions {
  /**
   * The specific SMB version that you want DataSync to use to mount your SMB share.
   */
  Version?: "AUTOMATIC" | "SMB2" | "SMB3";
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key for an AWS resource tag.
   */
  Key: string;
  /**
   * The value for an AWS resource tag.
   */
  Value: string;
}