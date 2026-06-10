import { type LetterboxdSearchType, type LetterboxdXCallbackPayload, letterboxdUrl } from './shared'

export type SearchPayload = LetterboxdXCallbackPayload & {
  /**
   * Search query.
   */
  query?: string

  /**
   * Search type. Letterboxd defaults to `all` when omitted.
   */
  type?: LetterboxdSearchType
}

/**
 * Search Letterboxd for films, members, lists, reviews, contributors, or all result types.
 *
 * @param payload Letterboxd search payload.
 * @returns Letterboxd search x-callback-url.
 * @example
 * search({ query: 'Blade Runner', type: 'film' })
 * // => 'letterboxd://x-callback-url/search?query=Blade%20Runner&type=film'
 * @link https://github.com/Letterboxd/letterboxd-ios-x-callback-url
 */
export function search(payload: SearchPayload = {}) {
  const { query, type, xSuccess, xCancel, xError } = payload

  return letterboxdUrl('search', {
    query,
    type,
    xSuccess,
    xCancel,
    xError,
  })
}
