/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * ARN of the WAF entity.
 */
export type ResourceArn = string;
/**
 * Description of the entity.
 */
export type EntityDescription = string;
/**
 * Name of the IPSet.
 */
export type EntityName = string;
/**
 * Id of the IPSet
 */
export type EntityId = string;
/**
 * Use CLOUDFRONT for CloudFront IPSet, use REGIONAL for Application Load Balancer and API Gateway.
 */
export type Scope = "CLOUDFRONT" | "REGIONAL";
/**
 * Type of addresses in the IPSet, use IPV4 for IPV4 IP addresses, IPV6 for IPV6 address.
 */
export type IPAddressVersion = "IPV4" | "IPV6";
/**
 * IP address
 */
export type IPAddress = string;

/**
 * Contains a list of IP addresses. This can be either IPV4 or IPV6. The list will be mutually
 */
export interface AwsWafv2Ipset {
  Arn?: ResourceArn;
  Description?: EntityDescription;
  Name?: EntityName;
  Id?: EntityId;
  Scope: Scope;
  IPAddressVersion: IPAddressVersion;
  /**
   * List of IPAddresses.
   */
  Addresses: IPAddress[];
  /**
   * @minItems 1
   */
  Tags?: [Tag, ...Tag[]];
}
export interface Tag {
  Key?: string;
  Value?: string;
}
