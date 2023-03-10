/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::Route53::HostedZone.
 */
export interface AwsRoute53Hostedzone {
  Id?: string;
  HostedZoneConfig?: HostedZoneConfig;
  /**
   * Adds, edits, or deletes tags for a health check or a hosted zone.
   *
   * For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
   */
  HostedZoneTags?: HostedZoneTag[];
  /**
   * The name of the domain. Specify a fully qualified domain name, for example, www.example.com. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats www.example.com (without a trailing dot) and www.example.com. (with a trailing dot) as identical.
   *
   * If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of NameServers that are returned by the Fn::GetAtt intrinsic function.
   */
  Name?: string;
  QueryLoggingConfig?: QueryLoggingConfig;
  /**
   * A complex type that contains information about the VPCs that are associated with the specified hosted zone.
   */
  VPCs?: VPC[];
  NameServers?: string[];
}
/**
 * A complex type that contains an optional comment.
 *
 * If you don't want to specify a comment, omit the HostedZoneConfig and Comment elements.
 */
export interface HostedZoneConfig {
  /**
   * Any comments that you want to include about the hosted zone.
   */
  Comment?: string;
}
/**
 * A complex type that contains information about a tag that you want to add or edit for the specified health check or hosted zone.
 */
export interface HostedZoneTag {
  /**
   * The key name of the tag.
   */
  Key: string;
  /**
   * The value for the tag.
   */
  Value: string;
}
/**
 * A complex type that contains information about a configuration for DNS query logging.
 */
export interface QueryLoggingConfig {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.
   */
  CloudWatchLogsLogGroupArn: string;
}
/**
 * A complex type that contains information about an Amazon VPC. Route 53 Resolver uses the records in the private hosted zone to route traffic in that VPC.
 */
export interface VPC {
  /**
   * The ID of an Amazon VPC.
   */
  VPCId: string;
  /**
   * The region that an Amazon VPC was created in. See https://docs.aws.amazon.com/general/latest/gr/rande.html for a list of up to date regions.
   */
  VPCRegion: string;
}
