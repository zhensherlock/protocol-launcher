import type { AlterCallbackUrl } from './shared'

export interface OpenCallbackUrlPayload {
  /**
   * Alter URL copied from the Action Editor URL Callback section.
   *
   * @example 'alter://action/business-strategist-gpt'
   */
  url: AlterCallbackUrl
}

/**
 * Return an Alter callback URL copied from the Action Editor.
 *
 * @param payload Alter callback URL payload.
 * @returns Alter callback URL.
 * @example
 * openCallbackUrl({ url: 'alter://action/business-strategist-gpt' })
 * // => 'alter://action/business-strategist-gpt'
 * @link https://docs.alterhq.com/workflows/url-callbacks
 */
export function openCallbackUrl(payload: OpenCallbackUrlPayload) {
  return payload.url
}
