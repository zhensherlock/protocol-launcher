import type { SortedOpenDatePayload } from './shared'
import { sortedOpenUrl } from './shared'

/**
 * Open Sorted on a specific date or documented casual date.
 *
 * @param payload Sorted open date payload.
 * @returns Sorted open date URL.
 * @example
 * openDate({ date: '2018-07-20' })
 * // => 'sorted://x-callback-url/open?date=2018-07-20'
 * @example
 * openDate({ date: 'tomorrow' })
 * // => 'sorted://x-callback-url/open?date=tomorrow'
 * @link https://www.sortedapp.com/blog/url-scheme
 */
export function openDate(payload: SortedOpenDatePayload) {
  return sortedOpenUrl({ date: payload.date })
}
