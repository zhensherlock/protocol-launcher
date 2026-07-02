import { type InRouteQueryEntry, inRouteLocationPart, inRouteUrl } from './shared'
import type { InRouteCoordinateLocation, InRouteCoordinatesPayload } from './types'

export type CoordinatesPayload = InRouteCoordinatesPayload

/**
 * Send a list of coordinate locations to inRoute.
 *
 * @param payload inRoute coordinate import payload.
 * @returns inRoute coordinates URL.
 * @example
 * coordinates({
 *   optimize: true,
 *   locations: [
 *     { name: 'Lazy K’s', latitude: 47.648434, longitude: -121.914307 },
 *     { name: 'Greek Food', latitude: 47.739555, longitude: -121.985924 },
 *   ],
 * })
 * // => 'inroute://coordinates?action=opt&loc=Lazy%20K’s/47.648434/-121.914307&loc=Greek%20Food/47.739555/-121.985924'
 * @link https://inroute.com/url-scheme/
 */
export function coordinates(payload: CoordinatesPayload) {
  const { locations, optimize, backUrl } = payload
  const locationEntries = locations.map<InRouteQueryEntry>(location => [
    'loc',
    coordinateLocation(location),
    { raw: true },
  ])

  return inRouteUrl('coordinates', [
    ['action', optimize ? 'opt' : undefined],
    ...locationEntries,
    ['back_url', backUrl],
  ])
}

function coordinateLocation(location: InRouteCoordinateLocation) {
  return [
    inRouteLocationPart(location.name),
    inRouteLocationPart(location.latitude),
    inRouteLocationPart(location.longitude),
  ].join('/')
}
