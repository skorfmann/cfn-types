/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Type = "FEE" | "CREDIT";
export type InclusiveStartBillingPeriod = string;
export type ExclusiveEndBillingPeriod = string;

/**
 * A custom line item is an one time charge that is applied to a specific billing group's bill.
 */
export interface AwsBillingconductorCustomlineitem {
  Name: string;
  Description?: string;
  CustomLineItemChargeDetails?: CustomLineItemChargeDetails;
  /**
   * Billing Group ARN
   */
  BillingGroupArn: string;
  BillingPeriodRange?: BillingPeriodRange;
  /**
   * ARN
   */
  Arn?: string;
  /**
   * Creation timestamp in UNIX epoch time format
   */
  CreationTime?: number;
  /**
   * Latest modified timestamp in UNIX epoch time format
   */
  LastModifiedTime?: number;
  /**
   * Number of source values associated to this custom line item
   */
  AssociationSize?: number;
  ProductCode?: string;
  CurrencyCode?: "USD" | "CNY";
  Tags?: Tag[];
}
export interface CustomLineItemChargeDetails {
  Flat?: CustomLineItemFlatChargeDetails;
  Percentage?: CustomLineItemPercentageChargeDetails;
  Type: Type;
}
export interface CustomLineItemFlatChargeDetails {
  ChargeValue: number;
}
export interface CustomLineItemPercentageChargeDetails {
  ChildAssociatedResources?: string[];
  PercentageValue: number;
}
export interface BillingPeriodRange {
  InclusiveStartBillingPeriod?: InclusiveStartBillingPeriod;
  ExclusiveEndBillingPeriod?: ExclusiveEndBillingPeriod;
}
export interface Tag {
  Key: string;
  Value: string;
}
