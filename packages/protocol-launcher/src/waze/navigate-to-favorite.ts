import { sharedParams, wazeUrl } from './shared'
import type { WazeNavigateToFavorite } from './types'

/**
 * Navigate to a saved Waze favorite.
 *
 * @param payload Favorite navigation payload.
 * @returns Waze favorite navigation deep link.
 * @example
 * navigateToFavorite({ favorite: 'work' })
 * // => 'https://waze.com/ul?favorite=work&navigate=yes'
 * @link https://developers.google.com/waze/deeplinks#navigate_to_favorite
 */
export function navigateToFavorite(payload: WazeNavigateToFavorite) {
  const { favorite, protocol } = payload

  return wazeUrl(
    {
      favorite,
      navigate: 'yes',
      ...sharedParams(payload),
    },
    protocol,
  )
}
