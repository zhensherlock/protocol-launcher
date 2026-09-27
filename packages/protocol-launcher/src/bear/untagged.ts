import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'

/**
 * Untagged command payload definition.
 */
type Untagged = Callbacks & {
  /**
   * String to search.
   */
  search?: string

  /**
   * If no the call don't force the opening of bear main window (MacOS only).
   */
  showWindow?: boolean

  /**
   * Application token.
   */
  token?: string
}

/**
 * Select the Untagged sidebar item in Bear.
 *
 * @param payload Untagged command payload.
 * @returns Bear untagged URL.
 * @example
 * untagged({ search: 'home' })
 * // => 'bear://x-callback-url/untagged?search=home'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#untagged
 */
export function untagged(payload: Untagged = {}) {
  const { search, showWindow, token } = payload

  const params = qs({
    ...(search ? { search } : {}),
    ...(showWindow === false ? { show_window: 'no' } : {}),
    ...(token ? { token } : {}),
    ...callbackParams(payload),
  })

  return `bear://x-callback-url/untagged${params}`
}
