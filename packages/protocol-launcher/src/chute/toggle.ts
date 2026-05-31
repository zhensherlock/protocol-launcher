import type { ChuteActionPayload } from './shared'
import { chuteActionUrl } from './shared'

/**
 * Start or stop Chute with the selected configuration.
 *
 * @param payload Chute toggle payload.
 * @returns Chute toggle URL.
 * @example
 * toggle()
 * // => 'chute:///toggle'
 *
 * @example
 * toggle({ autoclose: true })
 * // => 'chute:///toggle?autoclose=true'
 * @link https://manual.chute.life/other/url-scheme.html
 */
export function toggle(payload: ChuteActionPayload = {}) {
  return chuteActionUrl('toggle', payload)
}
