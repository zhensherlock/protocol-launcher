import { qs } from '@protocol-launcher/shared'

/**
 * Archive command payload definition.
 */
type Archive = {
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
 * Move a note to Bear archive.
 *
 * @param payload Archive command payload.
 * @returns Bear archive URL.
 * @example
 * archive({ id: '7E4B681B' })
 * // => 'bear://x-callback-url/archive?id=7E4B681B'
 * @example
 * archive({ search: 'projects' })
 * // => 'bear://x-callback-url/archive?search=projects'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#archive
 */
export function archive(payload: Archive = {}) {
  const { id, search, showWindow } = payload

  const params = qs({
    ...(id ? { id } : {}),
    ...(search && !id ? { search } : {}),
    ...(showWindow === false ? { show_window: 'no' } : {}),
  })

  return `bear://x-callback-url/archive${params}`
}
