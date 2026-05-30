import type { BusyCalLogLevelPayload } from './shared'

/**
 * Set BusyCal's logging level on macOS.
 *
 * @param payload BusyCal logging level payload.
 * @returns BusyCal macOS logging level URL.
 * @example
 * setLogLevel({ level: 3 })
 * // => 'busycalsetting://loglevel/3'
 * @link https://www.busymac.com/docs/busycal/70621-url-handler/
 */
export function setLogLevel(payload: BusyCalLogLevelPayload) {
  const { level } = payload

  return `busycalsetting://loglevel/${level}`
}
