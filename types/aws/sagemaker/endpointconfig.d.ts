/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::SageMaker::EndpointConfig
 */
export interface AwsSagemakerEndpointconfig {
  ShadowProductionVariants?: ProductionVariant[];
  DataCaptureConfig?: DataCaptureConfig;
  ProductionVariants: ProductionVariant[];
  KmsKeyId?: string;
  AsyncInferenceConfig?: AsyncInferenceConfig;
  EndpointConfigName?: string;
  ExplainerConfig?: ExplainerConfig;
  Id?: string;
  Tags?: Tag[];
}
export interface ProductionVariant {
  ModelDataDownloadTimeoutInSeconds?: number;
  ModelName: string;
  VolumeSizeInGB?: number;
  VariantName: string;
  ContainerStartupHealthCheckTimeoutInSeconds?: number;
  InitialInstanceCount?: number;
  ServerlessConfig?: ServerlessConfig;
  InstanceType?: string;
  AcceleratorType?: string;
  InitialVariantWeight: number;
}
export interface ServerlessConfig {
  MaxConcurrency: number;
  MemorySizeInMB: number;
}
export interface DataCaptureConfig {
  CaptureOptions: CaptureOption[];
  KmsKeyId?: string;
  DestinationS3Uri: string;
  InitialSamplingPercentage: number;
  CaptureContentTypeHeader?: CaptureContentTypeHeader;
  EnableCapture?: boolean;
}
export interface CaptureOption {
  CaptureMode: string;
}
export interface CaptureContentTypeHeader {
  CsvContentTypes?: string[];
  JsonContentTypes?: string[];
}
export interface AsyncInferenceConfig {
  ClientConfig?: AsyncInferenceClientConfig;
  OutputConfig: AsyncInferenceOutputConfig;
}
export interface AsyncInferenceClientConfig {
  MaxConcurrentInvocationsPerInstance?: number;
}
export interface AsyncInferenceOutputConfig {
  NotificationConfig?: AsyncInferenceNotificationConfig;
  KmsKeyId?: string;
  S3OutputPath: string;
}
export interface AsyncInferenceNotificationConfig {
  SuccessTopic?: string;
  ErrorTopic?: string;
}
export interface ExplainerConfig {
  ClarifyExplainerConfig?: ClarifyExplainerConfig;
}
export interface ClarifyExplainerConfig {
  EnableExplanations?: string;
  ShapConfig: ClarifyShapConfig;
  InferenceConfig?: ClarifyInferenceConfig;
}
export interface ClarifyShapConfig {
  TextConfig?: ClarifyTextConfig;
  UseLogit?: boolean;
  Seed?: number;
  ShapBaselineConfig: ClarifyShapBaselineConfig;
  NumberOfSamples?: number;
}
export interface ClarifyTextConfig {
  Language: string;
  Granularity: string;
}
export interface ClarifyShapBaselineConfig {
  MimeType?: string;
  ShapBaseline?: string;
  ShapBaselineUri?: string;
}
export interface ClarifyInferenceConfig {
  ContentTemplate?: string;
  LabelHeaders?: ClarifyHeader[];
  MaxPayloadInMB?: number;
  ProbabilityIndex?: number;
  LabelAttribute?: string;
  FeatureTypes?: ClarifyFeatureType[];
  FeatureHeaders?: ClarifyHeader[];
  LabelIndex?: number;
  ProbabilityAttribute?: string;
  FeaturesAttribute?: string;
  MaxRecordCount?: number;
}
export interface ClarifyHeader {}
export interface ClarifyFeatureType {}
export interface Tag {
  Value: string;
  Key: string;
}
