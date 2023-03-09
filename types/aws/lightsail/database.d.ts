/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Lightsail::Database
 */
export interface AwsLightsailDatabase {
  /**
   * The name to use for your new Lightsail database resource.
   */
  RelationalDatabaseName: string;
  DatabaseArn?: string;
  /**
   * The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format.
   */
  AvailabilityZone?: string;
  /**
   * The blueprint ID for your new database. A blueprint describes the major engine version of a database.
   */
  RelationalDatabaseBlueprintId: string;
  /**
   * The bundle ID for your new database. A bundle describes the performance specifications for your database.
   */
  RelationalDatabaseBundleId: string;
  /**
   * The name of the database to create when the Lightsail database resource is created. For MySQL, if this parameter isn't specified, no database is created in the database resource. For PostgreSQL, if this parameter isn't specified, a database named postgres is created in the database resource.
   */
  MasterDatabaseName: string;
  /**
   * The name for the master user.
   */
  MasterUsername: string;
  /**
   * The password for the master user. The password can include any printable ASCII character except "/", """, or "@". It cannot contain spaces.
   */
  MasterUserPassword?: string;
  /**
   * The daily time range during which automated backups are created for your new database if automated backups are enabled.
   */
  PreferredBackupWindow?: string;
  /**
   * The weekly time range during which system maintenance can occur on your new database.
   */
  PreferredMaintenanceWindow?: string;
  /**
   * Specifies the accessibility options for your new database. A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.
   */
  PubliclyAccessible?: boolean;
  /**
   * Indicates the certificate that needs to be associated with the database.
   */
  CaCertificateIdentifier?: string;
  /**
   * When true, enables automated backup retention for your database. Updates are applied during the next maintenance window because this can result in an outage.
   */
  BackupRetention?: boolean;
  /**
   * When true, the master user password is changed to a new strong password generated by Lightsail. Use the get relational database master user password operation to get the new password.
   */
  RotateMasterUserPassword?: boolean;
  /**
   * Update one or more parameters of the relational database.
   */
  RelationalDatabaseParameters?: RelationalDatabaseParameter[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
}
/**
 * Describes the parameters of the database.
 */
export interface RelationalDatabaseParameter {
  /**
   * Specifies the valid range of values for the parameter.
   */
  AllowedValues?: string;
  /**
   * Indicates when parameter updates are applied. Can be immediate or pending-reboot.
   */
  ApplyMethod?: string;
  /**
   * Specifies the engine-specific parameter type.
   */
  ApplyType?: string;
  /**
   * Specifies the valid data type for the parameter.
   */
  DataType?: string;
  /**
   * Provides a description of the parameter.
   */
  Description?: string;
  /**
   * A Boolean value indicating whether the parameter can be modified.
   */
  IsModifiable?: boolean;
  /**
   * Specifies the name of the parameter.
   */
  ParameterName?: string;
  /**
   * Specifies the value of the parameter.
   */
  ParameterValue?: string;
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
  Value?: string;
}
