import type { ChoosyUrlPayload } from './shared'
import { choosyUrl } from './shared'

/**
 * Open payload definition.
 */
export type Open = ChoosyUrlPayload

/**
 * Let Choosy decide what to do based on the user's settings.
 *
 * @param payload Open payload.
 * @returns Choosy open API URL.
 * @example
 * open({ url: 'https://example.com' })
 * // => 'x-choosy://open/https://example.com'
 * @link https://choosy.app/api
 */
export function open(payload: Open) {
  return choosyUrl('open', payload.url)
}
