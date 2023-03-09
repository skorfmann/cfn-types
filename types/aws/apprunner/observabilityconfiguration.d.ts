/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The AWS::AppRunner::ObservabilityConfiguration resource  is an AWS App Runner resource type that specifies an App Runner observability configuration
 */
export interface AwsApprunnerObservabilityconfiguration {
  /**
   * The Amazon Resource Name (ARN) of this ObservabilityConfiguration
   */
  ObservabilityConfigurationArn?: string;
  /**
   * A name for the observability configuration. When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.
   */
  ObservabilityConfigurationName?: string;
  /**
   * The revision of this observability configuration. It's unique among all the active configurations ('Status': 'ACTIVE') that share the same ObservabilityConfigurationName.
   */
  ObservabilityConfigurationRevision?: number;
  /**
   * It's set to true for the configuration with the highest Revision among all configurations that share the same Name. It's set to false otherwise.
   */
  Latest?: boolean;
  TraceConfiguration?: TraceConfiguration;
  /**
   * A list of metadata items that you can associate with your observability configuration resource. A tag is a key-value pair.
   */
  Tags?: Tag[];
}
/**
 * The configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing.
 */
export interface TraceConfiguration {
  /**
   * The implementation provider chosen for tracing App Runner services.
   */
  Vendor: "AWSXRAY";
}
export interface Tag {
  Key?: string;
  Value?: string;
}
