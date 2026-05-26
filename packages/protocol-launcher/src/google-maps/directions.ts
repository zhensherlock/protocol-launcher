import type { GoogleMapsDirections } from './types'
import { googleMapsUrl } from './utils'

/**
 * Request and display directions between two locations.
 *
 * @param payload Directions payload.
 * @returns Google Maps directions URL.
 * @example
 * directions({
 *   saddr: 'Google Inc, 8th Avenue, New York, NY',
 *   daddr: 'John F. Kennedy International Airport, Van Wyck Expressway, Jamaica, New York',
 *   directionsmode: 'transit',
 * })
 * // => 'comgooglemaps://?saddr=Google+Inc,+8th+Avenue,+New+York,+NY&daddr=John+F.+Kennedy+International+Airport,+Van+Wyck+Expressway,+Jamaica,+New+York&directionsmode=transit'
 * @link https://developers.google.com/maps/documentation/urls/ios-urlscheme#display_directions
 */
export function directions(payload: GoogleMapsDirections) {
  const { saddr, daddr, center, directionsmode, zoom } = payload

  return googleMapsUrl({
    saddr,
    daddr,
    center,
    directionsmode,
    zoom,
  })
}
