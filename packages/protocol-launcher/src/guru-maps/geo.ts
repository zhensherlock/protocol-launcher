import type { GuruMapsGeo } from './types'

/**
 * Display a specific location with the `geo:` scheme supported by Guru Maps.
 *
 * @param payload Geo payload.
 * @returns Geo URL.
 * @example
 * geo({ coord: '52.2297,21.0122' })
 * // => 'geo:52.2297,21.0122'
 * @link https://gurumaps.app/docs/manual/guru-api#displaying-a-place-with-specified-coordinates-on-the-map
 */
export function geo(payload: GuruMapsGeo) {
  return `geo:${payload.coord}`
}
