import type { BusyCalNewEventPayload } from './shared'
import { busyCalNewUrl } from './shared'

/**
 * Create a new BusyCal event on macOS using natural language.
 *
 * @param payload BusyCal natural language event payload.
 * @returns BusyCal macOS new event URL.
 * @example
 * newEvent({ description: 'Staff meeting Thursday at 10am' })
 * // => 'busycalevent://new/Staff%20meeting%20Thursday%20at%2010am'
 * @example
 * newEvent({
 *   description: 'Meeting with Joe June 7 at 3pm /Work',
 *   notes: 'Some Notes',
 * })
 * // => 'busycalevent://new/Meeting%20with%20Joe%20June%207%20at%203pm%20%2FWork/Some%20Notes'
 * @link https://www.busymac.com/docs/busycal/70621-url-handler/
 */
export function newEvent(payload: BusyCalNewEventPayload) {
  const { description, notes } = payload

  return busyCalNewUrl('busycalevent', description, notes)
}
