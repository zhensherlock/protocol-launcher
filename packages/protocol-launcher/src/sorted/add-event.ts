import type { SortedAddEventPayload } from './shared'
import { sortedAddUrl, sortedSharedAddParams } from './shared'

/**
 * Add an event in Sorted.
 *
 * @param payload Sorted add event payload.
 * @returns Sorted add event URL.
 * @example
 * addEvent({
 *   title: 'Planning meeting',
 *   date: '2026-06-01 10:00',
 *   duration: 60,
 *   calendar: 'Work',
 *   location: 'Conference Room',
 * })
 * // => 'sorted://x-callback-url/add?title=Planning%20meeting&date=2026-06-01%2010%3A00&duration=60&type=event&calendar=Work&location=Conference%20Room'
 * @link https://www.sortedapp.com/blog/url-scheme
 */
export function addEvent(payload: SortedAddEventPayload) {
  const { calendar, location } = payload

  return sortedAddUrl({
    ...sortedSharedAddParams(payload),
    type: 'event',
    ...(calendar ? { calendar } : {}),
    ...(location ? { location } : {}),
  })
}
