import { type TextwellPasteOptions, textwellPasteParams, textwellUrl } from './shared'

/**
 * Paste to add payload definition.
 */
export type TextwellPasteAddPayload = TextwellPasteOptions

/**
 * Add text from the general paste board to the end of the main text view.
 *
 * @param payload Paste to add payload.
 * @returns Textwell pasteAdd URL.
 * @example
 * pasteAdd()
 * // => 'textwell:///pasteAdd?'
 * @example
 * pasteAdd({ suffix: '\n' })
 * // => 'textwell:///pasteAdd?suffix=%0A'
 * @link https://sociomedia.com/textwell/urlschemes/
 */
export function pasteAdd(payload: TextwellPasteAddPayload = {}) {
  return textwellUrl('pasteAdd', textwellPasteParams(payload), payload, true)
}
