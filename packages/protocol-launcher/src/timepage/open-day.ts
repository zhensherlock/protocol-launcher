import type { DayPayload } from './shared'
import { timepageUrl } from './shared'

/**
 * Open Timepage and show a specified day.
 *
 * @param payload Day payload.
 * @returns Timepage open day URL.
 * @example
 * openDay({ day: 'today' })
 * // => 'timepage://open_day?day=today'
 * @example
 * openDay({ day: '2026-03-30' })
 * // => 'timepage://open_day?day=2026-03-30'
 *
 * @link https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/
 */
export function openDay(payload: DayPayload) {
  const { day } = payload

  return timepageUrl('open_day', { day })
}
