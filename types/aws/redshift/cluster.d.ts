/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export interface AwsRedshiftCluster {
  /**
   * A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account
   */
  ClusterIdentifier?: string;
  /**
   * The user name associated with the master user account for the cluster that is being created. The user name can't be PUBLIC and first character must be a letter.
   */
  MasterUsername: string;
  /**
   * The password associated with the master user account for the cluster that is being created. Password must be between 8 and 64 characters in length, should have at least one uppercase letter.Must contain at least one lowercase letter.Must contain one number.Can be any printable ASCII character.
   */
  MasterUserPassword: string;
  /**
   * The node type to be provisioned for the cluster.Valid Values: ds2.xlarge | ds2.8xlarge | dc1.large | dc1.8xlarge | dc2.large | dc2.8xlarge | ra3.4xlarge | ra3.16xlarge
   */
  NodeType: string;
  /**
   * Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. Default value is True
   */
  AllowVersionUpgrade?: boolean;
  /**
   * The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Default value is 1
   */
  AutomatedSnapshotRetentionPeriod?: number;
  /**
   * The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint
   */
  AvailabilityZone?: string;
  /**
   * The name of the parameter group to be associated with this cluster.
   */
  ClusterParameterGroupName?: string;
  /**
   * The type of the cluster. When cluster type is specified as single-node, the NumberOfNodes parameter is not required and if multi-node, the NumberOfNodes parameter is required
   */
  ClusterType: string;
  /**
   * The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster.
   */
  ClusterVersion?: string;
  /**
   * The name of a cluster subnet group to be associated with this cluster.
   */
  ClusterSubnetGroupName?: string;
  /**
   * The name of the first database to be created when the cluster is created. To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database.
   */
  DBName: string;
  /**
   * The Elastic IP (EIP) address for the cluster.
   */
  ElasticIp?: string;
  /**
   * If true, the data in the cluster is encrypted at rest.
   */
  Encrypted?: boolean;
  /**
   * Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM
   */
  HsmClientCertificateIdentifier?: string;
  /**
   * Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
   */
  HsmConfigurationIdentifier?: string;
  /**
   * The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
   */
  KmsKeyId?: string;
  /**
   * The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node.
   */
  NumberOfNodes?: number;
  /**
   * The port number on which the cluster accepts incoming connections. The cluster is accessible only via the JDBC and ODBC connection strings
   */
  Port?: number;
  /**
   * The weekly time range (in UTC) during which automated cluster maintenance can occur.
   */
  PreferredMaintenanceWindow?: string;
  /**
   * If true, the cluster can be accessed from a public network.
   */
  PubliclyAccessible?: boolean;
  /**
   * A list of security groups to be associated with this cluster.
   */
  ClusterSecurityGroups?: string[];
  /**
   * A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 50 IAM roles in a single request
   *
   * @maxItems 50
   */
  IamRoles?: string[];
  /**
   * The list of tags for the cluster parameter group.
   *
   * @maxItems 50
   */
  Tags?: Tag[];
  /**
   * A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.
   */
  VpcSecurityGroupIds?: string[];
  /**
   * The name of the cluster the source snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
   */
  SnapshotClusterIdentifier?: string;
  /**
   * The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive.
   */
  SnapshotIdentifier?: string;
  Id?: string;
  OwnerAccount?: string;
  LoggingProperties?: LoggingProperties;
  Endpoint?: Endpoint;
  /**
   * The destination AWS Region that you want to copy snapshots to. Constraints: Must be the name of a valid AWS Region. For more information, see Regions and Endpoints in the Amazon Web Services [https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region] General Reference
   */
  DestinationRegion?: string;
  /**
   * The number of days to retain automated snapshots in the destination region after they are copied from the source region.
   *
   *  Default is 7.
   *
   *  Constraints: Must be at least 1 and no more than 35.
   */
  SnapshotCopyRetentionPeriod?: number;
  /**
   * The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.
   */
  SnapshotCopyGrantName?: string;
  /**
   * The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. If the value is -1, the manual snapshot is retained indefinitely.
   *
   * The value must be either -1 or an integer between 1 and 3,653.
   */
  ManualSnapshotRetentionPeriod?: number;
  /**
   * Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.
   */
  SnapshotCopyManual?: boolean;
  /**
   * The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.
   */
  AvailabilityZoneRelocation?: boolean;
  /**
   * The availability zone relocation status of the cluster
   */
  AvailabilityZoneRelocationStatus?: string;
  /**
   * The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored. Possible values include the following.
   *
   * enabled - Use AQUA if it is available for the current Region and Amazon Redshift node type.
   * disabled - Don't use AQUA.
   * auto - Amazon Redshift determines whether to use AQUA.
   *
   */
  AquaConfigurationStatus?: string;
  /**
   * A boolean value indicating whether the resize operation is using the classic resize process. If you don't provide this parameter or set the value to false , the resize type is elastic.
   */
  Classic?: boolean;
  /**
   * An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide.
   *
   * If this option is true , enhanced VPC routing is enabled.
   *
   * Default: false
   */
  EnhancedVpcRouting?: boolean;
  /**
   * The name for the maintenance track that you want to assign for the cluster. This name change is asynchronous. The new track name stays in the PendingModifiedValues for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied.
   */
  MaintenanceTrackName?: string;
  /**
   * A boolean indicating whether to enable the deferred maintenance window.
   */
  DeferMaintenance?: boolean;
  /**
   * A unique identifier for the deferred maintenance window.
   */
  DeferMaintenanceIdentifier?: string;
  /**
   * A timestamp indicating the start time for the deferred maintenance window.
   */
  DeferMaintenanceStartTime?: string;
  /**
   * A timestamp indicating end time for the deferred maintenance window. If you specify an end time, you can't specify a duration.
   */
  DeferMaintenanceEndTime?: string;
  /**
   * An integer indicating the duration of the maintenance window in days. If you specify a duration, you can't specify an end time. The duration must be 45 days or less.
   */
  DeferMaintenanceDuration?: number;
  /**
   * The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request.
   */
  RevisionTarget?: string;
  /**
   * The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster APIs
   */
  ResourceAction?: string;
  /**
   * A boolean indicating if we want to rotate Encryption Keys.
   */
  RotateEncryptionKey?: boolean;
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}
export interface LoggingProperties {
  BucketName: string;
  S3KeyPrefix?: string;
}
export interface Endpoint {
  Port?: string;
  Address?: string;
}