import type { TadamXCallbackPayload } from './shared'
import { tadamXCallbackUrl } from './shared'

/**
 * Open Tadam URL scheme documentation through the documented x-callback-url prefix.
 *
 * @param payload Tadam x-callback-url payload.
 * @returns Tadam x-callback-url help URL.
 * @example
 * xCallbackHelp()
 * // => 'tadam://x-callback-url/help'
 * @link https://tadamapp.com/url-schemes/
 */
export function xCallbackHelp(payload: TadamXCallbackPayload = {}) {
  return tadamXCallbackUrl('help', payload)
}
