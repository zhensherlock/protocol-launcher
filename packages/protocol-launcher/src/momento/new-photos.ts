import type { MomentoSchemePayload } from './shared'
import { momentoUrl } from './shared'

/**
 * Add Photos payload definition.
 */
type NewPhotos = MomentoSchemePayload

/**
 * Launch Add Photos in Momento.
 *
 * @param payload Add Photos payload.
 * @returns Momento Add Photos URL.
 * @example
 * newPhotos()
 * // => 'momento://new/photos'
 * @link https://momento.zendesk.com/hc/en-us/articles/205668512-Momento-URL-Scheme
 */
export function newPhotos(payload: NewPhotos = {}) {
  const { scheme = 'momento' } = payload

  return momentoUrl('new/photos', {}, scheme)
}
