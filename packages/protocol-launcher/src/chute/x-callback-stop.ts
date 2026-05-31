import type { ChuteXCallbackPayload } from './shared'
import { chuteXCallbackUrl } from './shared'

/**
 * Stop Chute through its x-callback-url action.
 *
 * @param payload Chute x-callback-url payload.
 * @returns Chute x-callback-url stop URL.
 * @example
 * xCallbackStop()
 * // => 'chute://x-callback-url/stop'
 *
 * @example
 * xCallbackStop({ xSuccess: 'sms://', xError: 'tel://' })
 * // => 'chute://x-callback-url/stop?x-success=sms%3A%2F%2F&x-error=tel%3A%2F%2F'
 * @link https://manual.chute.life/other/url-scheme.html
 */
export function xCallbackStop(payload: ChuteXCallbackPayload = {}) {
  return chuteXCallbackUrl('stop', payload)
}
