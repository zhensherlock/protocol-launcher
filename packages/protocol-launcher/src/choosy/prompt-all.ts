import type { ChoosyUrlPayload } from './shared'
import { choosyUrl } from './shared'

/**
 * Prompt all browsers payload definition.
 */
export type PromptAll = ChoosyUrlPayload

/**
 * Prompt the user to select from all of their browsers.
 *
 * @param payload Prompt all browsers payload.
 * @returns Choosy prompt.all API URL.
 * @example
 * promptAll({ url: 'https://www.georgebrock.com' })
 * // => 'x-choosy://prompt.all/https://www.georgebrock.com'
 * @link https://choosy.app/api
 */
export function promptAll(payload: PromptAll) {
  return choosyUrl('prompt.all', payload.url)
}
