import { type BunchCallbacks, bunchUrl } from './shared'

/**
 * Preferences method payload definition.
 */
export type Prefs = BunchCallbacks

/**
 * Display the Bunch Preferences dialog.
 *
 * @param payload Preferences method payload.
 * @returns Bunch prefs URL.
 * @example
 * prefs()
 * // => 'x-bunch://prefs'
 * @link https://bunchapp.co/docs/integration/url-handler/
 */
export function prefs(payload: Prefs = {}) {
  return bunchUrl('prefs', {}, payload)
}
