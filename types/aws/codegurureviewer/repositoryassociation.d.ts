/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This resource schema represents the RepositoryAssociation resource in the Amazon CodeGuru Reviewer service.
 */
export interface AwsCodegurureviewerRepositoryassociation {
  /**
   * Name of the repository to be associated.
   */
  Name: string;
  /**
   * The type of repository to be associated.
   */
  Type: "CodeCommit" | "Bitbucket" | "GitHubEnterpriseServer" | "S3Bucket";
  /**
   * The owner of the repository. For a Bitbucket repository, this is the username for the account that owns the repository.
   */
  Owner?: string;
  /**
   * The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`.
   */
  BucketName?: string;
  /**
   * The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.
   */
  ConnectionArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the repository association.
   */
  AssociationArn?: string;
  /**
   * The tags associated with a repository association.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   */
  Value: string;
}
