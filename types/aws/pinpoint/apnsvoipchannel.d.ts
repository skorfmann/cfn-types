/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Pinpoint::APNSVoipChannel
 */
export interface AwsPinpointApnsvoipchannel {
  Id?: string;
  BundleId?: string;
  PrivateKey?: string;
  Enabled?: boolean;
  DefaultAuthenticationMethod?: string;
  TokenKey?: string;
  ApplicationId: string;
  TeamId?: string;
  Certificate?: string;
  TokenKeyId?: string;
}
