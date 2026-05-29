import { spotifyContentLink } from './shared'

export interface OpenIosContentLink {
  /**
   * Your iOS application's bundle ID.
   */
  campaign: string

  /**
   * Spotify content link, typically from `external_urls.spotify`.
   */
  canonicalUrl?: string
}

/**
 * Open Spotify content with Spotify's official iOS content linking URL.
 *
 * @param payload Spotify iOS content linking payload.
 * @returns Spotify iOS content linking URL.
 * @example
 * openIosContentLink({
 *   campaign: 'com.app',
 *   canonicalUrl: 'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj',
 * })
 * // => 'https://spotify.link/content_linking?~campaign=com.app&$canonical_url=https%3A%2F%2Fopen.spotify.com%2Falbum%2F0sNOF9WDwhWunNAHPD3Baj'
 * @link https://developer.spotify.com/documentation/ios/tutorials/content-linking
 */
export function openIosContentLink(payload: OpenIosContentLink) {
  return spotifyContentLink({
    '~campaign': payload.campaign,
    $canonical_url: payload.canonicalUrl,
  })
}
