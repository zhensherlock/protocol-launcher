import { qs } from '@protocol-launcher/shared'

/**
 * Replace selection payload definition.
 */
type ReplaceSelection = {
  /**
   * The replacement text (required).
   *
   * @example 'New text'
   */
  text: string
}

/**
 * Replaces selected text in the current editing document in 1Writer.
 *
 * @param payload Replace selection payload.
 * @returns 1Writer replace selection URL.
 * @example
 * replaceSelection({ text: 'New text' })
 * // => 'onewriter://x-callback-url/replace-selection?text=New%20text'
 * @link https://1writerapp.com/url-scheme/
 */
export function replaceSelection(payload: ReplaceSelection) {
  const { text } = payload
  const params = qs({ text })

  return `onewriter://x-callback-url/replace-selection${params}`
}
