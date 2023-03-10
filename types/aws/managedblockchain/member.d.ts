/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ManagedBlockchain::Member
 */
export interface AwsManagedblockchainMember {
  MemberId?: string;
  NetworkId?: string;
  MemberConfiguration: MemberConfiguration;
  NetworkConfiguration?: NetworkConfiguration;
  InvitationId?: string;
}
export interface MemberConfiguration {
  Description?: string;
  MemberFrameworkConfiguration?: MemberFrameworkConfiguration;
  Name: string;
}
export interface MemberFrameworkConfiguration {
  MemberFabricConfiguration?: MemberFabricConfiguration;
}
export interface MemberFabricConfiguration {
  AdminUsername: string;
  AdminPassword: string;
}
export interface NetworkConfiguration {
  Description?: string;
  FrameworkVersion: string;
  VotingPolicy: VotingPolicy;
  Framework: string;
  Name: string;
  NetworkFrameworkConfiguration?: NetworkFrameworkConfiguration;
}
export interface VotingPolicy {
  ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
}
export interface ApprovalThresholdPolicy {
  ThresholdComparator?: string;
  ThresholdPercentage?: number;
  ProposalDurationInHours?: number;
}
export interface NetworkFrameworkConfiguration {
  NetworkFabricConfiguration?: NetworkFabricConfiguration;
}
export interface NetworkFabricConfiguration {
  Edition: string;
}
