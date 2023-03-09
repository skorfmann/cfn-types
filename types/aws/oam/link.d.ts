/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ResourceType = "AWS::CloudWatch::Metric" | "AWS::Logs::LogGroup" | "AWS::XRay::Trace";

/**
 * Definition of AWS::Oam::Link Resource Type
 */
export interface AwsOamLink {
  Arn?: string;
  Label?: string;
  LabelTemplate?: string;
  /**
   * @minItems 1
   * @maxItems 50
   */
  ResourceTypes: [ResourceType, ...ResourceType[]];
  SinkIdentifier: string;
  /**
   * Tags to apply to the link
   */
  Tags?: {
    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^(?!aws:.*)[a-zA-Z0-9\s\_\.\/\=\+\-]{1,128}$".
     */
    [k: string]: string;
  };
}
