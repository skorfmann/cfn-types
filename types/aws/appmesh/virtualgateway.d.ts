/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::AppMesh::VirtualGateway
 */
export interface AwsAppmeshVirtualgateway {
  Uid?: string;
  VirtualGatewayName?: string;
  MeshName: string;
  MeshOwner?: string;
  ResourceOwner?: string;
  Id?: string;
  Arn?: string;
  Spec: VirtualGatewaySpec;
  Tags?: Tag[];
}
export interface VirtualGatewaySpec {
  Logging?: VirtualGatewayLogging;
  Listeners: VirtualGatewayListener[];
  BackendDefaults?: VirtualGatewayBackendDefaults;
}
export interface VirtualGatewayLogging {
  AccessLog?: VirtualGatewayAccessLog;
}
export interface VirtualGatewayAccessLog {
  File?: VirtualGatewayFileAccessLog;
}
export interface VirtualGatewayFileAccessLog {
  Path: string;
  Format?: LoggingFormat;
}
export interface LoggingFormat {
  Text?: string;
  Json?: JsonFormatRef[];
}
export interface JsonFormatRef {
  Value: string;
  Key: string;
}
export interface VirtualGatewayListener {
  ConnectionPool?: VirtualGatewayConnectionPool;
  HealthCheck?: VirtualGatewayHealthCheckPolicy;
  TLS?: VirtualGatewayListenerTls;
  PortMapping: VirtualGatewayPortMapping;
}
export interface VirtualGatewayConnectionPool {
  HTTP?: VirtualGatewayHttpConnectionPool;
  HTTP2?: VirtualGatewayHttp2ConnectionPool;
  GRPC?: VirtualGatewayGrpcConnectionPool;
}
export interface VirtualGatewayHttpConnectionPool {
  MaxConnections: number;
  MaxPendingRequests?: number;
}
export interface VirtualGatewayHttp2ConnectionPool {
  MaxRequests: number;
}
export interface VirtualGatewayGrpcConnectionPool {
  MaxRequests: number;
}
export interface VirtualGatewayHealthCheckPolicy {
  Path?: string;
  UnhealthyThreshold: number;
  Port?: number;
  HealthyThreshold: number;
  TimeoutMillis: number;
  Protocol: string;
  IntervalMillis: number;
}
export interface VirtualGatewayListenerTls {
  Validation?: VirtualGatewayListenerTlsValidationContext;
  Mode: string;
  Certificate: VirtualGatewayListenerTlsCertificate;
}
export interface VirtualGatewayListenerTlsValidationContext {
  SubjectAlternativeNames?: SubjectAlternativeNames;
  Trust: VirtualGatewayListenerTlsValidationContextTrust;
}
export interface SubjectAlternativeNames {
  Match: SubjectAlternativeNameMatchers;
}
export interface SubjectAlternativeNameMatchers {
  Exact?: string[];
}
export interface VirtualGatewayListenerTlsValidationContextTrust {
  File?: VirtualGatewayTlsValidationContextFileTrust;
  SDS?: VirtualGatewayTlsValidationContextSdsTrust;
}
export interface VirtualGatewayTlsValidationContextFileTrust {
  CertificateChain: string;
}
export interface VirtualGatewayTlsValidationContextSdsTrust {
  SecretName: string;
}
export interface VirtualGatewayListenerTlsCertificate {
  SDS?: VirtualGatewayListenerTlsSdsCertificate;
  ACM?: VirtualGatewayListenerTlsAcmCertificate;
  File?: VirtualGatewayListenerTlsFileCertificate;
}
export interface VirtualGatewayListenerTlsSdsCertificate {
  SecretName: string;
}
export interface VirtualGatewayListenerTlsAcmCertificate {
  CertificateArn: string;
}
export interface VirtualGatewayListenerTlsFileCertificate {
  CertificateChain: string;
  PrivateKey: string;
}
export interface VirtualGatewayPortMapping {
  Protocol: string;
  Port: number;
}
export interface VirtualGatewayBackendDefaults {
  ClientPolicy?: VirtualGatewayClientPolicy;
}
export interface VirtualGatewayClientPolicy {
  TLS?: VirtualGatewayClientPolicyTls;
}
export interface VirtualGatewayClientPolicyTls {
  Validation: VirtualGatewayTlsValidationContext;
  Ports?: number[];
  Enforce?: boolean;
  Certificate?: VirtualGatewayClientTlsCertificate;
}
export interface VirtualGatewayTlsValidationContext {
  SubjectAlternativeNames?: SubjectAlternativeNames;
  Trust: VirtualGatewayTlsValidationContextTrust;
}
export interface VirtualGatewayTlsValidationContextTrust {
  SDS?: VirtualGatewayTlsValidationContextSdsTrust;
  ACM?: VirtualGatewayTlsValidationContextAcmTrust;
  File?: VirtualGatewayTlsValidationContextFileTrust;
}
export interface VirtualGatewayTlsValidationContextAcmTrust {
  CertificateAuthorityArns: string[];
}
export interface VirtualGatewayClientTlsCertificate {
  File?: VirtualGatewayListenerTlsFileCertificate;
  SDS?: VirtualGatewayListenerTlsSdsCertificate;
}
export interface Tag {
  Value: string;
  Key: string;
}
