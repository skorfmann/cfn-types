/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type GeoSpatialCountryCode = "US";
export type DataSetImportMode = "SPICE" | "DIRECT_QUERY";
export type GeoSpatialDataRole =
  | "COUNTRY"
  | "STATE"
  | "COUNTY"
  | "CITY"
  | "POSTCODE"
  | "LONGITUDE"
  | "LATITUDE"
  | "POLITICAL1";
export type ColumnDataType = "STRING" | "INTEGER" | "DECIMAL" | "DATETIME";
export type JoinType = "INNER" | "OUTER" | "LEFT" | "RIGHT";
export type InputColumnDataType = "STRING" | "INTEGER" | "DECIMAL" | "DATETIME" | "BIT" | "BOOLEAN" | "JSON";
export type TextQualifier = "DOUBLE_QUOTE" | "SINGLE_QUOTE";
export type FileFormat = "CSV" | "TSV" | "CLF" | "ELF" | "XLSX" | "JSON";
export type RowLevelPermissionPolicy = "GRANT_ACCESS" | "DENY_ACCESS";
export type RowLevelPermissionFormatVersion = "VERSION_1" | "VERSION_2";

/**
 * Definition of the AWS::QuickSight::DataSet Resource Type.
 */
export interface AwsQuicksightDataset {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;
  AwsAccountId?: string;
  /**
   * <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   *
   * @minItems 1
   * @maxItems 8
   */
  ColumnGroups?:
    | [ColumnGroup]
    | [ColumnGroup, ColumnGroup]
    | [ColumnGroup, ColumnGroup, ColumnGroup]
    | [ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup]
    | [ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup]
    | [ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup]
    | [ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup]
    | [ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup, ColumnGroup];
  /**
   * @minItems 1
   */
  ColumnLevelPermissionRules?: [ColumnLevelPermissionRule, ...ColumnLevelPermissionRule[]];
  /**
   * <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
   *             imported into SPICE.</p>
   */
  ConsumedSpiceCapacityInBytes?: number;
  /**
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: string;
  DataSetId?: string;
  FieldFolders?: FieldFolderMap;
  ImportMode?: DataSetImportMode;
  /**
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: string;
  LogicalTableMap?: LogicalTableMap;
  /**
   * <p>The display name for the dataset.</p>
   */
  Name?: string;
  /**
   * <p>The list of columns after all transforms. These columns are available in templates,
   *             analyses, and dashboards.</p>
   */
  OutputColumns?: OutputColumn[];
  /**
   * <p>A list of resource permissions on the dataset.</p>
   *
   * @minItems 1
   * @maxItems 64
   */
  Permissions?: [ResourcePermission, ...ResourcePermission[]];
  PhysicalTableMap?: PhysicalTableMap;
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
   *
   * @minItems 1
   * @maxItems 200
   */
  Tags?: [Tag, ...Tag[]];
  IngestionWaitPolicy?: IngestionWaitPolicy;
  DataSetUsageConfiguration?: DataSetUsageConfiguration;
}
/**
 * <p>Groupings of columns that work together in certain Amazon QuickSight features. This is
 *             a variant type structure. For this structure to be valid, only one of the attributes can
 *             be non-null.</p>
 */
export interface ColumnGroup {
  GeoSpatialColumnGroup?: GeoSpatialColumnGroup;
  [k: string]: unknown;
}
/**
 * <p>Geospatial column group that denotes a hierarchy.</p>
 */
export interface GeoSpatialColumnGroup {
  /**
   * <p>Columns in this hierarchy.</p>
   *
   * @minItems 1
   * @maxItems 16
   */
  Columns:
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ];
  CountryCode?: GeoSpatialCountryCode;
  /**
   * <p>A display name for the hierarchy.</p>
   */
  Name: string;
  [k: string]: unknown;
}
export interface ColumnLevelPermissionRule {
  /**
   * @minItems 1
   */
  ColumnNames?: [string, ...string[]];
  /**
   * @minItems 1
   * @maxItems 100
   */
  Principals?: [string, ...string[]];
  [k: string]: unknown;
}
export interface FieldFolderMap {
  [k: string]: FieldFolder;
}
/**
 * This interface was referenced by `FieldFolderMap`'s JSON-Schema definition
 * via the `patternProperty` ".+".
 */
