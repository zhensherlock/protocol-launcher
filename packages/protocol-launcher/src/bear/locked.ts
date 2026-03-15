import { qs } from '@protocol-launcher/shared'

/**
 * Locked command payload definition.
 */
type Locked = {
  /**
   * String to search.
   */
  search?: string

  /**
   * If no the call don't force the opening of bear main window (MacOS only).
   */
  showWindow?: boolean
}

/**
 * Select the Locked sidebar item in Bear.
 *
 * @param payload Locked command payload.
 * @returns Bear locked URL.
 * @example
 * locked({ search: 'data' })
 * // => 'bear://x-callback-url/locked?search=data'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#locked
 */
export function locked(payload: Locked = {}) {
  const { search, showWindow } = payload

  const params = qs({
    ...(search ? { search } : {}),
    ...(showWindow === false ? { show_window: 'no' } : {}),
  })

  return `bear://x-callback-url/locked${params}`
}
