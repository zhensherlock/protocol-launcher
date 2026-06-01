import type { TadamXCallbackPayload } from './shared'
import { tadamXCallbackUrl } from './shared'

/**
 * Stop the current Tadam timer through the documented x-callback-url prefix.
 *
 * @param payload Tadam x-callback-url payload.
 * @returns Tadam x-callback-url stop URL.
 * @example
 * xCallbackStop()
 * // => 'tadam://x-callback-url/stop'
 * @link https://tadamapp.com/url-schemes/
 */
export function xCallbackStop(payload: TadamXCallbackPayload = {}) {
  return tadamXCallbackUrl('stop', payload)
}
