import { organicMapsQuery } from './shared'
import type { OrganicMapsGeo } from './types'

export type GeoPayload = OrganicMapsGeo

/**
 * Build a Geo URI handled by Organic Maps.
 *
 * @param payload Geo URI payload.
 * @returns Geo URI.
 * @example
 * geo({ coordinates: '35.341714,33.32231', title: 'Custom Title' })
 * // => 'geo:35.341714,33.32231(Custom%20Title)'
 * @link https://omaps.app/api
 * @link https://en.wikipedia.org/wiki/Geo_URI_scheme
 */
export function geo(payload: GeoPayload) {
  const { coordinates, altitude, uncertainty, title, query, zoom } = payload
  const altitudePart = altitude === undefined ? '' : `,${altitude}`
  const uncertaintyPart = uncertainty === undefined ? '' : `;u=${encodeURIComponent(String(uncertainty))}`
  const titlePart = title === undefined ? '' : `(${encodeURIComponent(title)})`

  return `geo:${coordinates}${altitudePart}${uncertaintyPart}${titlePart}${organicMapsQuery([
    ['q', query],
    ['z', zoom],
  ])}`
}
