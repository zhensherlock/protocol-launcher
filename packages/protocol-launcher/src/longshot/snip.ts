import { qs } from '@protocol-launcher/shared'

/**
 * Snip command payload definition.
 */
type Snip = {
  /**
   * The function to execute.
   */
  func: string
}

/**
 * Start screenshot in Longshot.
 *
 * @param payload Snip command payload.
 * @returns Longshot snip URL.
 * @example
 * snip({ func: 'start' })
 * // => 'longshot://snip?func=start'
 * @link https://longshot.chitaner.com/blog/urlschemeapi/
 */
export function snip(payload: Snip) {
  const { func } = payload
  const params = qs({ func })
  return `longshot://snip${params}`
}
