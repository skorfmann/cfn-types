/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A Base62 ID
 */
export type Base62Id = string;
/**
 * An AWS resource type
 */
export type ResourceType = string;
/**
 * A resource ARN or URI.
 */
export type Resource = string;

/**
 * Creates an AWS Firewall Manager resource set.
 */
export interface AwsFmsResourceset {
  Id?: Base62Id;
  Name: string;
  Description?: string;
  ResourceTypeList: ResourceType[];
  Resources?: Resource[];
  Tags?: Tag[];
}
/**
 * A tag.
 */
export interface Tag {
  Key: string;
  Value: string;
}
