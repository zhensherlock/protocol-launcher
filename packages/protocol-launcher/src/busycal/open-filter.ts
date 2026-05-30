import type { BusyCalFilterPayload } from './shared'
import { encodeBusyCalSegment } from './shared'

/**
 * Launch BusyCal on macOS with a Calendar Set or Smart Filter selected.
 *
 * @param payload BusyCal filter payload.
 * @returns BusyCal macOS filter URL.
 * @example
 * openFilter({ name: 'home' })
 * // => 'busycal://filter/home'
 * @example
 * openFilter({ name: 'Team Meetings' })
 * // => 'busycal://filter/Team%20Meetings'
 * @link https://www.busymac.com/docs/busycal/70621-url-handler/
 */
export function openFilter(payload: BusyCalFilterPayload) {
  const { name } = payload

  return `busycal://filter/${encodeBusyCalSegment(name)}`
}
