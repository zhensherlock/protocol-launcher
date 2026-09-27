import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'

/**
 * Tags command payload definition.
 */
type Tags = Callbacks & {
  /**
   * Application token (required).
   */
  token: string
}

/**
 * Return all the tags currently displayed in Bear's sidebar.
 *
 * @param payload Tags command payload.
 * @returns Bear tags URL.
 * @example
 * tags({ token: '123456-123456-123456' })
 * // => 'bear://x-callback-url/tags?token=123456-123456-123456'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#tags
 */
export function tags(payload: Tags) {
  const { token } = payload

  const params = qs({
    token,
    ...callbackParams(payload),
  })

  return `bear://x-callback-url/tags${params}`
}
