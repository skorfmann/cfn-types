/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This resource represents a schema of Glue Schema Registry.
 */
export interface AwsGlueSchema {
  /**
   * Amazon Resource Name for the Schema.
   */
  Arn?: string;
  Registry?: Registry;
  /**
   * Name of the schema.
   */
  Name: string;
  /**
   * A description of the schema. If description is not provided, there will not be any default value for this.
   */
  Description?: string;
  /**
   * Data format name to use for the schema. Accepted values: 'AVRO', 'JSON', 'PROTOBUF'
   */
  DataFormat: "AVRO" | "JSON" | "PROTOBUF";
  /**
   * Compatibility setting for the schema.
   */
  Compatibility: "NONE" | "DISABLED" | "BACKWARD" | "BACKWARD_ALL" | "FORWARD" | "FORWARD_ALL" | "FULL" | "FULL_ALL";
  /**
   * Definition for the initial schema version in plain-text.
   */
  SchemaDefinition: string;
  CheckpointVersion?: SchemaVersion;
  /**
   * List of tags to tag the schema
   *
   * @minItems 0
   * @maxItems 10
   */
  Tags?:
    | []
    | [Tag]
    | [Tag, Tag]
    | [Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag];
  /**
   * Represents the version ID associated with the initial schema version.
   */
  InitialSchemaVersionId?: string;
}
/**
 * Identifier for the registry which the schema is part of.
 */
export interface Registry {
  /**
   * Name of the registry in which the schema will be created.
   */
  Name?: string;
  /**
   * Amazon Resource Name for the Registry.
   */
  Arn?: string;
}
/**
 * Specify checkpoint version for update. This is only required to update the Compatibility.
 */
export interface SchemaVersion {
  /**
   * Indicates if the latest version needs to be updated.
   */
  IsLatest?: boolean;
  /**
   * Indicates the version number in the schema to update.
   */
  VersionNumber?: number;
}
export interface Tag {
  /**
   * A key to identify the tag.
   */
  Key: string;
  /**
   * Corresponding tag value for the key.
   */
  Value: string;
}