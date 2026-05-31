import type { BuchenAddTagPayload } from './shared'
import { buchenAddTagUrl } from './shared'

/**
 * Add a tag in Buchen.
 *
 * @param payload Buchen add tag payload.
 * @returns Buchen add tag URL.
 * @example
 * addTag({
 *   name: 'reading',
 * })
 * // => 'buchen://add-tag?name=reading'
 * @link https://www.borovia.co/buchen.support.html
 */
export function addTag(payload: BuchenAddTagPayload) {
  return buchenAddTagUrl(payload)
}
