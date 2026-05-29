import type { MomentoSchemePayload } from './shared'
import { momentoUrl } from './shared'

/**
 * Add Moment date payload definition.
 */
type NewDate = MomentoSchemePayload

/**
 * Launch Add Moment and Change Date in Momento.
 *
 * @param payload Add Moment date payload.
 * @returns Momento Add Moment and Change Date URL.
 * @example
 * newDate()
 * // => 'momento://new/date'
 * @link https://momento.zendesk.com/hc/en-us/articles/205668512-Momento-URL-Scheme
 */
export function newDate(payload: NewDate = {}) {
  const { scheme = 'momento' } = payload

  return momentoUrl('new/date', {}, scheme)
}
