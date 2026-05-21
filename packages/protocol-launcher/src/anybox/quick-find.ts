import type { QuickFind } from './shared'
import { anyboxUrl } from './shared'

/**
 * Open Quick Find and optionally select a tag range, smart list, or search query.
 *
 * @param payload Quick Find payload.
 * @returns Anybox quick-find URL.
 * @example
 * quickFind({ q: 'research' })
 * // => 'anybox://quick-find?q=research'
 * @link https://anybox.app/url-schemes
 */
export function quickFind(payload: QuickFind = {}) {
  const { tags, filter, q } = payload

  return anyboxUrl('quick-find', {
    ...(tags ? { tags } : {}),
    ...(filter ? { filter } : {}),
    ...(q ? { q } : {}),
  })
}
