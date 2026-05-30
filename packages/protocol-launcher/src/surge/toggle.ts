import type { SurgeActionPayload } from './shared'
import { surgeActionUrl } from './shared'

/**
 * Start or stop Surge with the selected configuration.
 *
 * @param payload Surge toggle payload.
 * @returns Surge toggle URL.
 * @example
 * toggle()
 * // => 'surge:///toggle'
 *
 * @example
 * toggle({ autoclose: true })
 * // => 'surge:///toggle?autoclose=true'
 * @link https://manual.nssurge.com/others/url-scheme.html
 */
export function toggle(payload: SurgeActionPayload = {}) {
  return surgeActionUrl('toggle', payload)
}
