import { timingTrackerUrl } from './shared'

/**
 * Stop timer command payload definition.
 */
export type TimingStopTimerPayload = {
  /**
   * Suppress the notification about the timer having been stopped.
   */
  hideNotification?: boolean
}

/**
 * Stop the currently running timer in the Timing tracker app, if available.
 *
 * @param payload Timing stop timer payload.
 * @returns Timing stop timer URL.
 * @example
 * stopTimer({ hideNotification: true })
 * // => 'timing2helper://stopTimer?hideNotification=true'
 * @link https://timingapp.com/help/url-schemes
 */
export function stopTimer(payload: TimingStopTimerPayload = {}) {
  const { hideNotification } = payload

  return timingTrackerUrl('stopTimer', {
    hideNotification,
  })
}
