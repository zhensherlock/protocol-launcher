import type { MomentoTextTagPayload } from './shared'
import { momentoTextTagParams, momentoUrl } from './shared'

/**
 * Add Places payload definition.
 */
type NewPlaces = MomentoTextTagPayload

/**
 * Launch Add Places in Momento.
 *
 * @param payload Add Places payload.
 * @returns Momento Add Places URL.
 * @example
 * newPlaces()
 * // => 'momento://new/places'
 * @example
 * newPlaces({ text: 'Just Arrived!', tag: ['Holiday', 'Summer'] })
 * // => 'momento://new/places?text=Just%20Arrived!&tag=Holiday&tag=Summer'
 * @link https://momento.zendesk.com/hc/en-us/articles/205668512-Momento-URL-Scheme
 */
export function newPlaces(payload: NewPlaces = {}) {
  const { scheme = 'momento' } = payload

  return momentoUrl('new/places', momentoTextTagParams(payload), scheme)
}
