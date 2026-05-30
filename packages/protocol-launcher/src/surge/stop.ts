import type { SurgeActionPayload } from './shared'
import { surgeActionUrl } from './shared'

/**
 * Stop the current Surge session.
 *
 * @param payload Surge stop payload.
 * @returns Surge stop URL.
 * @example
 * stop()
 * // => 'surge:///stop'
 *
 * @example
 * stop({ autoclose: true })
 * // => 'surge:///stop?autoclose=true'
 * @link https://manual.nssurge.com/others/url-scheme.html
 */
export function stop(payload: SurgeActionPayload = {}) {
  return surgeActionUrl('stop', payload)
}
