import type { JustTimersTimerTargetPayload } from './shared'
import { justTimersTimerActionUrl } from './shared'

/**
 * Reset one timer by name, or reset all timers.
 *
 * @param payload Timer target payload.
 * @returns Just Timers reset timer URL.
 * @example
 * resetTimer({ name: 'Tea' })
 * // => 'justtimers://x-callback-url/reset/?name=Tea'
 * @example
 * resetTimer({ all: true })
 * // => 'justtimers://x-callback-url/reset/all'
 * @link https://justtimers.app/help/shortcuts/
 */
export function resetTimer(payload: JustTimersTimerTargetPayload) {
  return justTimersTimerActionUrl('reset', payload)
}
