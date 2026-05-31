import type { Calendar366ImportCalendarPayload } from './shared'
import { assertCalendar366ImportUrl, calendar366Url } from './shared'

/**
 * Import a calendar file into Calendar 366.
 *
 * @param payload Calendar 366 import command payload.
 * @returns Calendar 366 import URL.
 * @example
 * importCalendar({ url: 'https://example.com/calendar.ics' })
 * // => 'cal366://import?url=https%3A%2F%2Fexample.com%2Fcalendar.ics'
 * @link https://calendar366.com/help/index.html
 */
export function importCalendar(payload: Calendar366ImportCalendarPayload) {
  const { url } = payload
  assertCalendar366ImportUrl(url)

  return calendar366Url('import', { url })
}