export interface FieldFolder {
  Description?: string;
  /**
   * @minItems 0
   * @maxItems 5000
   */
  Columns?: string[];
  [k: string]: unknown;
}
export interface LogicalTableMap {
  [k: string]: LogicalTable;
}
/**
 * <p>A <i>logical table</i> is a unit that joins and that data
 *             transformations operate on. A logical table has a source, which can be either a physical
 *             table or result of a join. When a logical table points to a physical table, the logical
 *             table acts as a mutable copy of that physical table through transform operations.</p>
 *
 * This interface was referenced by `LogicalTableMap`'s JSON-Schema definition
 * via the `patternProperty` "[0-9a-zA-Z-]*".
 */
export interface LogicalTable {
  /**
   * <p>A display name for the logical table.</p>
   */
  Alias: string;
  /**
   * <p>Transform operations that act on this logical table.</p>
   *
   * @minItems 1
   * @maxItems 2048
   */
  DataTransforms?: [TransformOperation, ...TransformOperation[]];
  Source: LogicalTableSource;
  [k: string]: unknown;
}
/**
 * <p>A data transformation on a logical table. This is a variant type structure. For this
 *             structure to be valid, only one of the attributes can be non-null.</p>
 */
export interface TransformOperation {
  TagColumnOperation?: TagColumnOperation;
  FilterOperation?: FilterOperation;
  CastColumnTypeOperation?: CastColumnTypeOperation;
  CreateColumnsOperation?: CreateColumnsOperation;
  RenameColumnOperation?: RenameColumnOperation;
  ProjectOperation?: ProjectOperation;
  [k: string]: unknown;
}
/**
 * <p>A transform operation that tags a column with additional information.</p>
 */
export interface TagColumnOperation {
  /**
   * <p>The column that this operation acts on.</p>
   */
  ColumnName: string;
  /**
   * <p>The dataset column tag, currently only used for geospatial type tagging. .</p>
   *         <note>
   *             <p>This is not tags for the AWS tagging feature. .</p>
   *         </note>
   *
   * @minItems 1
   * @maxItems 16
   */
  Tags:
    | [ColumnTag]
    | [ColumnTag, ColumnTag]
    | [ColumnTag, ColumnTag, ColumnTag]
    | [ColumnTag, ColumnTag, ColumnTag, ColumnTag]
    | [ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag]
    | [ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag]
    | [ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag]
    | [ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag]
    | [ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag]
    | [ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag, ColumnTag]
    | [
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag
      ]
    | [
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag
      ]
    | [
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag
      ]
    | [
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag
      ]
    | [
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag
      ]
    | [
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag,
        ColumnTag
      ];
  [k: string]: unknown;
}
/**
 * <p>A tag for a column in a <a>TagColumnOperation</a> structure. This is a
 *             variant type structure. For this structure to be valid, only one of the attributes can
 *             be non-null.</p>
 */
export interface ColumnTag {
  ColumnGeographicRole?: GeoSpatialDataRole;
  ColumnDescription?: ColumnDescription;
  [k: string]: unknown;
}
/**
 * <p>Metadata that contains a description for a column.</p>
 */
export interface ColumnDescription {
  /**
   * <p>The text of a description for a column.</p>
   */
  Text?: string;
  [k: string]: unknown;
}
/**
 * <p>A transform operation that filters rows based on a condition.</p>
 */
export interface FilterOperation {
  /**
   * <p>An expression that must evaluate to a Boolean value. Rows for which the expression
   *             evaluates to true are kept in the dataset.</p>
   */
  ConditionExpression: string;
  [k: string]: unknown;
}
/**
 * <p>A transform operation that casts a column to a different type.</p>
 */
export interface CastColumnTypeOperation {
  /**
   * <p>Column name.</p>
   */
  ColumnName: string;
  /**
   * <p>When casting a column from string to datetime type, you can supply a string in a
   *             format supported by Amazon QuickSight to denote the source data format.</p>
   */
  Format?: string;
  NewColumnType: ColumnDataType;
  [k: string]: unknown;
}
/**
 * <p>A transform operation that creates calculated columns. Columns created in one such
 *             operation form a lexical closure.</p>
 */
