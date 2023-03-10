/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A markup/discount that is defined for a specific set of services that can later be associated with a pricing plan.
 */
export interface AwsBillingconductorPricingrule {
  /**
   * Pricing rule ARN
   */
  Arn?: string;
  /**
   * Pricing rule name
   */
  Name: string;
  /**
   * Pricing rule description
   */
  Description?: string;
  /**
   * A term used to categorize the granularity of a Pricing Rule.
   */
  Scope: "GLOBAL" | "SERVICE" | "BILLING_ENTITY" | "SKU";
  /**
   * One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule.
   */
  Type: "MARKUP" | "DISCOUNT" | "TIERING";
  /**
   * Pricing rule modifier percentage
   */
  ModifierPercentage?: number;
  /**
   * The service which a pricing rule is applied on
   */
  Service?: string;
  /**
   * The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces. Supported billing entities are AWS, AWS Marketplace, and AISPL.
   */
  BillingEntity?: "AWS" | "AWS Marketplace" | "AISPL";
  /**
   * The set of tiering configurations for the pricing rule.
   */
  Tiering?: {
    FreeTier?: FreeTier;
  };
  /**
   * The UsageType which a SKU pricing rule is modifying
   */
  UsageType?: string;
  /**
   * The Operation which a SKU pricing rule is modifying
   */
  Operation?: string;
  /**
   * The number of pricing plans associated with pricing rule
   */
  AssociatedPricingPlanCount?: number;
  /**
   * Creation timestamp in UNIX epoch time format
   */
  CreationTime?: number;
  /**
   * Latest modified timestamp in UNIX epoch time format
   */
  LastModifiedTime?: number;
  Tags?: Tag[];
}
/**
 * The possible customizable free tier configurations.
 */
export interface FreeTier {
  Activated: boolean;
}
export interface Tag {
  Key: string;
  Value: string;
}
