/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ServiceCatalog::StackSetConstraint
 */
export interface AwsServicecatalogStacksetconstraint {
  Id?: string;
  Description: string;
  StackInstanceControl: string;
  AcceptLanguage?: string;
  PortfolioId: string;
  ProductId: string;
  RegionList: string[];
  AdminRole: string;
  AccountList: string[];
  ExecutionRole: string;
}
