/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The AWS::NetworkManager::Link type describes a link.
 */
export interface AwsNetworkmanagerLink {
  /**
   * The Amazon Resource Name (ARN) of the link.
   */
  LinkArn?: string;
  /**
   * The ID of the link.
   */
  LinkId?: string;
  /**
   * The ID of the global network.
   */
  GlobalNetworkId: string;
  /**
   * The ID of the site
   */
  SiteId: string;
  Bandwidth: Bandwidth;
  /**
   * The provider of the link.
   */
  Provider?: string;
  /**
   * The description of the link.
   */
  Description?: string;
  /**
   * The tags for the link.
   */
  Tags?: Tag[];
  /**
   * The type of the link.
   */
  Type?: string;
}
/**
 * The Bandwidth for the link.
 */
export interface Bandwidth {
  /**
   * Download speed in Mbps.
   */
  DownloadSpeed?: number;
  /**
   * Upload speed in Mbps.
   */
  UploadSpeed?: number;
}
/**
 * A key-value pair to associate with a link resource.
 */
export interface Tag {
  Key?: string;
  Value?: string;
}
