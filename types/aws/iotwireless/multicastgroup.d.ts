/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Create and manage Multicast groups.
 */
export interface AwsIotwirelessMulticastgroup {
  /**
   * Name of Multicast group
   */
  Name?: string;
  /**
   * Multicast group description
   */
  Description?: string;
  LoRaWAN: LoRaWAN;
  /**
   * Multicast group arn. Returned after successful create.
   */
  Arn?: string;
  /**
   * Multicast group id. Returned after successful create.
   */
  Id?: string;
  /**
   * A list of key-value pairs that contain metadata for the Multicast group.
   *
   * @maxItems 200
   */
  Tags?: Tag[];
  /**
   * Multicast group status. Returned after successful read.
   */
  Status?: string;
  /**
   * Wireless device to associate. Only for update request.
   */
  AssociateWirelessDevice?: string;
  /**
   * Wireless device to disassociate. Only for update request.
   */
  DisassociateWirelessDevice?: string;
}
/**
 * Multicast group LoRaWAN
 */
export interface LoRaWAN {
  /**
   * Multicast group LoRaWAN RF region
   */
  RfRegion: string;
  /**
   * Multicast group LoRaWAN DL Class
   */
  DlClass: string;
  /**
   * Multicast group number of devices requested. Returned after successful read.
   */
  NumberOfDevicesRequested?: number;
  /**
   * Multicast group number of devices in group. Returned after successful read.
   */
  NumberOfDevicesInGroup?: number;
}
export interface Tag {
  Key?: string;
  Value?: string;
}