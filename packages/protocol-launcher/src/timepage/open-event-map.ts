import type { EventPayload } from './shared'
import { timepageUrl } from './shared'

/**
 * Open Timepage and show a specified event on the map.
 *
 * @param payload Event payload.
 * @returns Timepage open event map URL.
 * @example
 * openEventMap({ event: 'next' })
 * // => 'timepage://open_event_map?event=next'
 *
 * @link https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/
 */
export function openEventMap(payload: EventPayload) {
  const { event } = payload

  return timepageUrl('open_event_map', { event })
}
