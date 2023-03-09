/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::WAFRegional::SizeConstraintSet
 */
export interface AwsWafregionalSizeconstraintset {
  Id?: string;
  SizeConstraints?: SizeConstraint[];
  Name: string;
}
export interface SizeConstraint {
  ComparisonOperator: string;
  Size: number;
  TextTransformation: string;
  FieldToMatch: FieldToMatch;
}
export interface FieldToMatch {
  Type: string;
  Data?: string;
}