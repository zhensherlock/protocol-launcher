import type { TadamXCallbackPayload } from './shared'
import { tadamUrl, tadamXCallbackUrl } from './shared'

/**
 * Resume the current Tadam timer.
 *
 * @param payload Tadam x-callback-url payload.
 * @returns Tadam resume URL.
 * @example
 * resume()
 * // => 'tadam://resume'
 * @example
 * resume({ xSuccess: 'shortcuts://callback' })
 * // => 'tadam://x-callback-url/resume?x-success=shortcuts%3A%2F%2Fcallback'
 * @link https://tadamapp.com/url-schemes/
 */
export function resume(payload: TadamXCallbackPayload = {}) {
  return payload.xSuccess !== undefined ? tadamXCallbackUrl('resume', payload) : tadamUrl('resume')
}
