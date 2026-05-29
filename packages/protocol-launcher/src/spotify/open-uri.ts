export interface OpenUri {
  /**
   * Official Spotify URI returned by Spotify APIs.
   *
   * @example 'spotify:track:11dFghVXANMlKmJXsNCbNl'
   */
  uri: string
}

/**
 * Open an official Spotify URI.
 *
 * @param payload Spotify URI payload.
 * @returns Spotify URI.
 * @throws When the URI does not start with `spotify:`.
 * @example
 * openUri({ uri: 'spotify:track:11dFghVXANMlKmJXsNCbNl' })
 * // => 'spotify:track:11dFghVXANMlKmJXsNCbNl'
 * @link https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids
 */
export function openUri(payload: OpenUri) {
  if (!payload.uri.startsWith('spotify:')) {
    throw new Error('Unsupported Spotify URI format.')
  }

  return payload.uri
}
