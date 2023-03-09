/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The AWS::NetworkManager::Site type describes a site.
 */
export interface AwsNetworkmanagerSite {
  /**
   * The Amazon Resource Name (ARN) of the site.
   */
  SiteArn?: string;
  /**
   * The ID of the site.
   */
  SiteId?: string;
  /**
   * The description of the site.
   */
  Description?: string;
  /**
   * The tags for the site.
   */
  Tags?: Tag[];
  /**
   * The ID of the global network.
   */
  GlobalNetworkId: string;
  Location?: Location;
}
/**
 * A key-value pair to associate with a site resource.
 */
export interface Tag {
  Key?: string;
  Value?: string;
}
/**
 * The location of the site.
 */
export interface Location {
  /**
   * The physical address.
   */
  Address?: string;
  /**
   * The latitude.
   */
  Latitude?: string;
  /**
   * The longitude.
   */
  Longitude?: string;
}
