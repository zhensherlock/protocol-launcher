import type { CalendarsReaddleParseEventPayload } from './shared'
import { calendarsReaddleParseUrl } from './shared'

/**
 * Open the new event dialog in Calendars by Readdle with a natural-language name.
 *
 * @param payload Calendars by Readdle parse command payload.
 * @returns Calendars by Readdle parse URL.
 * @example
 * parseEvent({ text: 'new event at 8 pm' })
 * // => 'calendarslite://parse="new%20event%20at%208%20pm"'
 * @link https://apphelp.readdle.com/calendars/?id=1228&pg=kb.page
 */
export function parseEvent(payload: CalendarsReaddleParseEventPayload = {}) {
  return calendarsReaddleParseUrl(payload)
}
