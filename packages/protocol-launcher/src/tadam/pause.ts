import type { TadamXCallbackPayload } from './shared'
import { tadamUrl, tadamXCallbackUrl } from './shared'

/**
 * Pause the current Tadam timer.
 *
 * @param payload Tadam x-callback-url payload.
 * @returns Tadam pause URL.
 * @example
 * pause()
 * // => 'tadam://pause'
 * @example
 * pause({ xSuccess: 'shortcuts://callback' })
 * // => 'tadam://x-callback-url/pause?x-success=shortcuts%3A%2F%2Fcallback'
 * @link https://tadamapp.com/url-schemes/
 */
export function pause(payload: TadamXCallbackPayload = {}) {
  return payload.xSuccess !== undefined ? tadamXCallbackUrl('pause', payload) : tadamUrl('pause')
}
