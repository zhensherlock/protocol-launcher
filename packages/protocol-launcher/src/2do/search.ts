import { qs } from '@protocol-launcher/shared'

/**
 * Search payload definition.
 */
type Search = {
  /**
   * The search text. Can be a simple text, or advanced search syntax.
   * When the supplied text is '(clipboard)', 2Do will copy the text from the clipboard.
   *
   * @example 'John'
   * @example 'type:overdue'
   * @example '(clipboard)'
   */
  text: string
}

/**
 * Launch 2Do with search pre-filled.
 *
 * @param payload Search payload.
 * @returns 2Do search URL.
 * @example
 * search({ text: 'John' })
 * // => 'twodo://x-callback-url/search?text=John'
 * @example
 * search({ text: 'type:overdue' })
 * // => 'twodo://x-callback-url/search?text=type%3Aoverdue'
 * @example
 * search({ text: '(clipboard)' })
 * // => 'twodo://x-callback-url/search?text=(clipboard)'
 * @link https://www.2doapp.com/kb/article/url-schemes.html
 */
export function search(payload: Search) {
  const { text } = payload
  const params = qs({ text })

  return `twodo://x-callback-url/search${params}`
}
