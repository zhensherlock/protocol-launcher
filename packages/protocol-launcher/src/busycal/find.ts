import type { BusyCalFindPayload } from './shared'
import { encodeBusyCalSegment } from './shared'

/**
 * Select an event or task in BusyCal on macOS.
 *
 * @param payload BusyCal find payload.
 * @returns BusyCal macOS find URL.
 * @example
 * find({ title: 'Buy Toner' })
 * // => 'busycalevent://find//Buy%20Toner'
 * @example
 * find({
 *   calendar: 'Personal',
 *   title: 'Pay Taxes',
 *   date: '2017-04-15T12:00:00+0000',
 * })
 * // => 'busycalevent://find/Personal/Pay%20Taxes/2017-04-15T12%3A00%3A00+0000'
 * @link https://www.busymac.com/docs/busycal/70621-url-handler/
 */
export function find(payload: BusyCalFindPayload) {
  const { calendar = '', title, date } = payload
  const segments = [calendar, title, ...(date === undefined ? [] : [date])].map(encodeBusyCalSegment)

  return `busycalevent://find/${segments.join('/')}`
}
