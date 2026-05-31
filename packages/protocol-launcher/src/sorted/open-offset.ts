import type { SortedOpenOffsetPayload } from './shared'
import { sortedOpenUrl } from './shared'

/**
 * Open Sorted using its documented date offset mode.
 *
 * @param payload Sorted open offset payload.
 * @returns Sorted open offset URL.
 * @example
 * openOffset({ offset: 3 })
 * // => 'sorted://x-callback-url/open?date=offset&offset=3'
 * @link https://www.sortedapp.com/blog/url-scheme
 */
export function openOffset(payload: SortedOpenOffsetPayload) {
  return sortedOpenUrl({ date: 'offset', offset: payload.offset })
}
