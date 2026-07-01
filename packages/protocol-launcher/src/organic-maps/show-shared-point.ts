import { organicMapsPath, organicMapsUrl } from './shared'
import type { OrganicMapsShowSharedPoint } from './types'

export type ShowSharedPointPayload = OrganicMapsShowSharedPoint

/**
 * Show an Organic Maps shared point by its short-code path, with an optional title.
 *
 * @param payload Shared-point payload.
 * @returns Organic Maps shared-point URL.
 * @example
 * showSharedPoint({ code: 'o4B4pYZsRs', title: 'Zoo_Zürich' })
 * // => 'om://o4B4pYZsRs/Zoo_Zürich'
 * @link https://omaps.app/api
 */
export function showSharedPoint(payload: ShowSharedPointPayload) {
  const { code, title, trailingSlash, linkType = 'scheme' } = payload
  const path = organicMapsPath(title === undefined ? [code] : [code, title])
  const suffix = title === undefined && trailingSlash ? '/' : ''

  return organicMapsUrl(`${path}${suffix}`, [], linkType)
}
