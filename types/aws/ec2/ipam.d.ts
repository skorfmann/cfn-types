/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Schema of AWS::EC2::IPAM Type
 */
export interface AwsEc2Ipam {
  /**
   * Id of the IPAM.
   */
  IpamId?: string;
  /**
   * The Amazon Resource Name (ARN) of the IPAM.
   */
  Arn?: string;
  /**
   * The Id of the default resource discovery, created with this IPAM.
   */
  DefaultResourceDiscoveryId?: string;
  /**
   * The Id of the default association to the default resource discovery, created with this IPAM.
   */
  DefaultResourceDiscoveryAssociationId?: string;
  /**
   * The count of resource discoveries associated with this IPAM.
   */
  ResourceDiscoveryAssociationCount?: number;
  Description?: string;
  /**
   * The Id of the default scope for publicly routable IP space, created with this IPAM.
   */
  PublicDefaultScopeId?: string;
  /**
   * The Id of the default scope for publicly routable IP space, created with this IPAM.
   */
  PrivateDefaultScopeId?: string;
  /**
   * The number of scopes that currently exist in this IPAM.
   */
  ScopeCount?: number;
  /**
   * The regions IPAM is enabled for. Allows pools to be created in these regions, as well as enabling monitoring
   */
  OperatingRegions?: IpamOperatingRegion[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
}
/**
 * The regions IPAM is enabled for. Allows pools to be created in these regions, as well as enabling monitoring
 */
export interface IpamOperatingRegion {
  /**
   * The name of the region.
   */
  RegionName: string;
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
  Value: string;
}
