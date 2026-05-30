import type { BusyCalDatePayload } from './shared'
import { encodeBusyCalSegment } from './shared'

/**
 * Highlight a date in BusyCal on iOS.
 *
 * @param payload BusyCal date payload.
 * @returns BusyCal iOS date URL.
 * @example
 * openIosDate({ date: '2021-05-31' })
 * // => 'busycal://date/2021-05-31'
 * @example
 * openIosDate({ date: 'now' })
 * // => 'busycal://date/now'
 * @link https://www.busymac.com/docs/busycalios/139998-url-handler/
 */
export function openIosDate(payload: BusyCalDatePayload) {
  const { date } = payload

  return `busycal://date/${encodeBusyCalSegment(date)}`
}
