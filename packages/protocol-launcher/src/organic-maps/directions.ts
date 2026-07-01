import { organicMapsListParam, organicMapsUrl } from './shared'
import type { OrganicMapsDirections } from './types'

export type DirectionsPayload = OrganicMapsDirections

/**
 * Build a v2 Organic Maps multi-stop route.
 *
 * @param payload Directions payload.
 * @returns Organic Maps `v2/dir` URL.
 * @example
 * directions({
 *   origin: '52.5200,13.4050',
 *   originName: 'Warehouse Berlin',
 *   destination: '52.5163,13.3777',
 *   destinationName: 'Customer',
 *   waypoints: ['52.5304,13.3850', '52.5450,13.3920'],
 *   waypointNames: ['Pickup 1', 'Pickup 2'],
 *   mode: 'drive',
 * })
 * // => 'om://v2/dir?origin=52.5200,13.4050&origin_name=Warehouse%20Berlin&destination=52.5163,13.3777&destination_name=Customer&waypoints=52.5304,13.3850|52.5450,13.3920&waypoint_names=Pickup%201|Pickup%202&mode=drive'
 * @link https://omaps.app/api
 */
export function directions(payload: DirectionsPayload) {
  const {
    origin,
    originName,
    destination,
    destinationName,
    waypoints,
    waypointNames,
    mode,
    linkType = 'scheme',
  } = payload

  return organicMapsUrl(
    'v2/dir',
    [
      ['origin', origin],
      ['origin_name', originName],
      ['destination', destination],
      ['destination_name', destinationName],
      ['waypoints', organicMapsListParam(waypoints)],
      ['waypoint_names', organicMapsListParam(waypointNames)],
      ['mode', mode],
    ],
    linkType,
  )
}
