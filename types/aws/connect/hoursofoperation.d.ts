/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Connect::HoursOfOperation
 */
export interface AwsConnectHoursofoperation {
  /**
   * The identifier of the Amazon Connect instance.
   */
  InstanceArn: string;
  /**
   * The name of the hours of operation.
   */
  Name: string;
  /**
   * The description of the hours of operation.
   */
  Description?: string;
  /**
   * The time zone of the hours of operation.
   */
  TimeZone: string;
  /**
   * Configuration information for the hours of operation: day, start time, and end time.
   *
   * @maxItems 100
   */
  Config: HoursOfOperationConfig[];
  /**
   * The Amazon Resource Name (ARN) for the hours of operation.
   */
  HoursOfOperationArn?: string;
  /**
   * One or more tags.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
}
/**
 * Contains information about the hours of operation.
 */
export interface HoursOfOperationConfig {
  /**
   * The day that the hours of operation applies to.
   */
  Day: "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY";
  StartTime: HoursOfOperationTimeSlice;
  EndTime: HoursOfOperationTimeSlice1;
}
/**
 * The start time that your contact center opens.
 */
export interface HoursOfOperationTimeSlice {
  /**
   * The hours.
   */
  Hours: number;
  /**
   * The minutes.
   */
  Minutes: number;
}
/**
 * The end time that your contact center closes.
 */
export interface HoursOfOperationTimeSlice1 {
  /**
   * The hours.
   */
  Hours: number;
  /**
   * The minutes.
   */
  Minutes: number;
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
   * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}
