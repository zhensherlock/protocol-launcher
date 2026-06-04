import type { OnSongImportDataPayload } from './shared'
import { onSongImportDataUrl } from './shared'

/**
 * Import a Base64-encoded file into OnSong.
 *
 * @param payload OnSong import data payload.
 * @returns OnSong ImportData URL.
 * @example
 * importData({ filename: 'My Song Title.pdf', base64Data: 'BASE_64_ENCODED_DATA_HERE' })
 * // => 'onsong://ImportData/My%20Song%20Title.pdf?BASE_64_ENCODED_DATA_HERE'
 * @link https://onsongapp.com/developers/import/
 */
export function importData(payload: OnSongImportDataPayload) {
  return onSongImportDataUrl(payload)
}
