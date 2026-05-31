import type { SortedOpenListPayload } from './shared'
import { sortedOpenUrl } from './shared'

/**
 * Open a Sorted list, optionally filtered by comma-separated tags.
 *
 * @param payload Sorted open list payload.
 * @returns Sorted open list URL.
 * @example
 * openList({ list: 'Work' })
 * // => 'sorted://x-callback-url/open?list=Work'
 * @example
 * openList({ list: 'Work', filterByTags: 'urgent,office' })
 * // => 'sorted://x-callback-url/open?list=Work&filterByTags=urgent%2Coffice'
 * @link https://www.sortedapp.com/blog/url-scheme
 */
export function openList(payload: SortedOpenListPayload) {
  const { list, filterByTags } = payload

  return sortedOpenUrl({
    list,
    ...(filterByTags ? { filterByTags } : {}),
  })
}
