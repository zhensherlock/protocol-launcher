import type { BusyCalDatePayload } from './shared'
import { encodeBusyCalSegment } from './shared'

/**
 * Highlight a date in BusyCal on macOS.
 *
 * @param payload BusyCal date payload.
 * @returns BusyCal macOS date URL.
 * @example
 * openDate({ date: '2021-05-31' })
 * // => 'busycalevent://date/2021-05-31'
 * @example
 * openDate({ date: 'now' })
 * // => 'busycalevent://date/now'
 * @link https://www.busymac.com/docs/busycal/70621-url-handler/
 */
export function openDate(payload: BusyCalDatePayload) {
  const { date } = payload

  return `busycalevent://date/${encodeBusyCalSegment(date)}`
}
