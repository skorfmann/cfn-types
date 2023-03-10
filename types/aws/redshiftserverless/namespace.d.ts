/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type LogExport = "useractivitylog" | "userlog" | "connectionlog";
export type NamespaceStatus = "AVAILABLE" | "MODIFYING" | "DELETING";

/**
 * Definition of AWS::RedshiftServerless::Namespace Resource Type
 */
export interface AwsRedshiftserverlessNamespace {
  /**
   * The password associated with the admin user for the namespace that is being created. Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit.
   */
  AdminUserPassword?: string;
  /**
   * The user name associated with the admin user for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet.
   */
  AdminUsername?: string;
  /**
   * The database name associated for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet.
   */
  DbName?: string;
  /**
   * The default IAM role ARN for the namespace that is being created.
   */
  DefaultIamRoleArn?: string;
  /**
   * A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10.
   */
  IamRoles?: string[];
  /**
   * The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace.
   */
  KmsKeyId?: string;
  /**
   * The collection of log types to be exported provided by the customer. Should only be one of the three supported log types: userlog, useractivitylog and connectionlog
   *
   * @minItems 0
   * @maxItems 16
   */
  LogExports?:
    | []
    | [LogExport]
    | [LogExport, LogExport]
    | [LogExport, LogExport, LogExport]
    | [LogExport, LogExport, LogExport, LogExport]
    | [LogExport, LogExport, LogExport, LogExport, LogExport]
    | [LogExport, LogExport, LogExport, LogExport, LogExport, LogExport]
    | [LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport]
    | [LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport]
    | [LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport]
    | [LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport]
    | [
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport
      ]
    | [
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport
      ]
    | [
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport
      ]
    | [
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport
      ]
    | [
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport
      ]
    | [
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport
      ];
  Namespace?: Namespace;
  /**
   * A unique identifier for the namespace. You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account.
   */
  NamespaceName: string;
  /**
   * The list of tags for the namespace.
   *
   * @minItems 0
   * @maxItems 200
   */
  Tags?: Tag[];
  /**
   * The name of the namespace the source snapshot was created from. Please specify the name if needed before deleting namespace
   */
  FinalSnapshotName?: string;
  /**
   * The number of days to retain automated snapshot in the destination region after they are copied from the source region. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653.
   */
  FinalSnapshotRetentionPeriod?: number;
}
export interface Namespace {
  NamespaceArn?: string;
  NamespaceId?: string;
  NamespaceName?: string;
  AdminUsername?: string;
  DbName?: string;
  KmsKeyId?: string;
  DefaultIamRoleArn?: string;
  IamRoles?: string[];
  /**
   * @minItems 0
   * @maxItems 16
   */
  LogExports?:
    | []
    | [LogExport]
    | [LogExport, LogExport]
    | [LogExport, LogExport, LogExport]
    | [LogExport, LogExport, LogExport, LogExport]
    | [LogExport, LogExport, LogExport, LogExport, LogExport]
    | [LogExport, LogExport, LogExport, LogExport, LogExport, LogExport]
    | [LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport]
    | [LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport]
    | [LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport]
    | [LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport, LogExport]
    | [
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport
      ]
    | [
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport
      ]
    | [
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport
      ]
    | [
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport
      ]
    | [
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport
      ]
    | [
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport,
        LogExport
      ];
  Status?: NamespaceStatus;
  CreationDate?: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
