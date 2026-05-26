import { type MarkedCallback, markedUrl } from './shared'

/**
 * Paste payload definition.
 */
export type Paste = MarkedCallback

/**
 * Create a new Marked document from the current clipboard contents.
 *
 * @param payload Paste payload.
 * @returns Marked paste URL.
 * @example
 * paste()
 * // => 'x-marked://paste'
 * @link https://marked2app.com/help/URL_Handler.html#paste
 */
export function paste(payload: Paste = {}) {
  return markedUrl('paste', {}, payload)
}
