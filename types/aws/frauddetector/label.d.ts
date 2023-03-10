/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An label for fraud detector.
 */
export interface AwsFrauddetectorLabel {
  /**
   * The name of the label.
   */
  Name: string;
  /**
   * Tags associated with this label.
   *
   * @maxItems 200
   */
  Tags?: Tag[];
  /**
   * The label description.
   */
  Description?: string;
  /**
   * The label ARN.
   */
  Arn?: string;
  /**
   * The timestamp when the label was created.
   */
  CreatedTime?: string;
  /**
   * The timestamp when the label was last updated.
   */
  LastUpdatedTime?: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
