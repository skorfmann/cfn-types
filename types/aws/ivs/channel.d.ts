/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::IVS::Channel
 */
export interface AwsIvsChannel {
  /**
   * Channel ARN is automatically generated on creation and assigned as the unique identifier.
   */
  Arn?: string;
  /**
   * Channel
   */
  Name?: string;
  /**
   * Whether the channel is authorized.
   */
  Authorized?: boolean;
  /**
   * Channel latency mode.
   */
  LatencyMode?: "NORMAL" | "LOW";
  /**
   * Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.
   */
  Type?: "STANDARD" | "BASIC";
  /**
   * A list of key-value pairs that contain metadata for the asset model.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
  /**
   * Channel Playback URL.
   */
  PlaybackUrl?: string;
  /**
   * Channel ingest endpoint, part of the definition of an ingest server, used when you set up streaming software.
   */
  IngestEndpoint?: string;
  /**
   * Recording Configuration ARN. A value other than an empty string indicates that recording is enabled. Default: "" (recording is disabled).
   */
  RecordingConfigurationArn?: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
