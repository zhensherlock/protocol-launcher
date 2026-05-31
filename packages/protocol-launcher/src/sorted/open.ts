import type { SortedOpenPayload } from './shared'
import { sortedOpenUrl } from './shared'

/**
 * Open one of Sorted's documented item views.
 *
 * @param payload Sorted open item payload.
 * @returns Sorted open URL.
 * @example
 * open({ item: 'today' })
 * // => 'sorted://x-callback-url/open?item=today'
 * @link https://www.sortedapp.com/blog/url-scheme
 */
export function open(payload: SortedOpenPayload) {
  return sortedOpenUrl({ item: payload.item })
}
