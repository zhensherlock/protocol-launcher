import { tadamXCallbackUrl } from './shared'
import { type TadamStartBreakPayload, tadamStartBreakParams } from './start-break'

/**
 * Start a Tadam break timer through the documented x-callback-url prefix.
 *
 * @param payload Start break timer payload.
 * @returns Tadam x-callback-url break URL.
 * @example
 * xCallbackStartBreak({ time: '5' })
 * // => 'tadam://x-callback-url/break?time=5'
 * @link https://tadamapp.com/url-schemes/
 */
export function xCallbackStartBreak(payload: TadamStartBreakPayload = {}) {
  return tadamXCallbackUrl('break', payload, tadamStartBreakParams(payload))
}
