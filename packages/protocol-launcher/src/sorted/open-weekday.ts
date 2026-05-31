import type { SortedOpenWeekdayPayload } from './shared'
import { sortedOpenUrl } from './shared'

/**
 * Open Sorted using its documented next weekday mode.
 *
 * @param payload Sorted open weekday payload.
 * @returns Sorted open weekday URL.
 * @example
 * openWeekday({ weekday: 2 })
 * // => 'sorted://x-callback-url/open?date=weekday&weekday=2'
 * @link https://www.sortedapp.com/blog/url-scheme
 */
export function openWeekday(payload: SortedOpenWeekdayPayload) {
  return sortedOpenUrl({ date: 'weekday', weekday: payload.weekday })
}
