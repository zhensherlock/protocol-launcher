import { type InRouteQueryEntry, inRouteLocationPart, inRouteUrl } from './shared'
import type { InRouteSearchLocation, InRouteSearchPayload } from './types'

export type SearchPayload = InRouteSearchPayload

/**
 * Send a list of search-based locations to inRoute.
 *
 * @param payload inRoute search import payload.
 * @returns inRoute searches URL.
 * @example
 * search({
 *   optimize: true,
 *   locations: [
 *     { name: 'Lazy K’s', search: 'Lazy K’, Carnation WA 98014' },
 *     { name: 'Greek Food', search: '15410 Main St NE, Duvall WA 98019' },
 *   ],
 * })
 * // => 'inroute://searches?action=opt&loc=Lazy%20K’s/Lazy%20K’,%20Carnation%20WA%2098014&loc=Greek%20Food/15410%20Main%20St%20NE,%20Duvall%20WA%2098019'
 * @link https://inroute.com/url-scheme/
 */
export function search(payload: SearchPayload) {
  const { locations, optimize, backUrl } = payload
  const locationEntries = locations.map<InRouteQueryEntry>(location => ['loc', searchLocation(location), { raw: true }])

  return inRouteUrl('searches', [['action', optimize ? 'opt' : undefined], ...locationEntries, ['back_url', backUrl]])
}

function searchLocation(location: InRouteSearchLocation) {
  return [inRouteLocationPart(location.name), inRouteLocationPart(location.search)].join('/')
}
