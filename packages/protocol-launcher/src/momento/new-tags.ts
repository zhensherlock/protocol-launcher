import type { MomentoSchemePayload } from './shared'
import { momentoUrl } from './shared'

/**
 * Add Tags payload definition.
 */
type NewTags = MomentoSchemePayload

/**
 * Launch Add Tags in Momento.
 *
 * @param payload Add Tags payload.
 * @returns Momento Add Tags URL.
 * @example
 * newTags()
 * // => 'momento://new/tags'
 * @link https://momento.zendesk.com/hc/en-us/articles/205668512-Momento-URL-Scheme
 */
export function newTags(payload: NewTags = {}) {
  const { scheme = 'momento' } = payload

  return momentoUrl('new/tags', {}, scheme)
}
