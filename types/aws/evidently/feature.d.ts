/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type VariationObject = {
  VariationName?: string;
  BooleanValue?: boolean;
  StringValue?: string;
  LongValue?: number;
  DoubleValue?: number;
} & VariationObject1;
export type VariationObject1 =
  | {
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };

/**
 * Resource Type definition for AWS::Evidently::Feature.
 */
export interface AwsEvidentlyFeature {
  Arn?: string;
  Project: string;
  Name: string;
  Description?: string;
  EvaluationStrategy?: "ALL_RULES" | "DEFAULT_VARIATION";
  /**
   * @minItems 1
   * @maxItems 5
   */
  Variations:
    | [VariationObject]
    | [VariationObject, VariationObject1]
    | [VariationObject, VariationObject1, VariationObject1]
    | [VariationObject, VariationObject1, VariationObject1, VariationObject1]
    | [VariationObject, VariationObject1, VariationObject1, VariationObject1, VariationObject1];
  DefaultVariation?: string;
  /**
   * @minItems 0
   * @maxItems 20
   */
  EntityOverrides?:
    | []
    | [EntityOverride]
    | [EntityOverride, EntityOverride]
    | [EntityOverride, EntityOverride, EntityOverride]
    | [EntityOverride, EntityOverride, EntityOverride, EntityOverride]
    | [EntityOverride, EntityOverride, EntityOverride, EntityOverride, EntityOverride]
    | [EntityOverride, EntityOverride, EntityOverride, EntityOverride, EntityOverride, EntityOverride]
    | [EntityOverride, EntityOverride, EntityOverride, EntityOverride, EntityOverride, EntityOverride, EntityOverride]
    | [
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride
      ]
    | [
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride
      ]
    | [
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride
      ]
    | [
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride
      ]
    | [
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride
      ]
    | [
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride
      ]
    | [
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride
      ]
    | [
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride
      ]
    | [
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride
      ]
    | [
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride
      ]
    | [
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride
      ]
    | [
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride
      ]
    | [
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride,
        EntityOverride
      ];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
}
export interface EntityOverride {
  EntityId?: string;
  Variation?: string;
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}