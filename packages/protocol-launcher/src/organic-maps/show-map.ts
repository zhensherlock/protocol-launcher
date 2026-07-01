import { type OrganicMapsQueryEntry, organicMapsUrl } from './shared'
import type { OrganicMapsShowMap } from './types'

export type ShowMapPayload = OrganicMapsShowMap

/**
 * Show one or more points with optional titles on the Organic Maps map.
 *
 * @param payload Multi-point map payload.
 * @returns Organic Maps `map?v=1` URL.
 * @example
 * showMap({
 *   points: [
 *     { ll: '22.17319,-159.65687', title: 'Kalalau Camping' },
 *     { ll: '22.17168,-159.66096', title: 'Dream Beach' },
 *     { ll: '22.17182,-159.65776' },
 *   ],
 * })
 * // => 'om://map?v=1&ll=22.17319,-159.65687&n=Kalalau%20Camping&ll=22.17168,-159.66096&n=Dream%20Beach&ll=22.17182,-159.65776'
 * @link https://omaps.app/api
 */
export function showMap(payload: ShowMapPayload) {
  const { points, linkType = 'scheme' } = payload
  const pointEntries = points.flatMap<OrganicMapsQueryEntry>(point => [
    ['ll', point.ll],
    ...(point.title === undefined ? [] : ([['n', point.title]] as const)),
  ])

  return organicMapsUrl('map', [['v', 1], ...pointEntries], linkType)
}
