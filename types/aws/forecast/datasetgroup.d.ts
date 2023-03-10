/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Arn = string;

/**
 * Represents a dataset group that holds a collection of related datasets
 */
export interface AwsForecastDatasetgroup {
  /**
   * An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the dataset group.
   */
  DatasetArns?: Arn[];
  /**
   * A name for the dataset group.
   */
  DatasetGroupName: string;
  /**
   * The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value specified for the Domain parameter of the CreateDataset operation must match.
   */
  Domain: "RETAIL" | "CUSTOM" | "INVENTORY_PLANNING" | "EC2_CAPACITY" | "WORK_FORCE" | "WEB_TRAFFIC" | "METRICS";
  /**
   * The tags of Application Insights application.
   *
   * @minItems 0
   * @maxItems 200
   */
  Tags?: Tag[];
  /**
   * The Amazon Resource Name (ARN) of the dataset group to delete.
   */
  DatasetGroupArn?: string;
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
