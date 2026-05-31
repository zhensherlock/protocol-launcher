import type { JustTimersTimerTargetPayload } from './shared'
import { justTimersTimerActionUrl } from './shared'

/**
 * Delete one timer by name, or delete all timers.
 *
 * @param payload Timer target payload.
 * @returns Just Timers delete timer URL.
 * @example
 * deleteTimer({ name: 'Tea' })
 * // => 'justtimers://x-callback-url/delete/?name=Tea'
 * @example
 * deleteTimer({ all: true })
 * // => 'justtimers://x-callback-url/delete/all'
 * @link https://justtimers.app/help/shortcuts/
 */
export function deleteTimer(payload: JustTimersTimerTargetPayload) {
  return justTimersTimerActionUrl('delete', payload)
}
