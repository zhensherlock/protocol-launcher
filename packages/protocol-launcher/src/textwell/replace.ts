import { type TextwellGeneralOptions, textwellUrl } from './shared'

/**
 * Replace text payload definition.
 */
export type TextwellReplacePayload = TextwellGeneralOptions & {
  /**
   * Text to replace the whole main text view with.
   */
  text: string
}

/**
 * Replace the whole text in Textwell's main text view.
 *
 * @param payload Replace text payload.
 * @returns Textwell replace URL.
 * @example
 * replace({ text: 'Hello, Textwell.' })
 * // => 'textwell:///replace?text=Hello%2C%20Textwell.'
 * @link https://sociomedia.com/textwell/urlschemes/
 */
export function replace(payload: TextwellReplacePayload) {
  const { text, ...options } = payload

  return textwellUrl('replace', { text }, options)
}
