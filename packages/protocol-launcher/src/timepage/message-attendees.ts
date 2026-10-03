import type { EventPayload } from './shared'
import { timepageUrl } from './shared'

/**
 * Compose a message to the attendees of a Timepage event.
 *
 * @param payload Event to open.
 * @returns Timepage message_attendees URL.
 * @example
 * messageAttendees({ event: 'next' })
 * // => 'timepage://message_attendees?event=next'
 * @link https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/
 */
export function messageAttendees(payload: EventPayload) {
  return timepageUrl('message_attendees', { event: payload.event })
}
