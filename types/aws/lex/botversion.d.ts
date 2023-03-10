/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Unique ID of resource
 */
export type Id = string;
/**
 * The version of a bot.
 */
export type BotVersion = string;
/**
 * A description of the version. Use the description to help identify the version in lists.
 */
export type Description = string;
/**
 * Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale.
 *
 * @minItems 1
 */
export type BotVersionLocaleSpecificationList = [BotVersionLocaleSpecification, ...BotVersionLocaleSpecification[]];
/**
 * The identifier of the language and locale that the bot will be used in.
 */
export type LocaleId = string;

/**
 * A version is a numbered snapshot of your work that you can publish for use in different parts of your workflow, such as development, beta deployment, and production.
 */
export interface AwsLexBotversion {
  BotId: Id;
  BotVersion?: BotVersion;
  Description?: Description;
  BotVersionLocaleSpecification: BotVersionLocaleSpecificationList;
}
export interface BotVersionLocaleSpecification {
  LocaleId: LocaleId;
  BotVersionLocaleDetails: BotVersionLocaleDetails;
}
/**
 * The version of a bot used for a bot locale.
 */
export interface BotVersionLocaleDetails {
  SourceBotVersion: BotVersion;
}
