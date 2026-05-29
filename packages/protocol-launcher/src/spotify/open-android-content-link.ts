import { spotifyContentLink } from './shared'

export interface OpenAndroidContentLink {
  /**
   * Your Android application's package name.
   */
  campaign: string

  /**
   * Spotify content link used for the Android deeplink path.
   */
  deeplinkPath: string

  /**
   * Spotify content link used for the Android fallback URL.
   */
  fallbackUrl: string
}

/**
 * Open Spotify content with Spotify's official Android content linking URL.
 *
 * @param payload Spotify Android content linking payload.
 * @returns Spotify Android content linking URL.
 * @example
 * openAndroidContentLink({
 *   campaign: 'com.app',
 *   deeplinkPath: 'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj',
 *   fallbackUrl: 'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj',
 * })
 * // => 'https://spotify.link/content_linking?~campaign=com.app&$deeplink_path=https%3A%2F%2Fopen.spotify.com%2Falbum%2F0sNOF9WDwhWunNAHPD3Baj&$fallback_url=https%3A%2F%2Fopen.spotify.com%2Falbum%2F0sNOF9WDwhWunNAHPD3Baj'
 * @link https://developer.spotify.com/documentation/android/tutorials/content-linking
 */
export function openAndroidContentLink(payload: OpenAndroidContentLink) {
  return spotifyContentLink({
    '~campaign': payload.campaign,
    $deeplink_path: payload.deeplinkPath,
    $fallback_url: payload.fallbackUrl,
  })
}
