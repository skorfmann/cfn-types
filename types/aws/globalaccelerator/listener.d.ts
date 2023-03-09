/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A network port number
 */
export type Port = number;

/**
 * Resource Type definition for AWS::GlobalAccelerator::Listener
 */
export interface AwsGlobalacceleratorListener {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   */
  ListenerArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the accelerator.
   */
  AcceleratorArn: string;
  PortRanges: PortRange[];
  /**
   * The protocol for the listener.
   */
  Protocol: "TCP" | "UDP";
  /**
   * Client affinity lets you direct all requests from a user to the same endpoint.
   */
  ClientAffinity?: "NONE" | "SOURCE_IP";
}
/**
 * A port range to support for connections from  clients to your accelerator.
 */
export interface PortRange {
  FromPort: Port;
  ToPort: Port;
}
