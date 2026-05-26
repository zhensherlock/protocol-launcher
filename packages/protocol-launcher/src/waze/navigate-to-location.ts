import { sharedParams, wazeUrl } from './shared'
import type { WazeNavigateToLocation } from './types'

/**
 * Navigate to a specific latitude and longitude in Waze.
 *
 * @param payload Location navigation payload.
 * @returns Waze navigation deep link.
 * @example
 * navigateToLocation({
 *   ll: '40.75889500,-73.98513100',
 *   zoom: 17,
 * })
 * // => 'https://waze.com/ul?ll=40.75889500%2C-73.98513100&navigate=yes&zoom=17'
 * @link https://developers.google.com/waze/deeplinks#navigate_to_location
 */
export function navigateToLocation(payload: WazeNavigateToLocation) {
  const { ll, zoom, protocol } = payload

  return wazeUrl(
    {
      ll,
      navigate: 'yes',
      zoom,
      ...sharedParams(payload),
    },
    protocol,
  )
}
