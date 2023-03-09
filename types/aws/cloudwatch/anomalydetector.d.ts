/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::CloudWatch::AnomalyDetector
 */
export interface AwsCloudwatchAnomalydetector {
  MetricName?: string;
  Stat?: string;
  Configuration?: Configuration;
  MetricMathAnomalyDetector?: MetricMathAnomalyDetector;
  Dimensions?: Dimension[];
  Id?: string;
  Namespace?: string;
  SingleMetricAnomalyDetector?: SingleMetricAnomalyDetector;
}
export interface Configuration {
  MetricTimeZone?: string;
  ExcludedTimeRanges?: Range[];
}
export interface Range {
  EndTime: string;
  StartTime: string;
}
export interface MetricMathAnomalyDetector {
  MetricDataQueries?: MetricDataQuery[];
}
export interface MetricDataQuery {
  AccountId?: string;
  ReturnData?: boolean;
  Expression?: string;
  MetricStat?: MetricStat;
  Label?: string;
  Period?: number;
  Id: string;
}
export interface MetricStat {
  Period: number;
  Metric: Metric;
  Stat: string;
  Unit?: string;
}
export interface Metric {
  MetricName: string;
  Dimensions?: Dimension[];
  Namespace: string;
}
export interface Dimension {
  Value: string;
  Name: string;
}
export interface SingleMetricAnomalyDetector {
  MetricName?: string;
  Dimensions?: Dimension[];
  Stat?: string;
  Namespace?: string;
}
