import type { GetEventPayload } from './shared'
import { timepageXCallbackUrl } from './shared'

/**
 * Get a specified event and return its details via a success callback URL.
 *
 * Timepage calls `x-success` with `start`, `end`, `title`, and `location` parameters.
 *
 * @param payload Get event payload.
 * @returns Timepage get event x-callback-url.
 * @example
 * getEvent({ event: 'next', xSuccess: 'shortcuts://callback' })
 * // => 'timepage://x-callback-url/get_event?event=next&x-success=shortcuts%3A%2F%2Fcallback'
 *
 * @link https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/
 */
export function getEvent(payload: GetEventPayload) {
  const { event, xSuccess } = payload

  return timepageXCallbackUrl('get_event', {
    event,
    'x-success': xSuccess,
  })
}
