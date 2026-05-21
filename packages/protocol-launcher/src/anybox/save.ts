import type { Save } from './shared'
import { anyboxUrl, saveParams } from './shared'

/**
 * Save text content to Anybox and optionally assign tags, star, or archive on macOS.
 *
 * @param payload Save text content payload.
 * @returns Anybox save URL.
 * @example
 * save({ text: 'https://example.com/article', tag: 'Reading', starred: 'yes', archive: 'webarchive' })
 * // => 'anybox://save?text=https%3A%2F%2Fexample.com%2Farticle&tag=Reading&starred=yes&archive=webarchive'
 * @link https://anybox.app/url-schemes
 */
export function save(payload: Save) {
  return anyboxUrl('save', saveParams(payload))
}
