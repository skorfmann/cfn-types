/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Transfer::Workflow
 */
export interface AwsTransferWorkflow {
  /**
   * Specifies the steps (actions) to take if any errors are encountered during execution of the workflow.
   *
   * @maxItems 8
   */
  OnExceptionSteps?:
    | []
    | [WorkflowStep]
    | [WorkflowStep, WorkflowStep]
    | [WorkflowStep, WorkflowStep, WorkflowStep]
    | [WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep]
    | [WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep]
    | [WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep]
    | [WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep]
    | [WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep];
  /**
   * Specifies the details for the steps that are in the specified workflow.
   *
   * @maxItems 8
   */
  Steps:
    | []
    | [WorkflowStep]
    | [WorkflowStep, WorkflowStep]
    | [WorkflowStep, WorkflowStep, WorkflowStep]
    | [WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep]
    | [WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep]
    | [WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep]
    | [WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep]
    | [WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep];
  /**
   * Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
  /**
   * A textual description for the workflow.
   */
  Description?: string;
  /**
   * A unique identifier for the workflow.
   */
  WorkflowId?: string;
  /**
   * Specifies the unique Amazon Resource Name (ARN) for the workflow.
   */
  Arn?: string;
}
/**
 * The basic building block of a workflow.
 */
export interface WorkflowStep {
  /**
   * Details for a step that performs a file copy.
   */
  CopyStepDetails?: {
    DestinationFileLocation?: S3FileLocation;
    /**
     * The name of the step, used as an identifier.
     */
    Name?: string;
    /**
     * A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE.
     */
    OverwriteExisting?: "TRUE" | "FALSE";
    /**
     * Specifies which file to use as input to the workflow step.
     */
    SourceFileLocation?: string;
  };
  /**
   * Details for a step that invokes a lambda function.
   */
  CustomStepDetails?: {
    /**
     * The name of the step, used as an identifier.
     */
    Name?: string;
    /**
     * The ARN for the lambda function that is being called.
     */
    Target?: string;
    /**
     * Timeout, in seconds, for the step.
     */
    TimeoutSeconds?: number;
    /**
     * Specifies which file to use as input to the workflow step.
     */
    SourceFileLocation?: string;
  };
  /**
   * Details for a step that performs a file decryption.
   */
  DecryptStepDetails?: {
    DestinationFileLocation?: InputFileLocation;
    /**
     * The name of the step, used as an identifier.
     */
    Name?: string;
    /**
     * Specifies which encryption method to use.
     */
    Type?: "PGP";
    /**
     * A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE.
     */
    OverwriteExisting?: "TRUE" | "FALSE";
    /**
     * Specifies which file to use as input to the workflow step.
     */
    SourceFileLocation?: string;
  };
  /**
   * Details for a step that deletes the file.
   */
  DeleteStepDetails?: {
    /**
     * The name of the step, used as an identifier.
     */
    Name?: string;
    /**
     * Specifies which file to use as input to the workflow step.
     */
    SourceFileLocation?: string;
  };
  /**
   * Details for a step that creates one or more tags.
   */
  TagStepDetails?: {
    /**
     * The name of the step, used as an identifier.
     */
    Name?: string;
    /**
     * Array that contains from 1 to 10 key/value pairs.
     *
     * @maxItems 10
     */
    Tags?:
      | []
      | [S3Tag]
      | [S3Tag, S3Tag]
      | [S3Tag, S3Tag, S3Tag]
      | [S3Tag, S3Tag, S3Tag, S3Tag]
      | [S3Tag, S3Tag, S3Tag, S3Tag, S3Tag]
      | [S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag]
      | [S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag]
      | [S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag]
      | [S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag]
      | [S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag, S3Tag];
    /**
     * Specifies which file to use as input to the workflow step.
     */
    SourceFileLocation?: string;
  };
  Type?: "COPY" | "CUSTOM" | "DECRYPT" | "DELETE" | "TAG";
}
/**
 * Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.
 */
export interface S3FileLocation {
  S3FileLocation?: S3InputFileLocation;
}
/**
 * Specifies the details for a S3 file.
 */
export interface S3InputFileLocation {
  /**
   * Specifies the S3 bucket that contains the file.
   */
  Bucket?: string;
  /**
   * The name assigned to the file when it was created in S3. You use the object key to retrieve the object.
   */
  Key?: string;
}
/**
 * Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps.
 */
export interface InputFileLocation {
  S3FileLocation?: S3InputFileLocation;
  EfsFileLocation?: EfsInputFileLocation;
}
/**
 * Specifies the details for an EFS file.
 */
export interface EfsInputFileLocation {
  /**
   * Specifies the EFS filesystem that contains the file.
   */
  FileSystemId?: string;
  /**
   * The name assigned to the file when it was created in EFS. You use the object path to retrieve the object.
   */
  Path?: string;
}
/**
 * Specifies the key-value pair that are assigned to a file during the execution of a Tagging step.
 */
export interface S3Tag {
  /**
   * The name assigned to the tag that you create.
   */
  Key: string;
  /**
   * The value that corresponds to the key.
   */
  Value: string;
}
/**
 * Creates a key-value pair for a specific resource.
 */
export interface Tag {
  /**
   * The name assigned to the tag that you create.
   */
  Key: string;
  /**
   * Contains one or more values that you assigned to the key name you create.
   */
  Value: string;
}
