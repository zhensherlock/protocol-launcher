import { organicMapsListParam, organicMapsUrl } from './shared'
import type { OrganicMapsNavigate } from './types'

export type NavigatePayload = OrganicMapsNavigate

/**
 * Start Organic Maps v2 navigation for a multi-stop route.
 *
 * @param payload Navigation payload.
 * @returns Organic Maps `v2/nav` URL.
 * @example
 * navigate({
 *   origin: 'currentLocation',
 *   destination: '52.5163,13.3777',
 *   destinationName: 'Customer',
 *   waypoints: ['52.5304,13.3850', '52.5450,13.3920'],
 *   waypointCallbacks: ['delivery://stop/1', 'delivery://stop/2'],
 *   callback: 'delivery://route/complete',
 *   mode: 'drive',
 * })
 * // => 'om://v2/nav?origin=currentLocation&destination=52.5163,13.3777&destination_name=Customer&waypoints=52.5304,13.3850|52.5450,13.3920&waypoint_callbacks=delivery%3A%2F%2Fstop%2F1|delivery%3A%2F%2Fstop%2F2&callback=delivery%3A%2F%2Froute%2Fcomplete&mode=drive'
 * @link https://omaps.app/api
 */
export function navigate(payload: NavigatePayload) {
  const {
    origin,
    destination,
    destinationName,
    waypoints,
    waypointCallbacks,
    callback,
    mode,
    linkType = 'scheme',
  } = payload

  return organicMapsUrl(
    'v2/nav',
    [
      ['origin', origin],
      ['destination', destination],
      ['destination_name', destinationName],
      ['waypoints', organicMapsListParam(waypoints)],
      ['waypoint_callbacks', organicMapsListParam(waypointCallbacks)],
      ['callback', callback],
      ['mode', mode],
    ],
    linkType,
  )
}
