/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Create and manage wireless gateways, including LoRa gateways.
 */
export interface AwsIotwirelessWirelessgateway {
  /**
   * Name of Wireless Gateway.
   */
  Name?: string;
  /**
   * Description of Wireless Gateway.
   */
  Description?: string;
  /**
   * A list of key-value pairs that contain metadata for the gateway.
   *
   * @maxItems 200
   */
  Tags?: Tag[];
  LoRaWAN: LoRaWANGateway;
  /**
   * Arn for Wireless Gateway. Returned upon successful create.
   */
  Arn?: string;
  /**
   * Id for Wireless Gateway. Returned upon successful create.
   */
  Id?: string;
  /**
   * Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway.
   */
  ThingArn?: string;
  /**
   * Thing Name. If there is a Thing created, this can be returned with a Get call.
   */
  ThingName?: string;
  /**
   * The date and time when the most recent uplink was received.
   */
  LastUplinkReceivedAt?: string;
}
export interface Tag {
  Key?: string;
  Value?: string;
}
/**
 * The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Gateway.
 */
export interface LoRaWANGateway {
  GatewayEui: string;
  RfRegion: string;
}
