/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::WAFRegional::WebACL
 */
export interface AwsWafregionalWebacl {
  Id?: string;
  MetricName: string;
  DefaultAction: Action;
  Rules?: Rule[];
  Name: string;
}
export interface Action {
  Type: string;
}
export interface Rule {
  Action: Action;
  Priority: number;
  RuleId: string;
}
