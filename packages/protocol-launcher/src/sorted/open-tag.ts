import type { SortedOpenTagPayload } from './shared'
import { sortedOpenUrl } from './shared'

/**
 * Open a Sorted tag, optionally filtered by comma-separated tags.
 *
 * @param payload Sorted open tag payload.
 * @returns Sorted open tag URL.
 * @example
 * openTag({ tag: 'urgent' })
 * // => 'sorted://x-callback-url/open?tag=urgent'
 * @example
 * openTag({ tag: 'urgent', filterByTags: 'office,phone' })
 * // => 'sorted://x-callback-url/open?tag=urgent&filterByTags=office%2Cphone'
 * @link https://www.sortedapp.com/blog/url-scheme
 */
export function openTag(payload: SortedOpenTagPayload) {
  const { tag, filterByTags } = payload

  return sortedOpenUrl({
    tag,
    ...(filterByTags ? { filterByTags } : {}),
  })
}
