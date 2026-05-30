import type { SurgeActionPayload } from './shared'
import { surgeActionUrl } from './shared'

/**
 * Start Surge with the selected configuration.
 *
 * @param payload Surge start payload.
 * @returns Surge start URL.
 * @example
 * start()
 * // => 'surge:///start'
 *
 * @example
 * start({ autoclose: true })
 * // => 'surge:///start?autoclose=true'
 * @link https://manual.nssurge.com/others/url-scheme.html
 */
export function start(payload: SurgeActionPayload = {}) {
  return surgeActionUrl('start', payload)
}
