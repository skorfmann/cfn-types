/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
 */
export type RuleARN = string;
/**
 * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
 */
export type RuleName = string;
export type Tags = {
  Key: string;
  Value: string;
}[];

/**
 * This schema provides construct and validation rules for AWS-XRay SamplingRule resource parameters.
 */
export interface AwsXraySamplingrule {
  SamplingRule?: SamplingRule;
  SamplingRuleRecord?: SamplingRuleRecord;
  SamplingRuleUpdate?: SamplingRuleUpdate;
  RuleARN?: RuleARN;
  RuleName?: RuleName;
  Tags?: Tags;
}
export interface SamplingRule {
  /**
   * Matches attributes derived from the request.
   */
  Attributes?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".{1,}".
     */
    [k: string]: string;
  };
  /**
   * The percentage of matching requests to instrument, after the reservoir is exhausted.
   */
  FixedRate?: number;
  /**
   * Matches the hostname from a request URL.
   */
  Host?: string;
  /**
   * Matches the HTTP method from a request URL.
   */
  HTTPMethod?: string;
  /**
   * The priority of the sampling rule.
   */
  Priority?: number;
  /**
   * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
   */
  ReservoirSize?: number;
  /**
   * Matches the ARN of the AWS resource on which the service runs.
   */
  ResourceARN?: string;
  RuleARN?: RuleARN;
  RuleName?: RuleName;
  /**
   * Matches the name that the service uses to identify itself in segments.
   */
  ServiceName?: string;
  /**
   * Matches the origin that the service uses to identify its type in segments.
   */
  ServiceType?: string;
  /**
   * Matches the path from a request URL.
   */
  URLPath?: string;
  /**
   * The version of the sampling rule format (1)
   */
  Version?: number;
}
export interface SamplingRuleRecord {
  /**
   * When the rule was created, in Unix time seconds.
   */
  CreatedAt?: string;
  /**
   * When the rule was modified, in Unix time seconds.
   */
  ModifiedAt?: string;
  SamplingRule?: SamplingRule;
}
export interface SamplingRuleUpdate {
  /**
   * Matches attributes derived from the request.
   */
  Attributes?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".{1,}".
     */
    [k: string]: string;
  };
  /**
   * The percentage of matching requests to instrument, after the reservoir is exhausted.
   */
  FixedRate?: number;
  /**
   * Matches the hostname from a request URL.
   */
  Host?: string;
  /**
   * Matches the HTTP method from a request URL.
   */
  HTTPMethod?: string;
  /**
   * The priority of the sampling rule.
   */
  Priority?: number;
  /**
   * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
   */
  ReservoirSize?: number;
  /**
   * Matches the ARN of the AWS resource on which the service runs.
   */
  ResourceARN?: string;
  RuleARN?: RuleARN;
  RuleName?: RuleName;
  /**
   * Matches the name that the service uses to identify itself in segments.
   */
  ServiceName?: string;
  /**
   * Matches the origin that the service uses to identify its type in segments.
   */
  ServiceType?: string;
  /**
   * Matches the path from a request URL.
   */
  URLPath?: string;
}
