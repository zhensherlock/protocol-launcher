import type { ChuteActionPayload } from './shared'
import { chuteActionUrl } from './shared'

/**
 * Stop the current Chute session.
 *
 * @param payload Chute stop payload.
 * @returns Chute stop URL.
 * @example
 * stop()
 * // => 'chute:///stop'
 *
 * @example
 * stop({ autoclose: true })
 * // => 'chute:///stop?autoclose=true'
 * @link https://manual.chute.life/other/url-scheme.html
 */
export function stop(payload: ChuteActionPayload = {}) {
  return chuteActionUrl('stop', payload)
}
