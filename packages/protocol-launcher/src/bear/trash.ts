import { qs } from '@protocol-launcher/shared'

/**
 * Trash command payload definition.
 */
type Trash = {
  /**
   * Note unique identifier.
   */
  id?: string

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
 * Move a note to Bear trash.
 *
 * @param payload Trash command payload.
 * @returns Bear trash URL.
 * @example
 * trash({ id: '7E4B681B' })
 * // => 'bear://x-callback-url/trash?id=7E4B681B'
 * @example
 * trash({ search: 'old' })
 * // => 'bear://x-callback-url/trash?search=old'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#trash
 */
export function trash(payload: Trash = {}) {
  const { id, search, showWindow } = payload

  const params = qs({
    ...(id ? { id } : {}),
    ...(search && !id ? { search } : {}),
    ...(showWindow === false ? { show_window: 'no' } : {}),
  })

  return `bear://x-callback-url/trash${params ? `?${params}` : ''}`
}
