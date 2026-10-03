import type { EventPayload } from './shared'
import { timepageUrl } from './shared'

/**
 * Open the countdown sharing view for a Timepage event.
 *
 * @param payload Event to open.
 * @returns Timepage countdown_share URL.
 * @example
 * countdownShare({ event: 'next' })
 * // => 'timepage://countdown_share?event=next'
 * @link https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/
 */
export function countdownShare(payload: EventPayload) {
  return timepageUrl('countdown_share', { event: payload.event })
}
