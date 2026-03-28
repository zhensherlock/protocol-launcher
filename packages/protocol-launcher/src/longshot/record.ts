import { qs } from '@protocol-launcher/shared'

/**
 * Record command payload definition.
 */
type Record = {
  /**
   * The function to execute.
   */
  func: string
}

/**
 * Start area recording in Longshot.
 *
 * @param payload Record command payload.
 * @returns Longshot record URL.
 * @example
 * record({ func: 'startArea' })
 * // => 'longshot://record?func=startArea'
 * @link https://longshot.chitaner.com/blog/urlschemeapi/
 */
export function record(payload: Record) {
  const { func } = payload
  const params = qs({ func })
  return `longshot://record${params}`
}
