import type { OnSongOpenSongPayload } from './shared'
import { onSongUrl } from './shared'

/**
 * Open a song in OnSong by title or song identifier.
 *
 * @param payload OnSong open song payload.
 * @returns OnSong open song URL.
 * @example
 * openSong({ song: 'be-still' })
 * // => 'onsong://open/songs?song=be-still'
 * @link https://onsongapp.com/developers/open-song/
 */
export function openSong(payload: OnSongOpenSongPayload) {
  const { song } = payload

  return onSongUrl('open/songs', {
    song,
  })
}
