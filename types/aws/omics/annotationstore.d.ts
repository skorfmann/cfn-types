/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type EncryptionType = "KMS";
export type StoreStatus = "CREATING" | "UPDATING" | "DELETING" | "ACTIVE" | "FAILED";
export type StoreFormat = "GFF" | "TSV" | "VCF";
export type StoreOptions = TsvStoreOptions;
export type AnnotationType =
  | "GENERIC"
  | "CHR_POS"
  | "CHR_POS_REF_ALT"
  | "CHR_START_END_ONE_BASE"
  | "CHR_START_END_REF_ALT_ONE_BASE"
  | "CHR_START_END_ZERO_BASE"
  | "CHR_START_END_REF_ALT_ZERO_BASE";
/**
 * This interface was referenced by `SchemaItem`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z0-9_]{1,255}$".
 */
export type SchemaValueType = "LONG" | "INT" | "STRING" | "FLOAT" | "DOUBLE" | "BOOLEAN";

/**
 * Definition of AWS::Omics::AnnotationStore Resource Type
 */
export interface AwsOmicsAnnotationstore {
  CreationTime?: string;
  Description?: string;
  Id?: string;
  Name: string;
  Reference?: ReferenceItem;
  SseConfig?: SseConfig;
  Status?: StoreStatus;
  StatusMessage?: string;
  StoreArn?: string;
  StoreFormat: StoreFormat;
  StoreOptions?: StoreOptions;
  StoreSizeBytes?: number;
  Tags?: TagMap;
  UpdateTime?: string;
}
export interface ReferenceItem {
  ReferenceArn: string;
}
export interface SseConfig {
  Type: EncryptionType;
  KeyArn?: string;
}
export interface TsvStoreOptions {
  TsvStoreOptions: TsvStoreOptions1;
}
export interface TsvStoreOptions1 {
  AnnotationType?: AnnotationType;
  FormatToHeader?: FormatToHeader;
  /**
   * @minItems 1
   * @maxItems 5000
   */
  Schema?: [SchemaItem, ...SchemaItem[]];
}
export interface FormatToHeader {
  /**
   * This interface was referenced by `FormatToHeader`'s JSON-Schema definition
   * via the `patternProperty` ".+".
   */
  [k: string]: string;
}
export interface SchemaItem {
  [k: string]: SchemaValueType;
}
export interface TagMap {
  /**
   * This interface was referenced by `TagMap`'s JSON-Schema definition
   * via the `patternProperty` ".+".
   */
  [k: string]: string;
}
