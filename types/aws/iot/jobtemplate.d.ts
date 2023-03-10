/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Specifies the amount of time, in minutes, this device has to finish execution of this job.
 */
export type InProgressTimeoutInMinutes = number;
export type NumberOfNotifiedThings = number;
export type NumberOfSucceededThings = number;
/**
 * The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored. The role must also grant permission for IoT to download the files.
 */
export type RoleArn = string;
/**
 * How number (in seconds) pre-signed URLs are valid.
 */
export type ExpiresInSec = number;
export type JobRetryFailureType = "FAILED" | "TIMED_OUT" | "ALL";

/**
 * Job templates enable you to preconfigure jobs so that you can deploy them to multiple sets of target devices.
 */
export interface AwsIotJobtemplate {
  Arn?: string;
  /**
   * Optional for copying a JobTemplate from a pre-existing Job configuration.
   */
  JobArn?: string;
  JobTemplateId: string;
  /**
   * A description of the Job Template.
   */
  Description: string;
  /**
   * The job document. Required if you don't specify a value for documentSource.
   */
  Document?: string;
  /**
   * An S3 link to the job document to use in the template. Required if you don't specify a value for document.
   */
  DocumentSource?: string;
  /**
   * Specifies the amount of time each device has to finish its execution of the job.
   */
  TimeoutConfig?: {
    InProgressTimeoutInMinutes: InProgressTimeoutInMinutes;
  };
  /**
   * Allows you to create a staged rollout of a job.
   */
  JobExecutionsRolloutConfig?: {
    ExponentialRolloutRate?: ExponentialRolloutRate;
    /**
     * The maximum number of things that will be notified of a pending job, per minute. This parameter allows you to create a staged rollout.
     */
    MaximumPerMinute?: number;
  };
  /**
   * The criteria that determine when and how a job abort takes place.
   */
  AbortConfig?: {
    /**
     * @minItems 1
     */
    CriteriaList: [AbortCriteria, ...AbortCriteria[]];
  };
  /**
   * Configuration for pre-signed S3 URLs.
   */
  PresignedUrlConfig?: {
    RoleArn: RoleArn;
    ExpiresInSec?: ExpiresInSec;
  };
  JobExecutionsRetryConfig?: {
    /**
     * @minItems 1
     * @maxItems 2
     */
    RetryCriteriaList?: [RetryCriteria] | [RetryCriteria, RetryCriteria];
  };
  MaintenanceWindows?: MaintenanceWindow[];
  /**
   * Metadata that can be used to manage the JobTemplate.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
}
/**
 * The rate of increase for a job rollout. This parameter allows you to define an exponential rate for a job rollout.
 */
export interface ExponentialRolloutRate {
  /**
   * The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. This parameter allows you to define the initial rate of rollout.
   */
  BaseRatePerMinute: number;
  /**
   * The exponential factor to increase the rate of rollout for a job.
   */
  IncrementFactor: number;
  RateIncreaseCriteria: RateIncreaseCriteria;
}
/**
 * The criteria to initiate the increase in rate of rollout for a job.
 */
export interface RateIncreaseCriteria {
  NumberOfNotifiedThings?: NumberOfNotifiedThings;
  NumberOfSucceededThings?: NumberOfSucceededThings;
}
/**
 * The criteria that determine when and how a job abort takes place.
 */
export interface AbortCriteria {
  /**
   * The type of job action to take to initiate the job abort.
   */
  Action: "CANCEL";
  /**
   * The type of job execution failures that can initiate a job abort.
   */
  FailureType: "FAILED" | "REJECTED" | "TIMED_OUT" | "ALL";
  /**
   * The minimum number of things which must receive job execution notifications before the job can be aborted.
   */
  MinNumberOfExecutedThings: number;
  /**
   * The minimum percentage of job execution failures that must occur to initiate the job abort.
   */
  ThresholdPercentage: number;
}
/**
 * Specifies how many times a failure type should be retried.
 */
export interface RetryCriteria {
  NumberOfRetries?: number;
  FailureType?: JobRetryFailureType;
}
/**
 * Specifies a start time and duration for a scheduled Job.
 */
export interface MaintenanceWindow {
  StartTime?: string;
  DurationInMinutes?: number;
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
