import type { OnSongOpenSongsPayload } from './shared'
import { onSongOpenSongsParams, onSongOpenSongsPath, onSongUrl } from './shared'

/**
 * Open songs, a collection, a set, or navigate the song viewer in OnSong.
 *
 * @param payload OnSong open songs payload.
 * @returns OnSong open songs URL.
 * @example
 * openSongs({ song: ['be-still', 'beautiful-life', 'changes'], index: 1 })
 * // => 'onsong://open/songs/?song=be-still&song=beautiful-life&song=changes&index=1'
 * @link https://onsongapp.com/developers/open-song/
 */
export function openSongs(payload: OnSongOpenSongsPayload) {
  return onSongUrl(onSongOpenSongsPath(payload), onSongOpenSongsParams(payload))
}
