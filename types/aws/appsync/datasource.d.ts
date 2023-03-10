/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::AppSync::DataSource
 */
export interface AwsAppsyncDatasource {
  OpenSearchServiceConfig?: OpenSearchServiceConfig;
  Description?: string;
  ServiceRoleArn?: string;
  Name: string;
  DataSourceArn?: string;
  Type: string;
  EventBridgeConfig?: EventBridgeConfig;
  HttpConfig?: HttpConfig;
  RelationalDatabaseConfig?: RelationalDatabaseConfig;
  LambdaConfig?: LambdaConfig;
  Id?: string;
  ApiId: string;
  DynamoDBConfig?: DynamoDBConfig;
  ElasticsearchConfig?: ElasticsearchConfig;
}
export interface OpenSearchServiceConfig {
  AwsRegion: string;
  Endpoint: string;
}
export interface EventBridgeConfig {
  EventBusArn: string;
}
export interface HttpConfig {
  Endpoint: string;
  AuthorizationConfig?: AuthorizationConfig;
}
export interface AuthorizationConfig {
  AuthorizationType: string;
  AwsIamConfig?: AwsIamConfig;
}
export interface AwsIamConfig {
  SigningRegion?: string;
  SigningServiceName?: string;
}
export interface RelationalDatabaseConfig {
  RdsHttpEndpointConfig?: RdsHttpEndpointConfig;
  RelationalDatabaseSourceType: string;
}
export interface RdsHttpEndpointConfig {
  DatabaseName?: string;
  AwsRegion: string;
  DbClusterIdentifier: string;
  AwsSecretStoreArn: string;
  Schema?: string;
}
export interface LambdaConfig {
  LambdaFunctionArn: string;
}
export interface DynamoDBConfig {
  TableName: string;
  DeltaSyncConfig?: DeltaSyncConfig;
  UseCallerCredentials?: boolean;
  AwsRegion: string;
  Versioned?: boolean;
}
export interface DeltaSyncConfig {
  BaseTableTTL: string;
  DeltaSyncTableTTL: string;
  DeltaSyncTableName: string;
}
export interface ElasticsearchConfig {
  AwsRegion: string;
  Endpoint: string;
}
