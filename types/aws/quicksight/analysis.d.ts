/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type AnalysisErrorType =
  | "ACCESS_DENIED"
  | "SOURCE_NOT_FOUND"
  | "DATA_SET_NOT_FOUND"
  | "INTERNAL_FAILURE"
  | "PARAMETER_VALUE_INCOMPATIBLE"
  | "PARAMETER_TYPE_INVALID"
  | "PARAMETER_NOT_FOUND"
  | "COLUMN_TYPE_MISMATCH"
  | "COLUMN_GEOGRAPHIC_ROLE_MISMATCH"
  | "COLUMN_REPLACEMENT_MISSING";
export type ResourceStatus =
  | "CREATION_IN_PROGRESS"
  | "CREATION_SUCCESSFUL"
  | "CREATION_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_SUCCESSFUL"
  | "UPDATE_FAILED"
  | "DELETED";

/**
 * Definition of the AWS::QuickSight::Analysis Resource Type.
 */
export interface AwsQuicksightAnalysis {
  AnalysisId: string;
  /**
   * <p>The Amazon Resource Name (ARN) of the analysis.</p>
   */
  Arn?: string;
  AwsAccountId: string;
  /**
   * <p>The time that the analysis was created.</p>
   */
  CreatedTime?: string;
  /**
   * <p>The ARNs of the datasets of the analysis.</p>
   *
   * @minItems 0
   * @maxItems 100
   */
  DataSetArns?: string[];
  /**
   * <p>Errors associated with the analysis.</p>
   *
   * @minItems 1
   */
  Errors?: [AnalysisError, ...AnalysisError[]];
  /**
   * <p>The time that the analysis was last updated.</p>
   */
  LastUpdatedTime?: string;
  /**
   * <p>The descriptive name of the analysis.</p>
   */
  Name?: string;
  Parameters?: Parameters;
  /**
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis. You can use the <code>Permissions</code> structure to grant permissions by
   *             providing a list of AWS Identity and Access Management (IAM) action information for each
   *             principal listed by Amazon Resource Name (ARN). </p>
   *
   *         <p>To specify no permissions, omit <code>Permissions</code>.</p>
   *
   * @minItems 1
   * @maxItems 64
   */
  Permissions?: [ResourcePermission, ...ResourcePermission[]];
  /**
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   *
   * @minItems 0
   * @maxItems 20
   */
  Sheets?:
    | []
    | [Sheet]
    | [Sheet, Sheet]
    | [Sheet, Sheet, Sheet]
    | [Sheet, Sheet, Sheet, Sheet]
    | [Sheet, Sheet, Sheet, Sheet, Sheet]
    | [Sheet, Sheet, Sheet, Sheet, Sheet, Sheet]
    | [Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet]
    | [Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet]
    | [Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet]
    | [Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet]
    | [Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet]
    | [Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet]
    | [Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet]
    | [Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet]
    | [Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet]
    | [Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet, Sheet]
    | [
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet
      ]
    | [
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet
      ]
    | [
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet
      ]
    | [
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet,
        Sheet
      ];
  SourceEntity: AnalysisSourceEntity;
  Status?: ResourceStatus;
  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   *             analysis.</p>
   *
   * @minItems 1
   * @maxItems 200
   */
  Tags?: [Tag, ...Tag[]];
  /**
   * <p>The ARN of the theme of the analysis.</p>
   */
  ThemeArn?: string;
}
/**
 * <p>A metadata error structure for an analysis.</p>
 */
export interface AnalysisError {
  Type?: AnalysisErrorType;
  /**
   * <p>The message associated with the analysis error.</p>
   */
  Message?: string;
}
/**
 * <p>A list of QuickSight parameters and the list's override values.</p>
 */
export interface Parameters {
  /**
   * <p>String parameters.</p>
   *
   * @minItems 0
   * @maxItems 100
   */
  StringParameters?: StringParameter[];
  /**
   * <p>Decimal parameters.</p>
   *
   * @minItems 0
   * @maxItems 100
   */
  DecimalParameters?: DecimalParameter[];
  /**
   * <p>Integer parameters.</p>
   *
   * @minItems 0
   * @maxItems 100
   */
  IntegerParameters?: IntegerParameter[];
  /**
   * <p>Date-time parameters.</p>
   *
   * @minItems 0
   * @maxItems 100
   */
  DateTimeParameters?: DateTimeParameter[];
}
/**
 * <p>A string parameter.</p>
 */
export interface StringParameter {
  /**
   * <p>The values of a string parameter.</p>
   */
  Values: string[];
  /**
   * <p>A display name for a string parameter.</p>
   */
  Name: string;
}
/**
 * <p>A decimal parameter.</p>
 */
export interface DecimalParameter {
  /**
   * <p>The values for the decimal parameter.</p>
   */
  Values: number[];
  /**
   * <p>A display name for the decimal parameter.</p>
   */
  Name: string;
}
/**
 * <p>An integer parameter.</p>
 */
export interface IntegerParameter {
  /**
   * <p>The values for the integer parameter.</p>
   */
  Values: number[];
  /**
   * <p>The name of the integer parameter.</p>
   */
  Name: string;
}
/**
 * <p>A date-time parameter.</p>
 */
export interface DateTimeParameter {
  /**
   * <p>The values for the date-time parameter.</p>
   */
  Values: string[];
  /**
   * <p>A display name for the date-time parameter.</p>
   */
  Name: string;
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
}
/**
 * <p>A <i>sheet</i>, which is an object that contains a set of visuals that
 *             are viewed together on one page in the Amazon QuickSight console. Every analysis and dashboard
 *             contains at least one sheet. Each sheet contains at least one visualization widget, for
 *             example a chart, pivot table, or narrative insight. Sheets can be associated with other
 *             components, such as controls, filters, and so on.</p>
 */
export interface Sheet {
  /**
   * <p>The unique identifier associated with a sheet.</p>
   */
  SheetId?: string;
  /**
   * <p>The name of a sheet. This name is displayed on the sheet's tab in the QuickSight
   *             console.</p>
   */
  Name?: string;
}
/**
 * <p>The source entity of an analysis.</p>
 */
export interface AnalysisSourceEntity {
  SourceTemplate?: AnalysisSourceTemplate;
}
/**
 * <p>The source template of an analysis.</p>
 */
export interface AnalysisSourceTemplate {
  /**
   * <p>The dataset references of the source template of an analysis.</p>
   *
   * @minItems 1
   */
  DataSetReferences: [DataSetReference, ...DataSetReference[]];
  /**
   * <p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>
   */
  Arn: string;
}
/**
 * <p>Dataset reference.</p>
 */
export interface DataSetReference {
  /**
   * <p>Dataset Amazon Resource Name (ARN).</p>
   */
  DataSetArn: string;
  /**
   * <p>Dataset placeholder.</p>
   */
  DataSetPlaceholder: string;
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
}
