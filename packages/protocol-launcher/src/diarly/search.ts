import { diarlyUrl } from './shared'

/**
 * Search payload definition.
 */
type Search = {
  /**
   * Text to search.
   */
  text: string
}

/**
 * Search Diarly entries.
 *
 * @param payload Search payload.
 * @returns Diarly search URL.
 * @example
 * search({ text: '@onThisDay' })
 * // => 'diarly://search?text=%40onThisDay'
 * @link https://diarly.app/help/x-callback-url-scheme-documentation.html
 */
export function search(payload: Search) {
  const { text } = payload

  return diarlyUrl('search', {
    text,
  })
}
