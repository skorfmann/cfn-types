/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Specifies a VPC flow log, which enables you to capture IP traffic for a specific network interface, subnet, or VPC.
 */
export interface AwsEc2Flowlog {
  /**
   * The Flow Log ID
   */
  Id?: string;
  /**
   * The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.
   */
  DeliverLogsPermissionArn?: string;
  /**
   * Specifies the destination to which the flow log data is to be published. Flow log data can be published to a CloudWatch Logs log group, an Amazon S3 bucket, or a Kinesis Firehose stream. The value specified for this parameter depends on the value specified for LogDestinationType.
   */
  LogDestination?: string;
  /**
   * Specifies the type of destination to which the flow log data is to be published. Flow log data can be published to CloudWatch Logs or Amazon S3.
   */
  LogDestinationType?: "cloud-watch-logs" | "s3" | "kinesis-data-firehose";
  /**
   * The fields to include in the flow log record, in the order in which they should appear.
   */
  LogFormat?: string;
  /**
   * The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.
   */
  LogGroupName?: string;
  /**
   * The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).
   */
  MaxAggregationInterval?: number;
  /**
   * The ID of the subnet, network interface, or VPC for which you want to create a flow log.
   */
  ResourceId: string;
  /**
   * The type of resource for which to create the flow log. For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property.
   */
  ResourceType: "NetworkInterface" | "Subnet" | "VPC" | "TransitGateway" | "TransitGatewayAttachment";
  /**
   * The tags to apply to the flow logs.
   */
  Tags?: Tag[];
  /**
   * The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.
   */
  TrafficType?: "ACCEPT" | "ALL" | "REJECT";
  DestinationOptions?: {
    FileFormat: "plain-text" | "parquet";
    HiveCompatiblePartitions: boolean;
    PerHourPartition: boolean;
  };
}
export interface Tag {
  Value: string;
  Key: string;
}