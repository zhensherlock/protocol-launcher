import type { WeekPayload } from './shared'
import { timepageUrl } from './shared'

/**
 * Open Timepage and show a specified week.
 *
 * @param payload Week payload.
 * @returns Timepage open week URL.
 * @example
 * openWeek({ week: 'this' })
 * // => 'timepage://open_week?week=this'
 * @example
 * openWeek({ week: -1 })
 * // => 'timepage://open_week?week=-1'
 *
 * @link https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/
 */
export function openWeek(payload: WeekPayload) {
  const { week } = payload

  return timepageUrl('open_week', { week })
}
