import { moovitUrl } from './shared'
import type { MoovitNearbyPayload } from './types'

/**
 * Open Moovit nearby transit.
 *
 * @param payload Nearby transit payload.
 * @returns Moovit nearby transit URL.
 * @example
 * nearby({ lat: 40.758896, lon: -73.98513, partner_id: 'YOUR_APP_NAME' })
 * // => 'moovit://nearby?lat=40.758896&lon=-73.98513&partner_id=YOUR_APP_NAME'
 * @link https://moovit.com/developers/deeplinking/
 */
export function nearby(payload: MoovitNearbyPayload) {
  const { lat, lon, partner_id } = payload

  return moovitUrl('nearby', {
    lat,
    lon,
    partner_id,
  })
}
