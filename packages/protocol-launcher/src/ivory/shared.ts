import { qs } from '@protocol-launcher/shared'

export type IvoryTab =
  | 'home'
  | 'timeline'
  | 'mentions'
  | 'lists'
  | 'favorites'
  | 'bookmarks'
  | 'statistics'
  | 'profile'
  | 'search'

/**
 * Ivory account payload definition.
 */
export interface IvoryAccountPayload {
  /**
   * Ivory account selector. Tapbots documents this as a fully qualified `@user@host`, `@user`, or blank for the
   * currently active user.
   *
   * @example '@alice@mastodon.social'
   * @example '@alice'
   */
  acct?: string
}

/**
 * Ivory modal payload definition.
 */
export interface IvoryModalPayload extends IvoryAccountPayload {
  /**
   * Optional callback URL. Tapbots documents this as the `callback_url` query parameter for modal actions.
   *
   * @example 'myapp://done'
   */
  callbackUrl?: string
}

/**
 * Ivory openURL payload definition.
 */
export interface IvoryOpenUrlPayload extends IvoryModalPayload {
  /**
   * URL to open in Ivory.
   *
   * @example 'https://mastodon.social/@tapbots'
   */
  url: string
}

/**
 * Ivory status payload definition.
 */
export interface IvoryOpenStatusPayload extends IvoryModalPayload {
  /**
   * Status ID from the selected account's instance.
   *
   * @example '110123456789'
   */
  statusId: string
}

/**
 * Ivory user profile payload definition.
 */
export interface IvoryOpenProfilePayload extends IvoryModalPayload {
  /**
   * Mastodon account to open.
   *
   * @example '@tapbots@mastodon.social'
   */
  userAcct: string
}

/**
 * Ivory compose payload definition.
 */
export interface IvoryComposePayload extends IvoryModalPayload {}

/**
 * Ivory compose reply payload definition.
 */
export interface IvoryComposeReplyPayload extends IvoryModalPayload {
  /**
   * Text to prefill in the compose sheet.
   *
   * @example 'Hello Ivory'
   */
  text: string

  /**
   * Status URL to reply to. Serialized as Tapbots' documented `in_reply_to_status_url` parameter.
   *
   * @example 'https://mastodon.social/@tapbots/110123456789'
   */
  inReplyToStatusUrl: string
}

/**
 * Ivory compose path-text payload definition.
 */
export interface IvoryComposeTextPayload extends IvoryModalPayload {
  /**
   * Text to append as the documented `/post/text` path segment.
   *
   * @example 'Hello Ivory'
   */
  text: string
}

export function ivoryUrl(acct: string | undefined, path: string, params: Record<string, unknown> = {}) {
  return `ivory://${acct ?? ''}/${path}${qs(params)}`
}

export function ivoryTabUrl(tab: IvoryTab, payload: IvoryAccountPayload = {}) {
  return ivoryUrl(payload.acct, tab)
}

export function ivoryModalParams(payload: IvoryModalPayload) {
  return {
    callback_url: payload.callbackUrl,
  }
}

export function ivoryPathSegment(value: string) {
  return encodeURIComponent(value).replace(/%40/g, '@')
}
