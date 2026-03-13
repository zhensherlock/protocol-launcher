import { qs } from '@protocol-launcher/shared'

/**
 * Todo command payload definition.
 */
type Todo = {
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
 * Select the Todo sidebar item in Bear.
 *
 * @param payload Todo command payload.
 * @returns Bear todo URL.
 * @example
 * todo({ search: 'home' })
 * // => 'bear://x-callback-url/todo?search=home'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#todo
 */
export function todo(payload: Todo = {}) {
  const { search, showWindow, token } = payload

  const params = qs({
    ...(search ? { search } : {}),
    ...(showWindow === false ? { show_window: 'no' } : {}),
    ...(token ? { token } : {}),
  })

  return `bear://x-callback-url/todo${params ? `?${params}` : ''}`
}
