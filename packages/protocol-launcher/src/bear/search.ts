import { qs } from '@protocol-launcher/shared'

/**
 * Search command payload definition.
 */
type Search = {
  /**
   * String to search.
   */
  term?: string

  /**
   * Tag to search into.
   */
  tag?: string

  /**
   * If no the call don't force the opening of bear main window (MacOS only).
   */
  showWindow?: boolean

  /**
   * Application token.
   */
  token?: string
}

/**
 * Show search results in Bear for all notes or for a specific tag.
 *
 * @param payload Search command payload.
 * @returns Bear search URL.
 * @example
 * search({ term: 'nemo', tag: 'movies' })
 * // => 'bear://x-callback-url/search?term=nemo&tag=movies'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#search
 */
export function search(payload: Search = {}) {
  const { term, tag, showWindow, token } = payload

  const params = qs({
    ...(term ? { term } : {}),
    ...(tag ? { tag } : {}),
    ...(showWindow === false ? { show_window: 'no' } : {}),
    ...(token ? { token } : {}),
  })

  return `bear://x-callback-url/search${params ? `?${params}` : ''}`
}
