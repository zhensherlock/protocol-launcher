import type { EventPayload } from './shared'
import { timepageUrl } from './shared'

/**
 * Open Timepage and show a specified event.
 *
 * @param payload Event payload.
 * @returns Timepage open event URL.
 * @example
 * openEvent({ event: 'next' })
 * // => 'timepage://open_event?event=next'
 *
 * @link https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/
 */
export function openEvent(payload: EventPayload) {
  const { event } = payload

  return timepageUrl('open_event', { event })
}
