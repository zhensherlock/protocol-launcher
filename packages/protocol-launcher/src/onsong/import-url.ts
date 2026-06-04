import type { OnSongImportUrlPayload } from './shared'
import { onSongImportUrl } from './shared'

/**
 * Import a supported file format from an HTTP URL into OnSong.
 *
 * @param payload OnSong import URL payload.
 * @returns OnSong import URL.
 * @example
 * importUrl({ url: 'http://my.domain.com/files/go/here/Song%20Title.txt' })
 * // => 'onsong://my.domain.com/files/go/here/Song%20Title.txt'
 * @link https://onsongapp.com/developers/import/
 */
export function importUrl(payload: OnSongImportUrlPayload) {
  return onSongImportUrl(payload)
}
