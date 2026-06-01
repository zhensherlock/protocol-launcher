import { type TadamXCallbackPayload, tadamUrl, tadamXCallbackUrl } from './shared'

/**
 * Start break timer payload definition.
 */
export type TadamStartBreakPayload = TadamXCallbackPayload & {
  /**
   * Timer duration using Tadam's app time format, such as `5`, `10min`, or `2h5min20sec`.
   */
  time?: string

  /**
   * Open the break window in collapsed mode. Tadam documents `true` and `1` as supported URL values.
   */
  mini?: true | 1
}

export function tadamStartBreakParams(payload: TadamStartBreakPayload = {}) {
  const { time, mini } = payload

  return {
    ...(time !== undefined ? { time } : {}),
    ...(mini !== undefined ? { mini } : {}),
  }
}

/**
 * Start a Tadam break timer, or open the "Time for a break" UI when no time is supplied.
 *
 * @param payload Start break timer payload.
 * @returns Tadam break URL.
 * @example
 * startBreak({ time: '5' })
 * // => 'tadam://break?time=5'
 * @example
 * startBreak({ time: '10min', mini: true })
 * // => 'tadam://break?time=10min&mini=true'
 * @example
 * startBreak({ time: '5', xSuccess: 'shortcuts://callback' })
 * // => 'tadam://x-callback-url/break?time=5&x-success=shortcuts%3A%2F%2Fcallback'
 * @link https://tadamapp.com/url-schemes/
 */
export function startBreak(payload: TadamStartBreakPayload = {}) {
  const params = tadamStartBreakParams(payload)

  return payload.xSuccess !== undefined ? tadamXCallbackUrl('break', payload, params) : tadamUrl('break', params)
}
