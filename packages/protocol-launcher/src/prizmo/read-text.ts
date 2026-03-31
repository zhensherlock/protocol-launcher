import { qs } from '@protocol-launcher/shared'

/**
 * Read text payload definition.
 */
type ReadText = {
  /**
   * The text to read in Prizmo Text Reader (must be URL encoded).
   */
  text?: string
  /**
   * The voice name.
   *
   * @example 'Ryan'
   */
  voice?: string
  /**
   * ISO 639-1 language code or Language-Region code with BCP-47 format.
   *
   * @example 'fr' or 'fr-FR'
   */
  language?: string
}

/**
 * Read text aloud in Prizmo Text Reader.
 *
 * @param payload Read text payload.
 * @returns Prizmo read text URL.
 * @example
 * readText({
 *   voice: 'Ryan',
 *   text: 'Hello World',
 * })
 * // => 'prizmo://x-callback-url/readText?voice=Ryan&text=Hello%20World'
 * @example
 * readText({})
 * // => 'prizmo://x-callback-url/readText'
 * @link https://github.com/creaceed/PrizmoAPI
 */
export function readText(payload: ReadText = {}) {
  const { text, voice, language } = payload
  const params = qs({
    ...(text ? { text } : {}),
    ...(voice ? { voice } : {}),
    ...(language ? { language } : {}),
  })

  return `prizmo://x-callback-url/readText${params}`
}
