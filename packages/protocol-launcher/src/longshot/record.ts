import { type LongshotCommandPayload, longshotCommandUrl } from './shared'

/**
 * Record command payload definition.
 */
type Record = LongshotCommandPayload

/**
 * Start area recording in Longshot.
 *
 * @param payload Record command payload.
 * @returns Longshot record URL.
 * @example
 * record({ func: 'start_area' })
 * // => 'longshot://record?func=start_area'
 * @link https://longshot.chitaner.com/blog/urlschemeapi/
 */
export function record(payload: Record) {
  return longshotCommandUrl('record', payload, 'filepath')
}
