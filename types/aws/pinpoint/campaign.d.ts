/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Pinpoint::Campaign
 */
export interface AwsPinpointCampaign {
  Description?: string;
  SegmentId: string;
  Priority?: number;
  TemplateConfiguration?: TemplateConfiguration;
  IsPaused?: boolean;
  AdditionalTreatments?: WriteTreatmentResource[];
  Name: string;
  SegmentVersion?: number;
  TreatmentDescription?: string;
  MessageConfiguration?: MessageConfiguration;
  Limits?: Limits;
  CampaignId?: string;
  HoldoutPercent?: number;
  Schedule: Schedule;
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
  Arn?: string;
  ApplicationId: string;
  CampaignHook?: CampaignHook;
  Tags?: {
    [k: string]: unknown;
  };
  TreatmentName?: string;
}
export interface TemplateConfiguration {
  SMSTemplate?: Template;
  EmailTemplate?: Template;
  PushTemplate?: Template;
  VoiceTemplate?: Template;
}
export interface Template {
  Version?: string;
  Name?: string;
}
export interface WriteTreatmentResource {
  TreatmentDescription?: string;
  MessageConfiguration?: MessageConfiguration;
  Schedule?: Schedule;
  TemplateConfiguration?: TemplateConfiguration;
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
  SizePercent?: number;
  TreatmentName?: string;
}
export interface MessageConfiguration {
  APNSMessage?: Message;
  BaiduMessage?: Message;
  DefaultMessage?: Message;
  InAppMessage?: CampaignInAppMessage;
  EmailMessage?: CampaignEmailMessage;
  GCMMessage?: Message;
  SMSMessage?: CampaignSmsMessage;
  CustomMessage?: CampaignCustomMessage;
  ADMMessage?: Message;
}
export interface Message {
  Action?: string;
  MediaUrl?: string;
  TimeToLive?: number;
  ImageSmallIconUrl?: string;
  ImageUrl?: string;
  Title?: string;
  Url?: string;
  JsonBody?: string;
  ImageIconUrl?: string;
  SilentPush?: boolean;
  Body?: string;
  RawContent?: string;
}
export interface CampaignInAppMessage {
  CustomConfig?: {
    [k: string]: unknown;
  };
  Layout?: string;
  Content?: InAppMessageContent[];
}
export interface InAppMessageContent {
  BodyConfig?: InAppMessageBodyConfig;
  SecondaryBtn?: InAppMessageButton;
  ImageUrl?: string;
  PrimaryBtn?: InAppMessageButton;
  HeaderConfig?: InAppMessageHeaderConfig;
  BackgroundColor?: string;
}
export interface InAppMessageBodyConfig {
  Alignment?: string;
  TextColor?: string;
  Body?: string;
}
export interface InAppMessageButton {
  IOS?: OverrideButtonConfiguration;
  Web?: OverrideButtonConfiguration;
  DefaultConfig?: DefaultButtonConfiguration;
  Android?: OverrideButtonConfiguration;
}
export interface OverrideButtonConfiguration {
  ButtonAction?: string;
  Link?: string;
}
export interface DefaultButtonConfiguration {
  ButtonAction?: string;
  BorderRadius?: number;
  Text?: string;
  TextColor?: string;
  Link?: string;
  BackgroundColor?: string;
}
export interface InAppMessageHeaderConfig {
  Alignment?: string;
  TextColor?: string;
  Header?: string;
}
export interface CampaignEmailMessage {
  Title?: string;
  FromAddress?: string;
  HtmlBody?: string;
  Body?: string;
}
export interface CampaignSmsMessage {
  EntityId?: string;
  OriginationNumber?: string;
  SenderId?: string;
  Body?: string;
  MessageType?: string;
  TemplateId?: string;
}
export interface CampaignCustomMessage {
  Data?: string;
}
export interface Schedule {
  TimeZone?: string;
  QuietTime?: QuietTime;
  EndTime?: string;
  StartTime?: string;
  Frequency?: string;
  EventFilter?: CampaignEventFilter;
  IsLocalTime?: boolean;
}
export interface QuietTime {
  Start: string;
  End: string;
}
export interface CampaignEventFilter {
  Dimensions?: EventDimensions;
  FilterType?: string;
}
export interface EventDimensions {
  Attributes?: {
    [k: string]: unknown;
  };
  Metrics?: {
    [k: string]: unknown;
  };
  EventType?: SetDimension;
}
export interface SetDimension {
  Values?: string[];
  DimensionType?: string;
}
export interface CustomDeliveryConfiguration {
  EndpointTypes?: string[];
  DeliveryUri?: string;
}
export interface Limits {
  MessagesPerSecond?: number;
  Daily?: number;
  MaximumDuration?: number;
  Total?: number;
  Session?: number;
}
export interface CampaignHook {
  WebUrl?: string;
  LambdaFunctionName?: string;
  Mode?: string;
}
