import { moovitUrl } from './shared'
import type { MoovitDirectionsPayload } from './types'

/**
 * Open Moovit directions.
 *
 * @param payload Directions payload.
 * @returns Moovit directions URL.
 * @example
 * directions({
 *   dest_lat: 40.758896,
 *   dest_lon: -73.98513,
 *   dest_name: 'Times Square',
 *   orig_lat: 40.735845,
 *   orig_lon: -73.990512,
 *   orig_name: 'Union Square',
 *   auto_run: true,
 *   date: '2019-04-01T18:30:00+02:00',
 *   partner_id: 'YOUR_APP_NAME',
 * })
 * // => 'moovit://directions?dest_lat=40.758896&dest_lon=-73.98513&dest_name=Times%20Square&orig_lat=40.735845&orig_lon=-73.990512&orig_name=Union%20Square&auto_run=true&date=2019-04-01T18%3A30%3A00%2B02%3A00&partner_id=YOUR_APP_NAME'
 * @link https://moovit.com/developers/deeplinking/
 */
export function directions(payload: MoovitDirectionsPayload) {
  const { dest_lat, dest_lon, dest_name, orig_lat, orig_lon, orig_name, auto_run, partner_id, date } = payload

  return moovitUrl('directions', {
    dest_lat,
    dest_lon,
    dest_name,
    orig_lat,
    orig_lon,
    orig_name,
    auto_run,
    date,
    partner_id,
  })
}
