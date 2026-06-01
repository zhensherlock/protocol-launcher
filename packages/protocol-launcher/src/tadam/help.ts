import type { TadamXCallbackPayload } from './shared'
import { tadamUrl, tadamXCallbackUrl } from './shared'

/**
 * Open Tadam URL scheme documentation in the default browser.
 *
 * @param payload Tadam x-callback-url payload.
 * @returns Tadam help URL.
 * @example
 * help()
 * // => 'tadam://help'
 * @link https://tadamapp.com/url-schemes/
 */
export function help(payload: TadamXCallbackPayload = {}) {
  return payload.xSuccess !== undefined ? tadamXCallbackUrl('help', payload) : tadamUrl('help')
}
