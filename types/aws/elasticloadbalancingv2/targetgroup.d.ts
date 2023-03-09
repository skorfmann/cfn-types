/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::TargetGroup
 */
export interface AwsElasticloadbalancingv2Targetgroup {
  /**
   * The type of IP address used for this target group. The possible values are ipv4 and ipv6.
   */
  IpAddressType?: string;
  /**
   * The approximate amount of time, in seconds, between health checks of an individual target.
   */
  HealthCheckIntervalSeconds?: number;
  /**
   * The Amazon Resource Names (ARNs) of the load balancers that route traffic to this target group.
   */
  LoadBalancerArns?: string[];
  Matcher?: Matcher;
  /**
   * [HTTP/HTTPS health checks] The destination for health checks on the targets. [HTTP1 or HTTP2 protocol version] The ping path. The default is /. [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /AWS.ALB/healthcheck.
   */
  HealthCheckPath?: string;
  /**
   * The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.
   */
  Port?: number;
  /**
   * The targets.
   */
  Targets?: TargetDescription[];
  /**
   * Indicates whether health checks are enabled. If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance, ip, or alb, health checks are always enabled and cannot be disabled.
   */
  HealthCheckEnabled?: boolean;
  /**
   * [HTTP/HTTPS protocol] The protocol version. The possible values are GRPC, HTTP1, and HTTP2.
   */
  ProtocolVersion?: string;
  /**
   * The number of consecutive health check failures required before considering a target unhealthy.
   */
  UnhealthyThresholdCount?: number;
  /**
   * The amount of time, in seconds, during which no response from a target means a failed health check.
   */
  HealthCheckTimeoutSeconds?: number;
  /**
   * The name of the target group.
   */
  Name?: string;
  /**
   * The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply.
   */
  VpcId?: string;
  /**
   * The full name of the target group.
   */
  TargetGroupFullName?: string;
  /**
   * The number of consecutive health checks successes required before considering an unhealthy target healthy.
   */
  HealthyThresholdCount?: number;
  /**
   * The protocol the load balancer uses when performing health checks on targets.
   */
  HealthCheckProtocol?: string;
  /**
   * The attributes.
   */
  TargetGroupAttributes?: TargetGroupAttribute[];
  /**
   * The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type.
   */
  TargetType?: string;
  /**
   * The port the load balancer uses when performing health checks on targets.
   */
  HealthCheckPort?: string;
  /**
   * The ARN of the Target Group
   */
  TargetGroupArn?: string;
  /**
   * The protocol to use for routing traffic to the targets.
   */
  Protocol?: string;
  /**
   * The name of the target group.
   */
  TargetGroupName?: string;
  /**
   * The tags.
   */
  Tags?: Tag[];
}
/**
 * [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target.
 */
export interface Matcher {
  /**
   * You can specify values between 0 and 99. You can specify multiple values, or a range of values. The default value is 12.
   */
  GrpcCode?: string;
  /**
   * For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200. You can specify multiple values or a range of values.
   */
  HttpCode?: string;
}
export interface TargetDescription {
  /**
   * An Availability Zone or all. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.
   */
  AvailabilityZone?: string;
  /**
   * The ID of the target. If the target type of the target group is instance, specify an instance ID. If the target type is ip, specify an IP address. If the target type is lambda, specify the ARN of the Lambda function. If the target type is alb, specify the ARN of the Application Load Balancer target.
   */
  Id: string;
  /**
   * The port on which the target is listening. If the target group protocol is GENEVE, the supported port is 6081. If the target type is alb, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.
   */
  Port?: number;
}
export interface TargetGroupAttribute {
  /**
   * The name of the attribute.
   */
  Value?: string;
  /**
   * The value of the attribute.
   */
  Key?: string;
}
export interface Tag {
  /**
   * The key name of the tag.
   */
  Value: string;
  /**
   * The value for the tag.
   */
  Key: string;
}
