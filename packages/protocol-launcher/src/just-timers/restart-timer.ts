import type { JustTimersTimerTargetPayload } from './shared'
import { justTimersTimerActionUrl } from './shared'

/**
 * Restart one timer by name, or restart all timers.
 *
 * @param payload Timer target payload.
 * @returns Just Timers restart timer URL.
 * @example
 * restartTimer({ name: 'Tea' })
 * // => 'justtimers://x-callback-url/restart/?name=Tea'
 * @example
 * restartTimer({ all: true })
 * // => 'justtimers://x-callback-url/restart/all'
 * @link https://justtimers.app/help/shortcuts/
 */
export function restartTimer(payload: JustTimersTimerTargetPayload) {
  return justTimersTimerActionUrl('restart', payload)
}
