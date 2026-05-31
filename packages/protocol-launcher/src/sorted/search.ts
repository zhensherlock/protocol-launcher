import type { SortedSearchPayload } from './shared'
import { sortedOpenUrl } from './shared'

/**
 * Search Sorted items.
 *
 * @param payload Sorted search payload.
 * @returns Sorted search URL.
 * @example
 * search({ search: 'Meeting' })
 * // => 'sorted://x-callback-url/open?search=Meeting'
 * @link https://www.sortedapp.com/blog/url-scheme
 */
export function search(payload: SortedSearchPayload) {
  return sortedOpenUrl({ search: payload.search })
}
