import type { ChuteXCallbackPayload } from './shared'
import { chuteXCallbackUrl } from './shared'

/**
 * Start Chute through its x-callback-url action.
 *
 * @param payload Chute x-callback-url payload.
 * @returns Chute x-callback-url start URL.
 * @example
 * xCallbackStart()
 * // => 'chute://x-callback-url/start'
 *
 * @example
 * xCallbackStart({ xSuccess: 'sms://', xError: 'tel://' })
 * // => 'chute://x-callback-url/start?x-success=sms%3A%2F%2F&x-error=tel%3A%2F%2F'
 * @link https://manual.chute.life/other/url-scheme.html
 */
export function xCallbackStart(payload: ChuteXCallbackPayload = {}) {
  return chuteXCallbackUrl('start', payload)
}
