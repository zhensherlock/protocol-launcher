import { type TextwellGeneralOptions, textwellUrl } from './shared'

/**
 * Add text payload definition.
 */
export type TextwellAddPayload = TextwellGeneralOptions & {
  /**
   * Text to add to the end of the existing main text view content.
   */
  text: string
}

/**
 * Add text to the end of Textwell's main text view.
 *
 * @param payload Add text payload.
 * @returns Textwell add URL.
 * @example
 * add({ text: 'New ending' })
 * // => 'textwell:///add?text=New%20ending'
 * @link https://sociomedia.com/textwell/urlschemes/
 */
export function add(payload: TextwellAddPayload) {
  const { text, ...options } = payload

  return textwellUrl('add', { text }, options)
}
