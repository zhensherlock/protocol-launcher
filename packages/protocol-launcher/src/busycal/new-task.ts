import type { BusyCalNewTaskPayload } from './shared'
import { busyCalNewUrl } from './shared'

/**
 * Create a new BusyCal task on macOS using natural language.
 *
 * @param payload BusyCal natural language task payload.
 * @returns BusyCal macOS new task URL.
 * @example
 * newTask({ description: 'Call Bob tomorrow' })
 * // => 'busycalevent://new/-Call%20Bob%20tomorrow'
 * @example
 * newTask({ description: 'Pay Taxes April 15!!! /Personal' })
 * // => 'busycalevent://new/-Pay%20Taxes%20April%2015!!!%20%2FPersonal'
 * @link https://www.busymac.com/docs/busycal/70621-url-handler/
 */
export function newTask(payload: BusyCalNewTaskPayload) {
  const { description, notes } = payload

  return busyCalNewUrl('busycalevent', `-${description}`, notes)
}
