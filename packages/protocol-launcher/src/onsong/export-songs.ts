import type { OnSongExportSongsPayload } from './shared'
import { onSongExportSongsParams, onSongUrl } from './shared'

/**
 * Export song, set, or collection data from OnSong to a callback URL prefix.
 *
 * @param payload OnSong export songs payload.
 * @returns OnSong export songs URL.
 * @example
 * exportSongs({ collection: 'current', returnURL: 'http://mywebsite.com/receive?data=' })
 * // => 'onsong://export/songs?collection=current&returnURL=http%3A%2F%2Fmywebsite%2Ecom%2Freceive%3Fdata%3D'
 * @link https://onsongapp.com/developers/open-song/
 */
export function exportSongs(payload: OnSongExportSongsPayload) {
  return onSongUrl('export/songs', onSongExportSongsParams(payload))
}
