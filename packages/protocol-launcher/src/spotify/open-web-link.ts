import { spotifyWebLink } from './shared'

export interface OpenWebLink {
  /**
   * Spotify web link from `external_urls.spotify`.
   */
  url: string

  /**
   * Your application's bundle ID or package name for Spotify attribution.
   */
  utmCampaign?: string
}

/**
 * Open a Spotify web link from `external_urls.spotify`.
 *
 * @param payload Spotify web link payload.
 * @returns Spotify web link.
 * @example
 * openWebLink({
 *   url: 'https://open.spotify.com/track/55fmthmn3rgnk9Wyx7G5dU',
 *   utmCampaign: 'com.app',
 * })
 * // => 'https://open.spotify.com/track/55fmthmn3rgnk9Wyx7G5dU?utm_campaign=com.app'
 * @link https://developer.spotify.com/documentation/ios/tutorials/content-linking
 */
export function openWebLink(payload: OpenWebLink) {
  return spotifyWebLink(payload.url, payload.utmCampaign)
}
