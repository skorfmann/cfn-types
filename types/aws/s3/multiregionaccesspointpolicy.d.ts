/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The policy to be attached to a Multi Region Access Point
 */
export interface AwsS3Multiregionaccesspointpolicy {
  /**
   * The name of the Multi Region Access Point to apply policy
   */
  MrapName: string;
  /**
   * Policy document to apply to a Multi Region Access Point
   */
  Policy: {
    [k: string]: unknown;
  };
  /**
   * The Policy Status associated with this Multi Region Access Point
   */
  PolicyStatus?: {
    /**
     * Specifies whether the policy is public or not.
     */
    IsPublic: "true" | "false";
  };
}
