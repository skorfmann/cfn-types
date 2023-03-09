/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ServiceCatalog::Portfolio
 */
export interface AwsServicecatalogPortfolio {
  Id?: string;
  PortfolioName?: string;
  ProviderName: string;
  Description?: string;
  DisplayName: string;
  AcceptLanguage?: string;
  Tags?: Tag[];
}
export interface Tag {
  Key: string;
  Value: string;
}
