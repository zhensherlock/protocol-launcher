import { guruUrl } from './shared'
import type { GuruMapsImportFile } from './types'

/**
 * Import a supported file into Guru Maps from a URL.
 *
 * @param payload File import payload.
 * @returns Guru Maps file import URL.
 * @example
 * importFile({ url: 'https://gurumaps.app/example/feature_collection.geojson' })
 * // => 'guru://open?url=https://gurumaps.app/example/feature_collection.geojson'
 * @link https://gurumaps.app/docs/manual/guru-api#file-import
 */
export function importFile(payload: GuruMapsImportFile) {
  return guruUrl('open', {
    url: payload.url,
  })
}
