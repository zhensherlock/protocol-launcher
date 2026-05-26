import { type BunchCallbacks, bunchUrl } from './shared'

/**
 * Refresh method payload definition.
 */
export type Refresh = BunchCallbacks

/**
 * Force Bunch to reload Bunch files.
 *
 * @param payload Refresh method payload.
 * @returns Bunch refresh URL.
 * @example
 * refresh()
 * // => 'x-bunch://refresh'
 * @link https://bunchapp.co/docs/integration/url-handler/
 */
export function refresh(payload: Refresh = {}) {
  return bunchUrl('refresh', {}, payload)
}
