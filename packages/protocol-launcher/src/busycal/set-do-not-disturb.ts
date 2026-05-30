import type { BusyCalDoNotDisturbPayload } from './shared'

/**
 * Turn BusyCal do-not-disturb on or off on macOS.
 *
 * @param payload BusyCal do-not-disturb payload.
 * @returns BusyCal macOS do-not-disturb URL.
 * @example
 * setDoNotDisturb({ minutes: 15 })
 * // => 'busycaldnd://15'
 * @example
 * setDoNotDisturb({ minutes: 0 })
 * // => 'busycaldnd://0'
 * @link https://www.busymac.com/docs/busycal/70621-url-handler/
 */
export function setDoNotDisturb(payload: BusyCalDoNotDisturbPayload) {
  const { minutes } = payload

  return `busycaldnd://${minutes}`
}
