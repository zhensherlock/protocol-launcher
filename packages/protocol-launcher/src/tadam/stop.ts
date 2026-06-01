import type { TadamXCallbackPayload } from './shared'
import { tadamUrl, tadamXCallbackUrl } from './shared'

/**
 * Stop the current Tadam timer.
 *
 * @param payload Tadam x-callback-url payload.
 * @returns Tadam stop URL.
 * @example
 * stop()
 * // => 'tadam://stop'
 * @example
 * stop({ xSuccess: 'shortcuts://callback' })
 * // => 'tadam://x-callback-url/stop?x-success=shortcuts%3A%2F%2Fcallback'
 * @link https://tadamapp.com/url-schemes/
 */
export function stop(payload: TadamXCallbackPayload = {}) {
  return payload.xSuccess !== undefined ? tadamXCallbackUrl('stop', payload) : tadamUrl('stop')
}
