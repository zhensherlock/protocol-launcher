import type { GoogleMapsSearch } from './types'
import { displayMapParams, googleMapsUrl } from './utils'

/**
 * Display search queries in a specified viewport location.
 *
 * @param payload Search payload.
 * @returns Google Maps search URL.
 * @example
 * search({ q: 'Pizza', center: '37.759748,-122.427135' })
 * // => 'comgooglemaps://?q=Pizza&center=37.759748,-122.427135'
 * @link https://developers.google.com/maps/documentation/urls/ios-urlscheme#search
 */
export function search(payload: GoogleMapsSearch) {
  const { q, ...displayMapPayload } = payload

  return googleMapsUrl({
    q,
    ...displayMapParams(displayMapPayload),
  })
}
