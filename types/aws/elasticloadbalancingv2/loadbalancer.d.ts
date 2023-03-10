/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::LoadBalancer
 */
export interface AwsElasticloadbalancingv2Loadbalancer {
  IpAddressType?: string;
  SecurityGroups?: string[];
  LoadBalancerAttributes?: LoadBalancerAttribute[];
  Scheme?: string;
  DNSName?: string;
  Name?: string;
  LoadBalancerName?: string;
  Subnets?: string[];
  Type?: string;
  CanonicalHostedZoneID?: string;
  Id?: string;
  Tags?: Tag[];
  LoadBalancerFullName?: string;
  SubnetMappings?: SubnetMapping[];
}
export interface LoadBalancerAttribute {
  Value?: string;
  Key?: string;
}
export interface Tag {
  Value: string;
  Key: string;
}
export interface SubnetMapping {
  IPv6Address?: string;
  SubnetId: string;
  AllocationId?: string;
  PrivateIPv4Address?: string;
}
