import { organicMapsUrl } from './shared'
import type { OrganicMapsRoute } from './types'

export type RoutePayload = OrganicMapsRoute

/**
 * Build a v1 Organic Maps route.
 *
 * @param payload Route payload.
 * @returns Organic Maps `route?v=1` URL.
 * @example
 * route({
 *   start: { ll: '50.183933,8.942871', address: 'Start Point' },
 *   destination: { ll: '49.998912,8.278198', address: 'EndPoint' },
 *   type: 'vehicle',
 * })
 * // => 'om://route?v=1&sll=50.183933,8.942871&saddr=Start%20Point&dll=49.998912,8.278198&daddr=EndPoint&type=vehicle'
 * @link https://omaps.app/api
 */
export function route(payload: RoutePayload) {
  const { start, destination, type, linkType = 'scheme' } = payload

  return organicMapsUrl(
    'route',
    [
      ['v', 1],
      ['sll', start.ll],
      ['saddr', start.address],
      ['dll', destination.ll],
      ['daddr', destination.address],
      ['type', type],
    ],
    linkType,
  )
}
