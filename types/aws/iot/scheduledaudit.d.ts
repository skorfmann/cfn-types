/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Scheduled audits can be used to specify the checks you want to perform during an audit and how often the audit should be run.
 */
export interface AwsIotScheduledaudit {
  /**
   * The name you want to give to the scheduled audit.
   */
  ScheduledAuditName?: string;
  /**
   * How often the scheduled audit takes place. Can be one of DAILY, WEEKLY, BIWEEKLY, or MONTHLY.
   */
  Frequency: "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY";
  /**
   * The day of the month on which the scheduled audit takes place. Can be 1 through 31 or LAST. This field is required if the frequency parameter is set to MONTHLY.
   */
  DayOfMonth?: string;
  /**
   * The day of the week on which the scheduled audit takes place. Can be one of SUN, MON, TUE,WED, THU, FRI, or SAT. This field is required if the frequency parameter is set to WEEKLY or BIWEEKLY.
   */
  DayOfWeek?: "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "UNSET_VALUE";
  /**
   * Which checks are performed during the scheduled audit. Checks must be enabled for your account.
   */
  TargetCheckNames: string[];
  /**
   * The ARN (Amazon resource name) of the scheduled audit.
   */
  ScheduledAuditArn?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The tag's key.
   */
  Key: string;
  /**
   * The tag's value.
   */
  Value: string;
}
