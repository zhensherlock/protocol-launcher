import { onSongUrl } from './shared'

/**
 * Launch OnSong.
 *
 * @returns OnSong launch URL.
 * @example
 * open()
 * // => 'onsong://'
 * @link https://onsongapp.com/developers/import/
 */
export function open() {
  return onSongUrl()
}
