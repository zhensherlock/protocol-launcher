import { qs } from '@protocol-launcher/shared'

/**
 * Lookup command payload definition for x-callback-url scheme.
 */
type Lookup = {
  /**
   * The friendly name of the source app calling the action.
   * When Equipd is opened it will show a button with the name of the source app.
   *
   * @example 'Your App Name'
   */
  xSource?: string
  /**
   * The URL Scheme of the source app.
   * When the button is clicked it will call this URL – typically used to return to the source app.
   *
   * @example 'yourappname://'
   */
  xSuccess?: string
  /**
   * Contains the scripture to be looked up.
   * Should follow the same structure as the scripture function.
   *
   * @example '2Tim3:16,17'
   */
  scripture?: string
  /**
   * Optionally specify the language that the scripture being passed in is using.
   * If not specified the default value is 'en' (English).
   *
   * @example 'en'
   * @example 'fr'
   * @example 'zh'
   */
  language?: string
  /**
   * The ID of the book to be looked up.
   * e.g. '1' will open Genesis, '40' will open the book of Matthew.
   *
   * @example '40'
   */
  book?: string | number
  /**
   * The number of the chapter to be looked up.
   *
   * @example '21'
   */
  chapter?: string | number
  /**
   * A comma-delimited list of verses to open.
   *
   * @example '3,4'
   * @example '15,16,17'
   * @example '21'
   */
  verses?: string
}

/**
 * Lookup a scripture in Equipd Bible using the x-callback-url scheme.
 * This is the most powerful method of integrating with the Equipd Bible app.
 *
 * @param payload Lookup command payload.
 * @returns Equipd Bible x-callback-url lookup URL.
 * @example
 * lookup({
 *   xSource: 'Your App Name',
 *   xSuccess: 'yourappname://',
 *   scripture: '2Tim3:16',
 * })
 * // => 'equipdbible://x-callback-url/lookup?x-source=Your%20App%20Name&x-success=yourappname%3A%2F%2F&scripture=2Tim3%3A16'
 * @example
 * lookup({ scripture: 'John3:16' })
 * // => 'equipdbible://x-callback-url/lookup?scripture=John3%3A16'
 * @example
 * lookup({ book: 40, chapter: 5, verses: '3,4' })
 * // => 'equipdbible://x-callback-url/lookup?book=40&chapter=5&verses=3%2C4'
 * @link https://www.equipd.me/kb/url-scheme/
 */
export function lookup(payload: Lookup = {}) {
  const { xSource, xSuccess, scripture, language, book, chapter, verses } = payload
  const params = qs({
    ...(xSource ? { 'x-source': xSource } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(scripture ? { scripture } : {}),
    ...(language ? { language } : {}),
    ...(book !== undefined ? { book: String(book) } : {}),
    ...(chapter !== undefined ? { chapter: String(chapter) } : {}),
    ...(verses ? { verses } : {}),
  })

  return `equipdbible://x-callback-url/lookup${params}`
}
