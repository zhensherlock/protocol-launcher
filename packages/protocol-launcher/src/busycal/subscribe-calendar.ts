import type { BusyCalSubscribeCalendarPayload } from './shared'

/**
 * Subscribe to a calendar feed with BusyCal's documented `webcal://` URL form.
 *
 * @param payload BusyCal calendar subscription payload.
 * @returns Calendar subscription URL.
 * @example
 * subscribeCalendar({ url: 'webcal://example.com/calendar.ics' })
 * // => 'webcal://example.com/calendar.ics'
 * @link https://www.busymac.com/docs/busycal/70621-url-handler/
 */
export function subscribeCalendar(payload: BusyCalSubscribeCalendarPayload) {
  const { url } = payload

  return url
}
