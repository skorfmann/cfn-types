/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::EC2::EC2Fleet
 */
export interface AwsEc2Ec2Fleet {
  TargetCapacitySpecification: TargetCapacitySpecificationRequest;
  OnDemandOptions?: OnDemandOptionsRequest;
  Type?: "maintain" | "request" | "instant";
  ExcessCapacityTerminationPolicy?: "termination" | "no-termination";
  TagSpecifications?: TagSpecification[];
  SpotOptions?: SpotOptionsRequest;
  ValidFrom?: string;
  ReplaceUnhealthyInstances?: boolean;
  /**
   * @maxItems 50
   */
  LaunchTemplateConfigs: FleetLaunchTemplateConfigRequest[];
  FleetId?: string;
  TerminateInstancesWithExpiration?: boolean;
  ValidUntil?: string;
  Context?: string;
}
export interface TargetCapacitySpecificationRequest {
  DefaultTargetCapacityType?: "on-demand" | "spot";
  TargetCapacityUnitType?: "vcpu" | "memory-mib" | "units";
  TotalTargetCapacity: number;
  OnDemandTargetCapacity?: number;
  SpotTargetCapacity?: number;
}
export interface OnDemandOptionsRequest {
  SingleAvailabilityZone?: boolean;
  AllocationStrategy?: string;
  SingleInstanceType?: boolean;
  MinTargetCapacity?: number;
  MaxTotalPrice?: string;
  CapacityReservationOptions?: CapacityReservationOptionsRequest;
}
export interface CapacityReservationOptionsRequest {
  UsageStrategy?: "use-capacity-reservations-first";
}
export interface TagSpecification {
  ResourceType?:
    | "client-vpn-endpoint"
    | "customer-gateway"
    | "dedicated-host"
    | "dhcp-options"
    | "egress-only-internet-gateway"
    | "elastic-gpu"
    | "elastic-ip"
    | "export-image-task"
    | "export-instance-task"
    | "fleet"
    | "fpga-image"
    | "host-reservation"
    | "image"
    | "import-image-task"
    | "import-snapshot-task"
    | "instance"
    | "internet-gateway"
    | "key-pair"
    | "launch-template"
    | "local-gateway-route-table-vpc-association"
    | "natgateway"
    | "network-acl"
    | "network-insights-analysis"
    | "network-insights-path"
    | "network-interface"
    | "placement-group"
    | "reserved-instances"
    | "route-table"
    | "security-group"
    | "snapshot"
    | "spot-fleet-request"
    | "spot-instances-request"
    | "subnet"
    | "traffic-mirror-filter"
    | "traffic-mirror-session"
    | "traffic-mirror-target"
    | "transit-gateway"
    | "transit-gateway-attachment"
    | "transit-gateway-connect-peer"
    | "transit-gateway-multicast-domain"
    | "transit-gateway-route-table"
    | "volume"
    | "vpc"
    | "vpc-flow-log"
    | "vpc-peering-connection"
    | "vpn-connection"
    | "vpn-gateway";
  Tags?: Tag[];
}
export interface Tag {
  Value: string;
  Key: string;
}
export interface SpotOptionsRequest {
  MaintenanceStrategies?: MaintenanceStrategies;
  SingleAvailabilityZone?: boolean;
  AllocationStrategy?:
    | "lowest-price"
    | "lowestPrice"
    | "diversified"
    | "capacityOptimized"
    | "capacity-optimized"
    | "capacityOptimizedPrioritized"
    | "capacity-optimized-prioritized"
    | "priceCapacityOptimized"
    | "price-capacity-optimized";
  SingleInstanceType?: boolean;
  MinTargetCapacity?: number;
  MaxTotalPrice?: string;
  InstanceInterruptionBehavior?: "hibernate" | "stop" | "terminate";
  InstancePoolsToUseCount?: number;
}
export interface MaintenanceStrategies {
  CapacityRebalance?: CapacityRebalance;
}
export interface CapacityRebalance {
  ReplacementStrategy?: "launch" | "launch-before-terminate";
  TerminationDelay?: number;
}
export interface FleetLaunchTemplateConfigRequest {
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest;
  Overrides?: FleetLaunchTemplateOverridesRequest[];
}
export interface FleetLaunchTemplateSpecificationRequest {
  LaunchTemplateName?: string;
  LaunchTemplateId?: string;
  Version: string;
}
export interface FleetLaunchTemplateOverridesRequest {
  WeightedCapacity?: number;
  Placement?: Placement;
  Priority?: number;
  AvailabilityZone?: string;
  SubnetId?: string;
  InstanceType?: string;
  InstanceRequirements?: InstanceRequirementsRequest;
  MaxPrice?: string;
}
export interface Placement {
  GroupName?: string;
  Tenancy?: string;
  SpreadDomain?: string;
  PartitionNumber?: number;
  AvailabilityZone?: string;
  Affinity?: string;
  HostId?: string;
  HostResourceGroupArn?: string;
}
export interface InstanceRequirementsRequest {
  VCpuCount?: VCpuCountRangeRequest;
  MemoryMiB?: MemoryMiBRequest;
  CpuManufacturers?: ("intel" | "amd" | "amazon-web-services")[];
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;
  AllowedInstanceTypes?: string[];
  ExcludedInstanceTypes?: string[];
  InstanceGenerations?: ("current" | "previous")[];
  SpotMaxPricePercentageOverLowestPrice?: number;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  BareMetal?: "included" | "required" | "excluded";
  BurstablePerformance?: "included" | "required" | "excluded";
  RequireHibernateSupport?: boolean;
  NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest;
  NetworkInterfaceCount?: NetworkInterfaceCountRequest;
  LocalStorage?: "included" | "required" | "excluded";
  LocalStorageTypes?: ("hdd" | "ssd")[];
  TotalLocalStorageGB?: TotalLocalStorageGBRequest;
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest;
  AcceleratorTypes?: ("gpu" | "fpga" | "inference")[];
  AcceleratorCount?: AcceleratorCountRequest;
  AcceleratorManufacturers?: ("nvidia" | "amd" | "amazon-web-services" | "xilinx")[];
  AcceleratorNames?: ("a100" | "v100" | "k80" | "t4" | "m60" | "radeon-pro-v520" | "vu9p" | "inferentia" | "k520")[];
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest;
}
export interface VCpuCountRangeRequest {
  Min?: number;
  Max?: number;
}
export interface MemoryMiBRequest {
  Min?: number;
  Max?: number;
}
export interface MemoryGiBPerVCpuRequest {
  Min?: number;
  Max?: number;
}
export interface NetworkBandwidthGbpsRequest {
  Min?: number;
  Max?: number;
}
export interface NetworkInterfaceCountRequest {
  Min?: number;
  Max?: number;
}
export interface TotalLocalStorageGBRequest {
  Min?: number;
  Max?: number;
}
export interface BaselineEbsBandwidthMbpsRequest {
  Min?: number;
  Max?: number;
}
export interface AcceleratorCountRequest {
  Min?: number;
  Max?: number;
}
export interface AcceleratorTotalMemoryMiBRequest {
  Min?: number;
  Max?: number;
}
