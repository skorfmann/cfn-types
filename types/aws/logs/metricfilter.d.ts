/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Specifies a metric filter that describes how CloudWatch Logs extracts information from logs and transforms it into Amazon CloudWatch metrics.
 */
export interface AwsLogsMetricfilter {
  /**
   * A name for the metric filter.
   */
  FilterName?: string;
  /**
   * Pattern that Logs follows to interpret each entry in a log.
   */
  FilterPattern: string;
  /**
   * Existing log group that you want to associate with this filter.
   */
  LogGroupName: string;
  /**
   * A collection of information that defines how metric data gets emitted.
   *
   * @minItems 1
   * @maxItems 1
   */
  MetricTransformations: [MetricTransformation];
}
export interface MetricTransformation {
  /**
   * The value to emit when a filter pattern does not match a log event. This value can be null.
   */
  DefaultValue?: number;
  /**
   * The name of the CloudWatch metric. Metric name must be in ASCII format.
   */
  MetricName: string;
  /**
   * The namespace of the CloudWatch metric.
   */
  MetricNamespace: string;
  /**
   * The value to publish to the CloudWatch metric when a filter pattern matches a log event.
   */
  MetricValue: string;
  /**
   * The unit to assign to the metric. If you omit this, the unit is set as None.
   */
  Unit?:
    | "Seconds"
    | "Microseconds"
    | "Milliseconds"
    | "Bytes"
    | "Kilobytes"
    | "Megabytes"
    | "Gigabytes"
    | "Terabytes"
    | "Bits"
    | "Kilobits"
    | "Megabits"
    | "Gigabits"
    | "Terabits"
    | "Percent"
    | "Count"
    | "Bytes/Second"
    | "Kilobytes/Second"
    | "Megabytes/Second"
    | "Gigabytes/Second"
    | "Terabytes/Second"
    | "Bits/Second"
    | "Kilobits/Second"
    | "Megabits/Second"
    | "Gigabits/Second"
    | "Terabits/Second"
    | "Count/Second"
    | "None";
  /**
   * Dimensions are the key-value pairs that further define a metric
   *
   * @minItems 1
   * @maxItems 3
   */
  Dimensions?: [Dimension] | [Dimension, Dimension] | [Dimension, Dimension, Dimension];
}
/**
 * the key-value pairs that further define a metric.
 */
export interface Dimension {
  /**
   * The key of the dimension. Maximum length of 255.
   */
  Key: string;
  /**
   * The value of the dimension. Maximum length of 255.
   */
  Value: string;
}
