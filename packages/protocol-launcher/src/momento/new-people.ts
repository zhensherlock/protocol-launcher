import type { MomentoSchemePayload } from './shared'
import { momentoUrl } from './shared'

/**
 * Add People payload definition.
 */
type NewPeople = MomentoSchemePayload

/**
 * Launch Add People in Momento.
 *
 * @param payload Add People payload.
 * @returns Momento Add People URL.
 * @example
 * newPeople()
 * // => 'momento://new/people'
 * @link https://momento.zendesk.com/hc/en-us/articles/205668512-Momento-URL-Scheme
 */
export function newPeople(payload: NewPeople = {}) {
  const { scheme = 'momento' } = payload

  return momentoUrl('new/people', {}, scheme)
}
