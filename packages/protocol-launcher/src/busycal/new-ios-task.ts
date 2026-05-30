import type { BusyCalNewIosTaskPayload } from './shared'
import { busyCalNewIosTaskUrl } from './shared'

/**
 * Create a new BusyCal task on iOS using natural language.
 *
 * @param payload BusyCal iOS natural language task payload.
 * @returns BusyCal iOS new task URL.
 * @example
 * newIosTask({ description: 'Call Bob tomorrow' })
 * // => 'busycal://new/-Call%20Bob%20tomorrow'
 * @example
 * newIosTask({ description: 'Buy Toner /Shopping <www.amazon.com>', autosave: true })
 * // => 'busycal://new/-Buy%20Toner%20%2FShopping%20%3Cwww.amazon.com%3E/true'
 * @link https://www.busymac.com/docs/busycalios/139998-url-handler/
 */
export function newIosTask(payload: BusyCalNewIosTaskPayload) {
  const { description, notes, autosave } = payload

  return busyCalNewIosTaskUrl(description, notes, autosave)
}