export interface CreateColumnsOperation {
  /**
   * <p>Calculated columns to create.</p>
   *
   * @minItems 1
   * @maxItems 128
   */
  Columns: [CalculatedColumn, ...CalculatedColumn[]];
  [k: string]: unknown;
}
/**
 * <p>A calculated column for a dataset.</p>
 */
export interface CalculatedColumn {
  /**
   * <p>A unique ID to identify a calculated column. During a dataset update, if the column ID
   *             of a calculated column matches that of an existing calculated column, Amazon QuickSight
   *             preserves the existing calculated column.</p>
   */
  ColumnId: string;
  /**
   * <p>Column name.</p>
   */
  ColumnName: string;
  /**
   * <p>An expression that defines the calculated column.</p>
   */
  Expression: string;
  [k: string]: unknown;
}
/**
 * <p>A transform operation that renames a column.</p>
 */
export interface RenameColumnOperation {
  /**
   * <p>The new name for the column.</p>
   */
  NewColumnName: string;
  /**
   * <p>The name of the column to be renamed.</p>
   */
  ColumnName: string;
  [k: string]: unknown;
}
/**
 * <p>A transform operation that projects columns. Operations that come after a projection
 *             can only refer to projected columns.</p>
 */
export interface ProjectOperation {
  /**
   * <p>Projected columns.</p>
   *
   * @minItems 1
   * @maxItems 2000
   */
  ProjectedColumns: [string, ...string[]];
  [k: string]: unknown;
}
/**
 * <p>Information about the source of a logical table. This is a variant type structure. For
 *             this structure to be valid, only one of the attributes can be non-null.</p>
 */
export interface LogicalTableSource {
  /**
   * <p>Physical table ID.</p>
   */
  PhysicalTableId?: string;
  JoinInstruction?: JoinInstruction;
  /**
   * <p>The Amazon Resource Name (ARN) for the dataset.</p>
   */
  DataSetArn?: string;
  [k: string]: unknown;
}
/**
 * <p>Join instruction.</p>
 */
export interface JoinInstruction {
  /**
   * <p>On Clause.</p>
   */
  OnClause: string;
  Type: JoinType;
  LeftJoinKeyProperties?: JoinKeyProperties;
  /**
   * <p>Left operand.</p>
   */
  LeftOperand: string;
  /**
   * <p>Right operand.</p>
   */
  RightOperand: string;
  RightJoinKeyProperties?: JoinKeyProperties;
  [k: string]: unknown;
}
export interface JoinKeyProperties {
  UniqueKey?: boolean;
  [k: string]: unknown;
}
/**
 * <p>Output column.</p>
 */
export interface OutputColumn {
  Type?: ColumnDataType;
  /**
   * <p>A description for a column.</p>
   */
  Description?: string;
  /**
   * <p>A display name for the dataset.</p>
   */
  Name?: string;
  [k: string]: unknown;
}
/**
 * <p>Permission for the resource.</p>
 */
export interface ResourcePermission {
  /**
   * <p>The IAM action to grant or revoke permissions on.</p>
   *
   * @minItems 1
   * @maxItems 16
   */
  Actions:
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ];
  /**
   * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
   *             </li>
   *             <li>
   *                 <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
   *             </li>
   *             <li>
   *                 <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
   *                     ARN. Use this option only to share resources (templates) across AWS accounts.
   *                     (This is less common.) </p>
   *             </li>
   *          </ul>
   */
  Principal: string;
  [k: string]: unknown;
}
export interface PhysicalTableMap {
  [k: string]: PhysicalTable;
}
/**
 * <p>A view of a data source that contains information about the shape of the data in the
 *             underlying source. This is a variant type structure. For this structure to be valid,
 *             only one of the attributes can be non-null.</p>
 *
 * This interface was referenced by `PhysicalTableMap`'s JSON-Schema definition
 * via the `patternProperty` "[0-9a-zA-Z-]*".
 */
