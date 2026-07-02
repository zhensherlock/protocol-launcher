import { inRouteUrl } from './shared'
import type { InRoutePinPayload } from './types'

export type RoutePayload = InRoutePinPayload

/**
 * Navigate to an inRoute map pin at the specified coordinates.
 *
 * @param payload inRoute route payload.
 * @returns inRoute route URL.
 * @example
 * route({ geo: '48.8582,2.2946' })
 * // => 'inroute://route?geo=48.8582,2.2946'
 * @link https://inroute.com/url-scheme/
 */
export function route(payload: RoutePayload) {
  const { geo, backUrl } = payload

  return inRouteUrl('route', [
    ['geo', geo],
    ['back_url', backUrl],
  ])
}
