import { organicMapsUrl } from './shared'
import type { OrganicMapsCrosshair } from './types'

export type CrosshairPayload = OrganicMapsCrosshair

/**
 * Open the Organic Maps position chooser API.
 *
 * @param payload Crosshair payload.
 * @returns Organic Maps crosshair URL.
 * @example
 * crosshair({ cll: '47.3813,8.5889', appname: 'Google Maps' })
 * // => 'om://crosshair?cll=47.3813,8.5889&appname=Google%20Maps'
 * @link https://omaps.app/api
 */
export function crosshair(payload: CrosshairPayload) {
  const { cll, appname, linkType = 'scheme' } = payload

  return organicMapsUrl(
    'crosshair',
    [
      ['cll', cll],
      ['appname', appname],
    ],
    linkType,
  )
}
