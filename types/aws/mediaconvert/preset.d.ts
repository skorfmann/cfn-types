/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::MediaConvert::Preset
 */
export interface AwsMediaconvertPreset {
  Category?: string;
  Description?: string;
  SettingsJson: {
    [k: string]: unknown;
  };
  Id?: string;
  Arn?: string;
  Tags?: {
    [k: string]: unknown;
  };
  Name?: string;
}