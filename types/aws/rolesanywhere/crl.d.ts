/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Definition of AWS::RolesAnywhere::CRL Resource Type
 */
export interface AwsRolesanywhereCrl {
  CrlData: string;
  CrlId?: string;
  Enabled?: boolean;
  Name: string;
  TrustAnchorArn?: string;
  /**
   * @minItems 0
   * @maxItems 200
   */
  Tags?: Tag[];
}
export interface Tag {
  Key: string;
  Value: string;
}
