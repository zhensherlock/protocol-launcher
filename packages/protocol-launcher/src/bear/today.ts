import { qs } from '@protocol-launcher/shared'

/**
 * Today command payload definition.
 */
type Today = {
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
 * Select the Today sidebar item in Bear.
 *
 * @param payload Today command payload.
 * @returns Bear today URL.
 * @example
 * today({ search: 'family' })
 * // => 'bear://x-callback-url/today?search=family'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#today
 */
export function today(payload: Today = {}) {
  const { search, showWindow = true, token } = payload

  const params = qs({
    ...(search ? { search } : {}),
    ...(!showWindow ? { show_window: 'no' } : {}),
    ...(token ? { token } : {}),
  })

  return `bear://x-callback-url/today${params}`
}
