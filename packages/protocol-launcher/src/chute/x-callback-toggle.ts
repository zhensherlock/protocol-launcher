import type { ChuteXCallbackPayload } from './shared'
import { chuteXCallbackUrl } from './shared'

/**
 * Toggle Chute through its x-callback-url action.
 *
 * @param payload Chute x-callback-url payload.
 * @returns Chute x-callback-url toggle URL.
 * @example
 * xCallbackToggle()
 * // => 'chute://x-callback-url/toggle'
 *
 * @example
 * xCallbackToggle({ xSuccess: 'sms://', xError: 'tel://' })
 * // => 'chute://x-callback-url/toggle?x-success=sms%3A%2F%2F&x-error=tel%3A%2F%2F'
 * @link https://manual.chute.life/other/url-scheme.html
 */
export function xCallbackToggle(payload: ChuteXCallbackPayload = {}) {
  return chuteXCallbackUrl('toggle', payload)
}
