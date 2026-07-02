import { inRouteUrl } from './shared'
import type { InRoutePinPayload } from './types'

export type ViewPayload = InRoutePinPayload

/**
 * View an inRoute map pin at the specified coordinates.
 *
 * @param payload inRoute view payload.
 * @returns inRoute view URL.
 * @example
 * view({ geo: '48.8582,2.2946' })
 * // => 'inroute://view?geo=48.8582,2.2946'
 * @link https://inroute.com/url-scheme/
 */
export function view(payload: ViewPayload) {
  const { geo, backUrl } = payload

  return inRouteUrl('view', [
    ['geo', geo],
    ['back_url', backUrl],
  ])
}
