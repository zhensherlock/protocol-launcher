import type { CardhopPreferencesPath } from './shared'
import { cardhopUrl } from './shared'

/**
 * Preferences endpoint payload definition.
 */
type Preferences = {
  /**
   * Preferences path to show.
   */
  path: CardhopPreferencesPath
}

/**
 * Open Cardhop and show a supported preferences path.
 *
 * @param payload Preferences endpoint payload.
 * @returns Cardhop preferences URL.
 * @example
 * preferences({ path: 'notifications' })
 * // => 'x-cardhop://preferences?path=notifications'
 * @link https://flexibits.com/cardhop-ios/help/integration-with-other-apps
 */
export function preferences(payload: Preferences) {
  const { path } = payload

  return cardhopUrl('preferences', { path })
}
