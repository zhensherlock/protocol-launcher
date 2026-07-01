import type { OrganicMapsAndroidIntent } from './types'

export type AndroidIntentPayload = OrganicMapsAndroidIntent

/**
 * Build the documented Android intent URI for Organic Maps.
 *
 * @param payload Android intent payload.
 * @returns Android intent URI.
 * @example
 * androidIntent()
 * // => 'intent://#Intent;package=app.organicmaps;scheme=om;end;'
 * @link https://omaps.app/api
 */
export function androidIntent(payload: AndroidIntentPayload = {}) {
  const { packageName = 'app.organicmaps' } = payload

  return `intent://#Intent;package=${packageName};scheme=om;end;`
}
