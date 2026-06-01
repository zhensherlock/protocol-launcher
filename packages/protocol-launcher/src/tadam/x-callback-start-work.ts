import { tadamXCallbackUrl } from './shared'
import { type TadamStartWorkPayload, tadamStartWorkParams } from './start-work'

/**
 * Start a Tadam work timer through the documented x-callback-url prefix.
 *
 * @param payload Start work timer payload.
 * @returns Tadam x-callback-url start URL.
 * @example
 * xCallbackStartWork({ time: '10min' })
 * // => 'tadam://x-callback-url/start?time=10min'
 * @link https://tadamapp.com/url-schemes/
 */
export function xCallbackStartWork(payload: TadamStartWorkPayload = {}) {
  return tadamXCallbackUrl('start', payload, tadamStartWorkParams(payload))
}
