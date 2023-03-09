/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A routing configuration that specifies where traffic is directed for this alias, such as to a fleet or to a message.
 */
export type RoutingStrategy = {
  [k: string]: unknown;
} & {
  /**
   * The message text to be used with a terminal routing strategy. If you specify TERMINAL for the Type property, you must specify this property.
   */
  Message?: string;
  /**
   * A unique identifier for a fleet that the alias points to. If you specify SIMPLE for the Type property, you must specify this property.
   */
  FleetId?: string;
  /**
   * Simple routing strategy. The alias resolves to one specific fleet. Use this type when routing to active fleets.
   */
  Type: "SIMPLE" | "TERMINAL";
};

/**
 * The AWS::GameLift::Alias resource creates an alias for an Amazon GameLift (GameLift) fleet destination.
 */
export interface AwsGameliftAlias {
  /**
   * A human-readable description of the alias.
   */
  Description?: string;
  /**
   * A descriptive label that is associated with an alias. Alias names do not need to be unique.
   */
  Name: string;
  RoutingStrategy: RoutingStrategy;
  /**
   * Unique alias ID
   */
  AliasId?: string;
}