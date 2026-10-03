import type { EventPayload } from './shared'
import { timepageUrl } from './shared'

/**
 * Open Maps directions to a Timepage event.
 *
 * @param payload Event to open.
 * @returns Timepage get_directions URL.
 * @example
 * getDirections({ event: 'next' })
 * // => 'timepage://get_directions?event=next'
 * @link https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/
 */
export function getDirections(payload: EventPayload) {
  return timepageUrl('get_directions', { event: payload.event })
}
