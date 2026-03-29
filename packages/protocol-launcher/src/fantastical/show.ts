import { qs } from '@protocol-launcher/shared'

/**
 * Show command payload definition for navigating to dates in Fantastical.
 */
type Show = {
  /**
   * The date to jump to. Can be a specific date (yyyy-mm-dd) or natural language.
   *
   * @example '2026-03-30'
   * @example 'today'
   * @example 'next monday'
   * @example 'tomorrow'
   */
  date: string
}

/**
 * Jump to a specific date in Fantastical.
 *
 * @param payload Show command payload.
 * @returns Fantastical show URL.
 * @example
 * show({ date: 'today' })
 * // => 'x-fantastical3://show?date=today'
 * @example
 * show({ date: '2026-03-30' })
 * // => 'x-fantastical3://show?date=2026-03-30'
 * @example
 * show({ date: 'next monday' })
 * // => 'x-fantastical3://show?date=next%20monday'
 * @link https://flexibits.com/support/kb/51
 */
export function show(payload: Show) {
  const { date } = payload
  const params = qs({ date })

  return `x-fantastical3://show${params}`
}
