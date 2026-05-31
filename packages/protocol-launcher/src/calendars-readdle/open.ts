import type { CalendarsReaddleSchemePayload } from './shared'
import { calendarsReaddleUrl } from './shared'

/**
 * Open Calendars by Readdle.
 *
 * @returns Calendars by Readdle open URL.
 * @example
 * open()
 * // => 'calendarslite://open'
 * @example
 * open({ scheme: 'calendars' })
 * // => 'calendars://open'
 * @link https://apphelp.readdle.com/calendars/?id=1228&pg=kb.page
 */
export function open(payload: CalendarsReaddleSchemePayload = {}) {
  return calendarsReaddleUrl('open', payload)
}
