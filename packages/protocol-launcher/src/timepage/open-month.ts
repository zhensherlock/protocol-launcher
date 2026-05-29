import type { MonthPayload } from './shared'
import { timepageUrl } from './shared'

/**
 * Open Timepage and show a specified month.
 *
 * @param payload Month payload.
 * @returns Timepage open month URL.
 * @example
 * openMonth({ month: 'next' })
 * // => 'timepage://open_month?month=next'
 * @example
 * openMonth({ month: 0 })
 * // => 'timepage://open_month?month=0'
 *
 * @link https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/
 */
export function openMonth(payload: MonthPayload) {
  const { month } = payload

  return timepageUrl('open_month', { month })
}
