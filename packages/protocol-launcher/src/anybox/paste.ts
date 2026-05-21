import type { Paste } from './shared'
import { anyboxUrl, pasteParams } from './shared'

/**
 * Save clipboard content to Anybox and optionally assign a tag or star.
 *
 * @param payload Paste clipboard content payload.
 * @returns Anybox paste URL.
 * @example
 * paste({ tag: 'Reading', starred: 'yes' })
 * // => 'anybox://paste?tag=Reading&starred=yes'
 * @link https://anybox.app/url-schemes
 */
export function paste(payload: Paste = {}) {
  return anyboxUrl('paste', pasteParams(payload))
}
