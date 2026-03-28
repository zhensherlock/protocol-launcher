import { qs } from '@protocol-launcher/shared'

/**
 * Rule command payload definition.
 */
type Rule = {
  /**
   * The function to execute.
   */
  func: string
}

/**
 * Start screen measurement in Longshot.
 *
 * @param payload Rule command payload.
 * @returns Longshot rule URL.
 * @example
 * rule({ func: 'start' })
 * // => 'longshot://rule?func=start'
 * @link https://longshot.chitaner.com/blog/urlschemeapi/
 */
export function rule(payload: Rule) {
  const { func } = payload
  const params = qs({ func })
  return `longshot://rule${params}`
}
