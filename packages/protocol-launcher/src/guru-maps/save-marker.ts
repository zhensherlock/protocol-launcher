import { guruUrl } from './shared'
import type { GuruMapsSaveMarker } from './types'

/**
 * Create a marker in Guru Maps.
 *
 * @param payload Marker payload.
 * @returns Guru Maps marker creation URL.
 * @example
 * saveMarker({ name: 'MyMarker', coord: '52.2297,21.0122' })
 * // => 'guru://saveMarker?name=MyMarker&coord=52.2297,21.0122'
 * @link https://gurumaps.app/docs/manual/guru-api#creating-a-marker
 */
export function saveMarker(payload: GuruMapsSaveMarker = {}) {
  const { name, coord } = payload

  return guruUrl('saveMarker', {
    name,
    coord,
  })
}
