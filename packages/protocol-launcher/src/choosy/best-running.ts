import type { ChoosyUrlPayload } from './shared'
import { choosyUrl } from './shared'

/**
 * Best running browser payload definition.
 */
export type BestRunning = ChoosyUrlPayload

/**
 * Use the user's favourite browser that is already running, falling back to their overall favourite.
 *
 * @param payload Best running browser payload.
 * @returns Choosy best.running API URL.
 * @example
 * bestRunning({ url: 'https://example.com' })
 * // => 'x-choosy://best.running/https://example.com'
 * @link https://choosy.app/api
 */
export function bestRunning(payload: BestRunning) {
  return choosyUrl('best.running', payload.url)
}
