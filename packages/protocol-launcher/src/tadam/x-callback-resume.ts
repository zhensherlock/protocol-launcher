import type { TadamXCallbackPayload } from './shared'
import { tadamXCallbackUrl } from './shared'

/**
 * Resume the current Tadam timer through the documented x-callback-url prefix.
 *
 * @param payload Tadam x-callback-url payload.
 * @returns Tadam x-callback-url resume URL.
 * @example
 * xCallbackResume()
 * // => 'tadam://x-callback-url/resume'
 * @link https://tadamapp.com/url-schemes/
 */
export function xCallbackResume(payload: TadamXCallbackPayload = {}) {
  return tadamXCallbackUrl('resume', payload)
}
