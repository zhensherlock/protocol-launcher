import { type TadamXCallbackPayload, tadamUrl, tadamXCallbackUrl } from './shared'

/**
 * Start work timer payload definition.
 */
export type TadamStartWorkPayload = TadamXCallbackPayload & {
  /**
   * Timer duration using Tadam's app time format, such as `10min`, `5:30`, or `1h`.
   */
  time?: string

  /**
   * Open the timer UI. Tadam documents `true` and `1` as supported URL values.
   */
  open?: true | 1
}

export function tadamStartWorkParams(payload: TadamStartWorkPayload = {}) {
  const { time, open } = payload

  return {
    ...(time !== undefined ? { time } : {}),
    ...(open !== undefined ? { open } : {}),
  }
}

/**
 * Start a Tadam work timer, or open the "Start work" UI when no time is supplied.
 *
 * @param payload Start work timer payload.
 * @returns Tadam start URL.
 * @example
 * startWork({ time: '10min' })
 * // => 'tadam://start?time=10min'
 * @example
 * startWork({ time: '5:30', open: true })
 * // => 'tadam://start?time=5:30&open=true'
 * @example
 * startWork({ time: '10min', xSuccess: 'shortcuts://callback' })
 * // => 'tadam://x-callback-url/start?time=10min&x-success=shortcuts%3A%2F%2Fcallback'
 * @link https://tadamapp.com/url-schemes/
 */
export function startWork(payload: TadamStartWorkPayload = {}) {
  const params = tadamStartWorkParams(payload)

  return payload.xSuccess !== undefined ? tadamXCallbackUrl('start', payload, params) : tadamUrl('start', params)
}
