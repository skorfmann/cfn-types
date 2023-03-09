/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ElasticLoadBalancing::LoadBalancer
 */
export interface AwsElasticloadbalancingLoadbalancer {
  SecurityGroups?: string[];
  ConnectionDrainingPolicy?: ConnectionDrainingPolicy;
  Policies?: Policies[];
  Scheme?: string;
  AvailabilityZones?: string[];
  SourceSecurityGroupOwnerAlias?: string;
  HealthCheck?: HealthCheck;
  CanonicalHostedZoneNameID?: string;
  CanonicalHostedZoneName?: string;
  DNSName?: string;
  AccessLoggingPolicy?: AccessLoggingPolicy;
  Instances?: string[];
  LoadBalancerName?: string;
  Listeners: Listeners[];
  Subnets?: string[];
  CrossZone?: boolean;
  AppCookieStickinessPolicy?: AppCookieStickinessPolicy[];
  LBCookieStickinessPolicy?: LBCookieStickinessPolicy[];
  Id?: string;
  SourceSecurityGroupGroupName?: string;
  ConnectionSettings?: ConnectionSettings;
  Tags?: Tag[];
}
export interface ConnectionDrainingPolicy {
  Enabled: boolean;
  Timeout?: number;
}
export interface Policies {
  Attributes: {
    [k: string]: unknown;
  }[];
  PolicyType: string;
  LoadBalancerPorts?: string[];
  PolicyName: string;
  InstancePorts?: string[];
}
export interface HealthCheck {
  Target: string;
  UnhealthyThreshold: string;
  Timeout: string;
  HealthyThreshold: string;
  Interval: string;
}
export interface AccessLoggingPolicy {
  Enabled: boolean;
  S3BucketName: string;
  EmitInterval?: number;
  S3BucketPrefix?: string;
}
export interface Listeners {
  PolicyNames?: string[];
  InstancePort: string;
  LoadBalancerPort: string;
  Protocol: string;
  SSLCertificateId?: string;
  InstanceProtocol?: string;
}
export interface AppCookieStickinessPolicy {
  CookieName: string;
  PolicyName: string;
}
export interface LBCookieStickinessPolicy {
  CookieExpirationPeriod?: string;
  PolicyName?: string;
}
export interface ConnectionSettings {
  IdleTimeout: number;
}
export interface Tag {
  Value: string;
  Key: string;
}