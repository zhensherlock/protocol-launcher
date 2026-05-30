import type { BusyCalCrashReportingPayload } from './shared'

/**
 * Set BusyCal automatic crash reporting on macOS.
 *
 * @param payload BusyCal crash reporting payload.
 * @returns BusyCal macOS crash reporting URL.
 * @example
 * setCrashReporting({ option: 1 })
 * // => 'busycalsetting://crashreporting/1'
 * @link https://www.busymac.com/docs/busycal/70621-url-handler/
 */
export function setCrashReporting(payload: BusyCalCrashReportingPayload) {
  const { option } = payload

  return `busycalsetting://crashreporting/${option}`
}
