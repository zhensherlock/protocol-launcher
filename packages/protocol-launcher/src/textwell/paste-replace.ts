import { type TextwellPasteOptions, textwellPasteParams, textwellUrl } from './shared'

/**
 * Paste to replace payload definition.
 */
export type TextwellPasteReplacePayload = TextwellPasteOptions

/**
 * Replace the whole main text view with text from the general paste board.
 *
 * @param payload Paste to replace payload.
 * @returns Textwell pasteReplace URL.
 * @example
 * pasteReplace()
 * // => 'textwell:///pasteReplace?'
 * @example
 * pasteReplace({ prefix: '[', suffix: ']' })
 * // => 'textwell:///pasteReplace?prefix=%5B&suffix=%5D'
 * @link https://sociomedia.com/textwell/urlschemes/
 */
export function pasteReplace(payload: TextwellPasteReplacePayload = {}) {
  return textwellUrl('pasteReplace', textwellPasteParams(payload), payload, true)
}
