/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The AWS::CloudWatch::CompositeAlarm type specifies an alarm which aggregates the states of other Alarms (Metric or Composite Alarms) as defined by the AlarmRule expression
 */
export interface AwsCloudwatchCompositealarm {
  /**
   * Amazon Resource Name (ARN) of the alarm
   */
  Arn?: string;
  /**
   * The name of the Composite Alarm
   */
  AlarmName?: string;
  /**
   * Expression which aggregates the state of other Alarms (Metric or Composite Alarms)
   */
  AlarmRule: string;
  /**
   * The description of the alarm
   */
  AlarmDescription?: string;
  /**
   * Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
   */
  ActionsEnabled?: boolean;
  /**
   * The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * @maxItems 5
   */
  OKActions?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string];
  /**
   * The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN).
   *
   * @maxItems 5
   */
  AlarmActions?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string];
  /**
   * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * @maxItems 5
   */
  InsufficientDataActions?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string];
  /**
   * Actions will be suppressed if the suppressor alarm is in the ALARM state. ActionsSuppressor can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm.
   */
  ActionsSuppressor?: string;
  /**
   * Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds.
   */
  ActionsSuppressorWaitPeriod?: number;
  /**
   * Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds.
   */
  ActionsSuppressorExtensionPeriod?: number;
}
