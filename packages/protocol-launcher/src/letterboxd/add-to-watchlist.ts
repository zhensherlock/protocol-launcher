import { type LetterboxdXCallbackPayload, letterboxdUrl } from './shared'

export type AddToWatchlistPayload = LetterboxdXCallbackPayload & {
  /**
   * Film name. Letterboxd uses this as a search query and asks the user to manually confirm the correct result.
   */
  name?: string
}

/**
 * Add a film to the user's Letterboxd watchlist after manual result confirmation.
 *
 * @param payload Letterboxd add-to-watchlist payload.
 * @returns Letterboxd addToWatchlist x-callback-url.
 * @example
 * addToWatchlist({ name: 'Heat' })
 * // => 'letterboxd://x-callback-url/addToWatchlist?name=Heat'
 * @link https://github.com/Letterboxd/letterboxd-ios-x-callback-url
 */
export function addToWatchlist(payload: AddToWatchlistPayload = {}) {
  const { name, xSuccess, xCancel, xError } = payload

  return letterboxdUrl('addToWatchlist', {
    name,
    xSuccess,
    xCancel,
    xError,
  })
}
