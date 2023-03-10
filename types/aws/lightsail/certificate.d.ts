/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export interface AwsLightsailCertificate {
  /**
   * The name for the certificate.
   */
  CertificateName: string;
  /**
   * The domain name (e.g., example.com ) for the certificate.
   */
  DomainName: string;
  /**
   * An array of strings that specify the alternate domains (e.g., example2.com) and subdomains (e.g., blog.example.com) for the certificate.
   */
  SubjectAlternativeNames?: string[];
  CertificateArn?: string;
  /**
   * The validation status of the certificate.
   */
  Status?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value?: string;
}
