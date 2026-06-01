import { type TextwellGeneralOptions, textwellUrl } from './shared'

/**
 * Insert text payload definition.
 */
export type TextwellInsertPayload = TextwellGeneralOptions & {
  /**
   * Text to insert at the current caret position.
   */
  text: string
}

/**
 * Insert text into Textwell's main text view at the current caret position.
 *
 * @param payload Insert text payload.
 * @returns Textwell insert URL.
 * @example
 * insert({ text: 'Inserted text' })
 * // => 'textwell:///insert?text=Inserted%20text'
 * @link https://sociomedia.com/textwell/urlschemes/
 */
export function insert(payload: TextwellInsertPayload) {
  const { text, ...options } = payload

  return textwellUrl('insert', { text }, options)
}
