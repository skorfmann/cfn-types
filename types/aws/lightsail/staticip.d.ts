/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Lightsail::StaticIp
 */
export interface AwsLightsailStaticip {
  /**
   * The name of the static IP address.
   */
  StaticIpName: string;
  /**
   * The instance where the static IP is attached.
   */
  AttachedTo?: string;
  /**
   * A Boolean value indicating whether the static IP is attached.
   */
  IsAttached?: boolean;
  /**
   * The static IP address.
   */
  IpAddress?: string;
  StaticIpArn?: string;
}
