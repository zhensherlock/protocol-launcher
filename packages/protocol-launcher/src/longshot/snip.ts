import { type LongshotCommandPayload, longshotCommandUrl } from './shared'

/**
 * Snip command payload definition.
 */
type Snip = LongshotCommandPayload

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
  return longshotCommandUrl('snip', payload, 'data')
}
