import { type TextwellPasteOptions, type TextwellRangePayload, textwellPasteParams, textwellUrl } from './shared'

/**
 * Paste to replace range payload definition.
 */
export type TextwellPasteReplaceRangePayload = TextwellPasteOptions & TextwellRangePayload

/**
 * Replace a specific range with text from the general paste board, then select a specific range.
 *
 * @param payload Paste to replace range payload.
 * @returns Textwell pasteReplaceRange URL.
 * @example
 * pasteReplaceRange({
 *   replacingLoc: 7,
 *   replacingLen: 5,
 *   selectingLoc: 0,
 *   selectingLen: 16,
 * })
 * // => 'textwell:///pasteReplaceRange?replacingLoc=7&replacingLen=5&selectingLoc=0&selectingLen=16'
 * @link https://sociomedia.com/textwell/urlschemes/
 */
export function pasteReplaceRange(payload: TextwellPasteReplaceRangePayload) {
  const { replacingLoc, replacingLen, selectingLoc, selectingLen, ...options } = payload

  return textwellUrl(
    'pasteReplaceRange',
    {
      replacingLoc,
      replacingLen,
      selectingLoc,
      selectingLen,
      ...textwellPasteParams(options),
    },
    options,
  )
}
