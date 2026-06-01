import { type TextwellGeneralOptions, type TextwellRangePayload, textwellUrl } from './shared'

/**
 * Replace range payload definition.
 */
export type TextwellReplaceRangePayload = TextwellGeneralOptions &
  TextwellRangePayload & {
    /**
     * Text to replace the specified range with.
     */
    text: string
  }

/**
 * Replace a specific range, then select a specific range after replacement.
 *
 * @param payload Replace range payload.
 * @returns Textwell replaceRange URL.
 * @example
 * replaceRange({
 *   replacingLoc: 7,
 *   replacingLen: 5,
 *   text: 'Textwell',
 *   selectingLoc: 0,
 *   selectingLen: 16,
 * })
 * // => 'textwell:///replaceRange?replacingLoc=7&replacingLen=5&text=Textwell&selectingLoc=0&selectingLen=16'
 * @link https://sociomedia.com/textwell/urlschemes/
 */
export function replaceRange(payload: TextwellReplaceRangePayload) {
  const { replacingLoc, replacingLen, text, selectingLoc, selectingLen, ...options } = payload

  return textwellUrl(
    'replaceRange',
    {
      replacingLoc,
      replacingLen,
      text,
      selectingLoc,
      selectingLen,
    },
    options,
  )
}
