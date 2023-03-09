/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Used to install the certificate authority certificate and update the certificate authority status.
 */
export interface AwsAcmpcaCertificateauthorityactivation {
  /**
   * Arn of the Certificate Authority.
   */
  CertificateAuthorityArn: string;
  /**
   * Certificate Authority certificate that will be installed in the Certificate Authority.
   */
  Certificate: string;
  /**
   * Certificate chain for the Certificate Authority certificate.
   */
  CertificateChain?: string;
  /**
   * The status of the Certificate Authority.
   */
  Status?: string;
  /**
   * The complete certificate chain, including the Certificate Authority certificate.
   */
  CompleteCertificateChain?: string;
}
