import { backUrlParam, guruUrl } from './shared'
import type { GuruMapsShowPlace } from './types'

/**
 * Display a place with specified coordinates on the map.
 *
 * @param payload Place display payload.
 * @returns Guru Maps place display URL.
 * @example
 * showPlace({ coord: '52.2297,21.0122', zoom: 17 })
 * // => 'guru://show?place=52.2297,21.0122,17'
 * @link https://gurumaps.app/docs/manual/guru-api#displaying-a-place-with-specified-coordinates-on-the-map
 */
export function showPlace(payload: GuruMapsShowPlace) {
  const { coord, zoom } = payload
  const place = zoom === undefined ? coord : `${coord},${zoom}`

  return guruUrl('show', {
    place,
    ...backUrlParam(payload),
  })
}
