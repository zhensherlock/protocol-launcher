import { type TextwellPasteOptions, textwellPasteParams, textwellUrl } from './shared'

/**
 * Paste to insert payload definition.
 */
export type TextwellPasteInsertPayload = TextwellPasteOptions

/**
 * Insert text from the general paste board at the current caret position.
 *
 * @param payload Paste to insert payload.
 * @returns Textwell pasteInsert URL.
 * @example
 * pasteInsert()
 * // => 'textwell:///pasteInsert?'
 * @example
 * pasteInsert({ prefix: '> ' })
 * // => 'textwell:///pasteInsert?prefix=%3E%20'
 * @link https://sociomedia.com/textwell/urlschemes/
 */
export function pasteInsert(payload: TextwellPasteInsertPayload = {}) {
  return textwellUrl('pasteInsert', textwellPasteParams(payload), payload, true)
}
