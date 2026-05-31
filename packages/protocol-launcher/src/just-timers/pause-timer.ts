import type { JustTimersTimerTargetPayload } from './shared'
import { justTimersTimerActionUrl } from './shared'

/**
 * Pause one timer by name, or pause all timers.
 *
 * @param payload Timer target payload.
 * @returns Just Timers pause timer URL.
 * @example
 * pauseTimer({ name: 'Tea' })
 * // => 'justtimers://x-callback-url/pause/?name=Tea'
 * @example
 * pauseTimer({ all: true })
 * // => 'justtimers://x-callback-url/pause/all'
 * @link https://justtimers.app/help/shortcuts/
 */
export function pauseTimer(payload: JustTimersTimerTargetPayload) {
  return justTimersTimerActionUrl('pause', payload)
}
