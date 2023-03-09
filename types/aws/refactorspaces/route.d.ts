/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type RouteType = "DEFAULT" | "URI_PATH";
export type RouteActivationState = "INACTIVE" | "ACTIVE";
export type Method = "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT";

/**
 * Definition of AWS::RefactorSpaces::Route Resource Type
 */
export interface AwsRefactorspacesRoute {
  PathResourceToId?: string;
  Arn?: string;
  ApplicationIdentifier: string;
  EnvironmentIdentifier: string;
  RouteIdentifier?: string;
  RouteType?: RouteType;
  ServiceIdentifier: string;
  DefaultRoute?: DefaultRouteInput;
  UriPathRoute?: UriPathRouteInput;
  /**
   * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
   */
  Tags?: Tag[];
}
export interface DefaultRouteInput {
  ActivationState: RouteActivationState;
}
export interface UriPathRouteInput {
  SourcePath?: string;
  ActivationState: RouteActivationState;
  Methods?: Method[];
  IncludeChildPaths?: boolean;
}
/**
 * A label for tagging Environment resource
 */
export interface Tag {
  /**
   * A string used to identify this tag
   */
  Key: string;
  /**
   * A string containing the value for the tag
   */
  Value: string;
}
