/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS Route53 Recovery Control basic constructs and validation rules.
 */
export type AwsRoute53RecoverycontrolSafetyrule = {
  AssertionRule?: AssertionRule;
  GatingRule?: GatingRule;
  Name?: SafetyRuleName;
  /**
   * The Amazon Resource Name (ARN) of the safety rule.
   */
  SafetyRuleArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the control panel.
   */
  ControlPanelArn?: string;
  /**
   * The deployment status of the routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
   */
  Status?: "PENDING" | "DEPLOYED" | "PENDING_DELETION";
  RuleConfig?: RuleConfig;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
} & {
  [k: string]: unknown;
};
/**
 * The name for the safety rule.
 */
export type SafetyRuleName = string;
/**
 * A rule can be one of the following: ATLEAST, AND, or OR.
 */
export type RuleType = "AND" | "OR" | "ATLEAST";

/**
 * An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.
 */
export interface AssertionRule {
  /**
   * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.
   */
  WaitPeriodMs: number;
  /**
   * The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three AWS Regions.
   */
  AssertedControls: string[];
}
/**
 * A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.
 */
export interface GatingRule {
  /**
   * The gating controls for the gating rule. That is, routing controls that are evaluated by the rule configuration that you specify.
   */
  GatingControls: string[];
  /**
   * Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. For example, say you have three gating controls, one for each of three AWS Regions. Now you specify AtLeast 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true.
   * In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.
   */
  TargetControls: string[];
  /**
   * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.
   */
  WaitPeriodMs: number;
}
/**
 * The rule configuration for an assertion rule or gating rule. This is the criteria that you set for specific assertion controls (routing controls) or gating controls. This configuration specifies how many controls must be enabled after a transaction completes.
 */
export interface RuleConfig {
  Type: RuleType;
  /**
   * The value of N, when you specify an ATLEAST rule type. That is, Threshold is the number of controls that must be set when you specify an ATLEAST type.
   */
  Threshold: number;
  /**
   * Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.
   */
  Inverted: boolean;
}
export interface Tag {
  Key: string;
  Value: string;
}
