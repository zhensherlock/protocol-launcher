import type { BusyCalLaunchIosViewPayload } from './shared'

/**
 * Open BusyCal on iOS and switch to a documented view.
 *
 * @param payload BusyCal iOS launch view payload.
 * @returns BusyCal iOS launch URL.
 * @example
 * launchIosView({ view: 'day' })
 * // => 'busycal://launch/day'
 * @link https://www.busymac.com/docs/busycalios/139998-url-handler/
 */
export function launchIosView(payload: BusyCalLaunchIosViewPayload) {
  const { view } = payload

  return `busycal://launch/${view}`
}
