/**
 * Open date payload definition.
 */
type OpenDate = {
  /**
   * The date to open Itsycal at.
   * Use 'now' for today's date, or a date in yyyy-MM-dd format.
   *
   * @default 'now'
   * @example 'now'
   * @example '2024-01-10'
   */
  date?: string
}

/**
 * Open Itsycal at a specific date.
 *
 * @param payload Open date payload.
 * @returns Itsycal open date URL.
 * @example
 * openDate({ date: 'now' })
 * // => 'itsycal://date/now'
 * @example
 * openDate({ date: '2024-01-10' })
 * // => 'itsycal://date/2024-01-10'
 * @example
 * openDate({})
 * // => 'itsycal://date/now'
 *
 * @link https://www.mowglii.com/itsycal/help#url_scheme
 */
export function openDate(payload: OpenDate = {}) {
  const { date = 'now' } = payload
  return `itsycal://date/${date}`
}
