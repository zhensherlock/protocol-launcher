import { sharedParams, wazeUrl } from './shared'
import type { WazeSearch } from './types'

/**
 * Search for an address or place in Waze.
 *
 * @param payload Search payload.
 * @returns Waze search deep link.
 * @example
 * search({ q: '66 Acacia Avenue' })
 * // => 'https://waze.com/ul?q=66%20Acacia%20Avenue'
 * @link https://developers.google.com/waze/deeplinks#search
 */
export function search(payload: WazeSearch) {
  const { q, protocol } = payload

  return wazeUrl(
    {
      q,
      ...sharedParams(payload),
    },
    protocol,
  )
}
