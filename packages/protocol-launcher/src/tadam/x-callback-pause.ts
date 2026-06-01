import type { TadamXCallbackPayload } from './shared'
import { tadamXCallbackUrl } from './shared'

/**
 * Pause the current Tadam timer through the documented x-callback-url prefix.
 *
 * @param payload Tadam x-callback-url payload.
 * @returns Tadam x-callback-url pause URL.
 * @example
 * xCallbackPause()
 * // => 'tadam://x-callback-url/pause'
 * @link https://tadamapp.com/url-schemes/
 */
export function xCallbackPause(payload: TadamXCallbackPayload = {}) {
  return tadamXCallbackUrl('pause', payload)
}
