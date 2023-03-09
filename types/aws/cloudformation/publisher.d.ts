/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Register as a publisher in the CloudFormation Registry.
 */
export interface AwsCloudformationPublisher {
  /**
   * Whether you accept the terms and conditions for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to publish public extensions to the CloudFormation registry. The terms and conditions can be found at https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf
   */
  AcceptTermsAndConditions: boolean;
  /**
   * The publisher id assigned by CloudFormation for publishing in this region.
   */
  PublisherId?: string;
  /**
   * If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account.
   */
  ConnectionArn?: string;
  /**
   * Whether the publisher is verified.
   */
  PublisherStatus?: "VERIFIED" | "UNVERIFIED";
  /**
   * The URL to the publisher's profile with the identity provider.
   */
  PublisherProfile?: string;
  /**
   * The type of account used as the identity provider when registering this publisher with CloudFormation.
   */
  IdentityProvider?: "AWS_Marketplace" | "GitHub" | "Bitbucket";
}
