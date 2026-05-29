import type { MomentoTextTagPayload } from './shared'
import { momentoTextTagParams, momentoUrl } from './shared'

/**
 * Add Moment payload definition.
 */
type NewMoment = MomentoTextTagPayload

/**
 * Launch Add Moment in Momento.
 *
 * @param payload Add Moment payload.
 * @returns Momento Add Moment URL.
 * @example
 * newMoment()
 * // => 'momento://new/'
 * @example
 * newMoment({ text: 'Just Arrived!', tag: ['Holiday', 'Summer'] })
 * // => 'momento://new/?text=Just%20Arrived!&tag=Holiday&tag=Summer'
 * @link https://momento.zendesk.com/hc/en-us/articles/205668512-Momento-URL-Scheme
 */
export function newMoment(payload: NewMoment = {}) {
  const { scheme = 'momento' } = payload

  return momentoUrl('new/', momentoTextTagParams(payload), scheme)
}
