import { sharedParams, wazeUrl } from './shared'
import type { WazeShowOnMap } from './types'

/**
 * Show the Waze map at a documented magnification level.
 *
 * @param payload Map payload.
 * @returns Waze map deep link.
 * @example
 * showOnMap({ z: 8 })
 * // => 'https://waze.com/ul?z=8'
 * @example
 * showOnMap({ ll: '45.6906304,-120.810983', z: 10 })
 * // => 'https://waze.com/ul?ll=45.6906304%2C-120.810983&z=10'
 * @link https://developers.google.com/waze/deeplinks#show_on_map
 */
export function showOnMap(payload: WazeShowOnMap) {
  const { ll, z, protocol } = payload

  return wazeUrl(
    {
      ll,
      z,
      ...sharedParams(payload),
    },
    protocol,
  )
}
