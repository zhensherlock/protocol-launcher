import type { ChuteActionPayload } from './shared'
import { chuteActionUrl } from './shared'

/**
 * Start Chute with the selected configuration.
 *
 * @param payload Chute start payload.
 * @returns Chute start URL.
 * @example
 * start()
 * // => 'chute:///start'
 *
 * @example
 * start({ autoclose: true })
 * // => 'chute:///start?autoclose=true'
 * @link https://manual.chute.life/other/url-scheme.html
 */
export function start(payload: ChuteActionPayload = {}) {
  return chuteActionUrl('start', payload)
}
