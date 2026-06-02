import type { ChoosyUrlPayload } from './shared'
import { choosyUrl } from './shared'

/**
 * Best all browsers payload definition.
 */
export type BestAll = ChoosyUrlPayload

/**
 * Use the user's favourite browser from their browser list.
 *
 * @param payload Best all browsers payload.
 * @returns Choosy best.all API URL.
 * @example
 * bestAll({ url: 'https://example.com' })
 * // => 'x-choosy://best.all/https://example.com'
 * @link https://choosy.app/api
 */
export function bestAll(payload: BestAll) {
  return choosyUrl('best.all', payload.url)
}
