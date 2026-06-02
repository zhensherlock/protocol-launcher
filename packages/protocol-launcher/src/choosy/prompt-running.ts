import type { ChoosyUrlPayload } from './shared'
import { choosyUrl } from './shared'

/**
 * Prompt running browsers payload definition.
 */
export type PromptRunning = ChoosyUrlPayload

/**
 * Prompt the user to select from running browsers, falling back to all browsers if none are running.
 *
 * @param payload Prompt running browsers payload.
 * @returns Choosy prompt.running API URL.
 * @example
 * promptRunning({ url: 'https://example.com' })
 * // => 'x-choosy://prompt.running/https://example.com'
 * @link https://choosy.app/api
 */
export function promptRunning(payload: PromptRunning) {
  return choosyUrl('prompt.running', payload.url)
}