export interface PhysicalTable {
  RelationalTable?: RelationalTable;
  CustomSql?: CustomSql;
  S3Source?: S3Source;
  [k: string]: unknown;
}
/**
 * <p>A physical table type for relational data sources.</p>
 */
export interface RelationalTable {
  /**
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string;
  /**
   * <p>The column schema of the table.</p>
   *
   * @minItems 1
   * @maxItems 2048
   */
  InputColumns: [InputColumn, ...InputColumn[]];
  /**
   * <p>The schema name. This name applies to certain relational database engines.</p>
   */
  Schema?: string;
  /**
   * <p>The catalog associated with a table.</p>
   */
  Catalog?: string;
  /**
   * <p>The name of the relational table.</p>
   */
  Name: string;
  [k: string]: unknown;
}
/**
 * <p>Metadata for a column that is used as the input of a transform operation.</p>
 */
export interface InputColumn {
  Type: InputColumnDataType;
  /**
   * <p>The name of this column in the underlying data source.</p>
   */
  Name: string;
  [k: string]: unknown;
}
/**
 * <p>A physical table type built from the results of the custom SQL query.</p>
 */
export interface CustomSql {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn: string;
  /**
   * <p>The SQL query.</p>
   */
  SqlQuery: string;
  /**
   * <p>The column schema from the SQL query result set.</p>
   *
   * @minItems 1
   * @maxItems 2048
   */
  Columns: [InputColumn, ...InputColumn[]];
  /**
   * <p>A display name for the SQL query result.</p>
   */
  Name: string;
  [k: string]: unknown;
}
/**
 * <p>A physical table type for as S3 data source.</p>
 */
export interface S3Source {
  /**
   * <p>The amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string;
  /**
   * <p>A physical table type for as S3 data source.</p>
   *
   * @minItems 1
   * @maxItems 2048
   */
  InputColumns: [InputColumn, ...InputColumn[]];
  UploadSettings?: UploadSettings;
  [k: string]: unknown;
}
/**
 * <p>Information about the format for a source file or files.</p>
 */
export interface UploadSettings {
  /**
   * <p>Whether the file has a header row, or the files each have a header row.</p>
   */
  ContainsHeader?: boolean;
  TextQualifier?: TextQualifier;
  Format?: FileFormat;
  /**
   * <p>A row number to start reading data from.</p>
   */
  StartFromRow?: number;
  /**
   * <p>The delimiter between values in the file.</p>
   */
  Delimiter?: string;
  [k: string]: unknown;
}
/**
 * <p>The row-level security configuration for the dataset.</p>
 */
export interface RowLevelPermissionDataSet {
  /**
   * <p>The Amazon Resource Name (ARN) of the permission dataset.</p>
   */
  Arn: string;
  /**
   * <p>The namespace associated with the row-level permissions dataset.</p>
   */
  Namespace?: string;
  PermissionPolicy: RowLevelPermissionPolicy;
  FormatVersion?: RowLevelPermissionFormatVersion;
  [k: string]: unknown;
}
/**
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
 *             resource.</p>
 */
export interface Tag {
  /**
   * <p>Tag value.</p>
   */
  Value: string;
  /**
   * <p>Tag key.</p>
   */
  Key: string;
  [k: string]: unknown;
}
/**
 * <p>Wait policy to use when creating/updating dataset. Default is to wait for SPICE ingestion to finish with timeout of 36 hours.</p>
 */
export interface IngestionWaitPolicy {
  /**
   * <p>Wait for SPICE ingestion to finish to mark dataset creation/update successful. Default (true).
   *   Applicable only when DataSetImportMode mode is set to SPICE.</p>
   */
  WaitForSpiceIngestion?: boolean;
  /**
   * <p>The maximum time (in hours) to wait for Ingestion to complete. Default timeout is 36 hours.
   *  Applicable only when DataSetImportMode mode is set to SPICE and WaitForSpiceIngestion is set to true.</p>
   */
  IngestionWaitTimeInHours?: number;
  [k: string]: unknown;
}
/**
 * <p>The dataset usage configuration for the dataset.</p>
 */
export interface DataSetUsageConfiguration {
  DisableUseAsDirectQuerySource?: boolean;
  DisableUseAsImportedSource?: boolean;
  [k: string]: unknown;
}