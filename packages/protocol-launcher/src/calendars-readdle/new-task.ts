import type { CalendarsReaddleSchemePayload } from './shared'
import { calendarsReaddleUrl } from './shared'

/**
 * Open the new task dialog in Calendars by Readdle.
 *
 * @returns Calendars by Readdle new task URL.
 * @example
 * newTask()
 * // => 'calendarslite://newtask'
 * @example
 * newTask({ scheme: 'calendars' })
 * // => 'calendars://newtask'
 * @link https://apphelp.readdle.com/calendars/?id=1228&pg=kb.page
 */
export function newTask(payload: CalendarsReaddleSchemePayload = {}) {
  return calendarsReaddleUrl('newtask', payload)
}
