import type { BusyCalNewIosEventPayload } from './shared'
import { busyCalNewIosUrl } from './shared'

/**
 * Create a new BusyCal event on iOS using natural language.
 *
 * @param payload BusyCal iOS natural language event payload.
 * @returns BusyCal iOS new event URL.
 * @example
 * newIosEvent({ description: 'Baseball game tomorrow' })
 * // => 'busycal://new/Baseball%20game%20tomorrow'
 * @example
 * newIosEvent({ description: 'Baseball game tomorrow', autosave: true })
 * // => 'busycal://new/Baseball%20game%20tomorrow//true'
 * @link https://www.busymac.com/docs/busycalios/139998-url-handler/
 */
export function newIosEvent(payload: BusyCalNewIosEventPayload) {
  const { description, notes, autosave } = payload

  return busyCalNewIosUrl(description, notes, autosave)
}
