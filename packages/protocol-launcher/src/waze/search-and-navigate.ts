import { sharedParams, wazeUrl } from './shared'
import type { WazeSearchAndNavigate } from './types'

/**
 * Search for an address and then navigate to it in Waze.
 *
 * @param payload Search and navigate payload.
 * @returns Waze search and navigation deep link.
 * @example
 * searchAndNavigate({
 *   q: '66 Acacia Avenue',
 *   ll: '45.6906304,-120.810983',
 * })
 * // => 'https://waze.com/ul?q=66%20Acacia%20Avenue&ll=45.6906304%2C-120.810983&navigate=yes'
 * @link https://developers.google.com/waze/deeplinks#combine_parameters
 */
export function searchAndNavigate(payload: WazeSearchAndNavigate) {
  const { q, ll, protocol } = payload

  return wazeUrl(
    {
      q,
      ll,
      navigate: 'yes',
      ...sharedParams(payload),
    },
    protocol,
  )
}
