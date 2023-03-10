/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::Route53::HealthCheck.
 */
export interface AwsRoute53Healthcheck {
  HealthCheckId?: string;
  /**
   * A complex type that contains information about the health check.
   */
  HealthCheckConfig: {
    AlarmIdentifier?: AlarmIdentifier;
    /**
     * @maxItems 256
     */
    ChildHealthChecks?: string[];
    EnableSNI?: boolean;
    FailureThreshold?: number;
    FullyQualifiedDomainName?: string;
    HealthThreshold?: number;
    InsufficientDataHealthStatus?: "Healthy" | "LastKnownStatus" | "Unhealthy";
    Inverted?: boolean;
    IPAddress?: string;
    MeasureLatency?: boolean;
    Port?: number;
    /**
     * @maxItems 64
     */
    Regions?: string[];
    RequestInterval?: number;
    ResourcePath?: string;
    SearchString?: string;
    RoutingControlArn?: string;
    Type:
      | "CALCULATED"
      | "CLOUDWATCH_METRIC"
      | "HTTP"
      | "HTTP_STR_MATCH"
      | "HTTPS"
      | "HTTPS_STR_MATCH"
      | "TCP"
      | "RECOVERY_CONTROL";
  };
  /**
   * An array of key-value pairs to apply to this resource.
   */
  HealthCheckTags?: HealthCheckTag[];
}
/**
 * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.
 */
export interface AlarmIdentifier {
  /**
   * The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
   */
  Name: string;
  /**
   * For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.
   */
  Region: string;
}
/**
 * A key-value pair to associate with a resource.
 */
export interface HealthCheckTag {
  /**
   * The key name of the tag.
   */
  Key: string;
  /**
   * The value for the tag.
   */
  Value: string;
}
