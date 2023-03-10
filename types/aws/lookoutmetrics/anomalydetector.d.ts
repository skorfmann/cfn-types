/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Arn = string;
export type Charset = string;
/**
 * Name of a column in the data.
 */
export type ColumnName = string;
export type DatabaseHost = string;
export type DatabasePort = number;
export type SecretManagerArn = string;
export type TableName = string;
export type SubnetIdList = string[];
export type SecurityGroupIdList = string[];

/**
 * An Amazon Lookout for Metrics Detector
 */
export interface AwsLookoutmetricsAnomalydetector {
  Arn?: Arn;
  /**
   * Name for the Amazon Lookout for Metrics Anomaly Detector
   */
  AnomalyDetectorName?: string;
  /**
   * A description for the AnomalyDetector.
   */
  AnomalyDetectorDescription?: string;
  AnomalyDetectorConfig: AnomalyDetectorConfig;
  /**
   * List of metric sets for anomaly detection
   *
   * @minItems 1
   * @maxItems 1
   */
  MetricSetList: [MetricSet];
  /**
   * KMS key used to encrypt the AnomalyDetector data
   */
  KmsKeyArn?: string;
}
/**
 * Configuration options for the AnomalyDetector
 */
export interface AnomalyDetectorConfig {
  /**
   * Frequency of anomaly detection
   */
  AnomalyDetectorFrequency: "PT5M" | "PT10M" | "PT1H" | "P1D";
}
export interface MetricSet {
  /**
   * The name of the MetricSet.
   */
  MetricSetName: string;
  /**
   * A description for the MetricSet.
   */
  MetricSetDescription?: string;
  MetricSource: MetricSource;
  /**
   * Metrics captured by this MetricSet.
   *
   * @minItems 1
   */
  MetricList: [Metric, ...Metric[]];
  /**
   * Offset, in seconds, between the frequency interval and the time at which the metrics are available.
   */
  Offset?: number;
  TimestampColumn?: TimestampColumn;
  /**
   * Dimensions for this MetricSet.
   *
   * @minItems 0
   */
  DimensionList?: ColumnName[];
  /**
   * A frequency period to aggregate the data
   */
  MetricSetFrequency?: "PT5M" | "PT10M" | "PT1H" | "P1D";
  Timezone?: string;
}
export interface MetricSource {
  S3SourceConfig?: S3SourceConfig;
  RDSSourceConfig?: RDSSourceConfig;
  RedshiftSourceConfig?: RedshiftSourceConfig;
  CloudwatchConfig?: CloudwatchConfig;
  AppFlowConfig?: AppFlowConfig;
}
export interface S3SourceConfig {
  RoleArn: Arn;
  /**
   * @minItems 1
   * @maxItems 1
   */
  TemplatedPathList?: [string];
  /**
   * @minItems 1
   * @maxItems 1
   */
  HistoricalDataPathList?: [string];
  FileFormatDescriptor: FileFormatDescriptor;
}
export interface FileFormatDescriptor {
  CsvFormatDescriptor?: CsvFormatDescriptor;
  JsonFormatDescriptor?: JsonFormatDescriptor;
}
export interface CsvFormatDescriptor {
  FileCompression?: "NONE" | "GZIP";
  Charset?: Charset;
  Delimiter?: string;
  HeaderList?: ColumnName[];
  QuoteSymbol?: string;
  ContainsHeader?: boolean;
}
export interface JsonFormatDescriptor {
  FileCompression?: "NONE" | "GZIP";
  Charset?: Charset;
}
export interface RDSSourceConfig {
  DBInstanceIdentifier: string;
  DatabaseHost: DatabaseHost;
  DatabasePort: DatabasePort;
  SecretManagerArn: SecretManagerArn;
  DatabaseName: string;
  TableName: TableName;
  RoleArn: Arn;
  VpcConfiguration: VpcConfiguration;
}
export interface VpcConfiguration {
  SubnetIdList: SubnetIdList;
  SecurityGroupIdList: SecurityGroupIdList;
}
export interface RedshiftSourceConfig {
  ClusterIdentifier: string;
  DatabaseHost: DatabaseHost;
  DatabasePort: DatabasePort;
  SecretManagerArn: SecretManagerArn;
  DatabaseName: string;
  TableName: TableName;
  RoleArn: Arn;
  VpcConfiguration: VpcConfiguration;
}
export interface CloudwatchConfig {
  RoleArn: Arn;
}
export interface AppFlowConfig {
  RoleArn: Arn;
  FlowName: string;
}
export interface Metric {
  MetricName: ColumnName;
  /**
   * Operator used to aggregate metric values
   */
  AggregationFunction: "AVG" | "SUM";
  Namespace?: string;
}
export interface TimestampColumn {
  ColumnName?: ColumnName;
  /**
   * A timestamp format for the timestamps in the dataset
   */
  ColumnFormat?: string;
}
