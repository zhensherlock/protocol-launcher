import type { CalendarsReaddleSchemePayload } from './shared'
import { calendarsReaddleUrl } from './shared'

/**
 * Open the new event dialog in Calendars by Readdle.
 *
 * @returns Calendars by Readdle new event URL.
 * @example
 * newEvent()
 * // => 'calendarslite://newevent'
 * @example
 * newEvent({ scheme: 'calendars' })
 * // => 'calendars://newevent'
 * @link https://apphelp.readdle.com/calendars/?id=1228&pg=kb.page
 */
export function newEvent(payload: CalendarsReaddleSchemePayload = {}) {
  return calendarsReaddleUrl('newevent', payload)
}
