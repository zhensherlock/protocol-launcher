import type { GoogleMapsDisplayMap } from './types'
import { displayMapParams, googleMapsUrl } from './utils'

/**
 * Display a map at a specified zoom level and location.
 *
 * @param payload Display map payload.
 * @returns Google Maps display map URL.
 * @example
 * displayMap({ center: '40.765819,-73.975866', zoom: 14, views: 'traffic' })
 * // => 'comgooglemaps://?center=40.765819,-73.975866&zoom=14&views=traffic'
 * @example
 * displayMap({ center: '46.414382,10.013988', mapmode: 'streetview' })
 * // => 'comgooglemaps://?center=46.414382,10.013988&mapmode=streetview'
 * @link https://developers.google.com/maps/documentation/urls/ios-urlscheme#display_a_map
 */
export function displayMap(payload: GoogleMapsDisplayMap = {}) {
  return googleMapsUrl(displayMapParams(payload))
}
