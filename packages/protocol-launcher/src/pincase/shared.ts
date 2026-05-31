import { qs } from '@protocol-launcher/shared'

export type PincaseYesNo = 'yes' | 'no'

export type PincaseOpenMode =
  | 'menu'
  | 'personal_unread'
  | 'personal_recent'
  | 'personal_tag'
  | 'public_popular'
  | 'public_recent'
  | 'public_japanese'
  | 'public_wikipedia'
  | 'public_fandom'
  | 'public_favorite_stream'
  | 'public_tag'
  | 'public_username'

export type PincaseOpenTagMode = 'personal_tag' | 'public_tag'

export interface PincaseXCallbackPayload {
  /**
   * The x-success callback URL.
   */
  xSuccess?: string

  /**
   * The x-error callback URL.
   */
  xError?: string

  /**
   * The x-cancel callback URL.
   */
  xCancel?: string
}

/**
 * Pincase add bookmark payload definition.
 */
export type PincaseAddBookmarkPayload = PincaseXCallbackPayload & {
  /**
   * URL to bookmark.
   *
   * @example 'https://www.example.com/'
   */
  url: string

  /**
   * Title for the URL.
   *
   * @example 'Protocol Launcher'
   */
  title?: string

  /**
   * Whether the bookmark should be private or public.
   *
   * @example 'yes'
   */
  private?: PincaseYesNo

  /**
   * Whether the bookmark is unread or not.
   *
   * @example 'yes'
   */
  toread?: PincaseYesNo

  /**
   * Whether composer UI should be skipped.
   *
   * @example 'yes'
   */
  noui?: PincaseYesNo

  /**
   * The unread flag used by Pincase's official add-bookmark example.
   *
   * @example 'yes'
   */
  later?: PincaseYesNo
}

/**
 * Pincase open payload definition.
 */
export interface PincaseOpenPayload {
  /**
   * Official Pincase open mode.
   *
   * @example 'personal_unread'
   */
  mode?: PincaseOpenMode

  /**
   * Tag name used by tag modes.
   *
   * @example 'iOS'
   */
  tag?: string

  /**
   * Username used by username mode.
   *
   * @example 'exampleuser'
   */
  username?: string
}

/**
 * Pincase open tag payload definition.
 */
export interface PincaseOpenTagPayload {
  /**
   * Official Pincase tag mode.
   *
   * @example 'public_tag'
   */
  mode: PincaseOpenTagMode

  /**
   * Tag name.
   *
   * @example 'iOS'
   */
  tag: string
}

export function pincaseXCallbackParams(payload: PincaseXCallbackPayload) {
  const { xSuccess, xError, xCancel } = payload

  return {
    ...(xSuccess !== undefined ? { 'x-success': xSuccess } : {}),
    ...(xError !== undefined ? { 'x-error': xError } : {}),
    ...(xCancel !== undefined ? { 'x-cancel': xCancel } : {}),
  }
}

export function pincaseActionUrl(action: 'add' | 'open', params: Record<string, unknown> = {}) {
  return `pincaseapp://x-callback-url/${action}${qs(params)}`
}

export function pincaseAddBookmarkUrl(payload: PincaseAddBookmarkPayload) {
  const { url, title, toread, noui, later } = payload
  const privateValue = payload.private

  return pincaseActionUrl('add', {
    url,
    ...(title !== undefined ? { title } : {}),
    ...(privateValue !== undefined ? { private: privateValue } : {}),
    ...(toread !== undefined ? { toread } : {}),
    ...(noui !== undefined ? { noui } : {}),
    ...(later !== undefined ? { later } : {}),
    ...pincaseXCallbackParams(payload),
  })
}

export function pincaseOpenUrl(payload: PincaseOpenPayload = {}) {
  const { mode, tag, username } = payload

  return pincaseActionUrl('open', {
    ...(mode !== undefined ? { mode } : {}),
    ...(tag !== undefined ? { tag } : {}),
    ...(username !== undefined ? { username } : {}),
  })
}
