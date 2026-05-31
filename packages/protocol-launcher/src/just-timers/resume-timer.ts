import type { JustTimersTimerTargetPayload } from './shared'
import { justTimersTimerActionUrl } from './shared'

/**
 * Resume one timer by name, or resume all timers.
 *
 * @param payload Timer target payload.
 * @returns Just Timers resume timer URL.
 * @example
 * resumeTimer({ name: 'Tea' })
 * // => 'justtimers://x-callback-url/resume/?name=Tea'
 * @example
 * resumeTimer({ all: true })
 * // => 'justtimers://x-callback-url/resume/all'
 * @link https://justtimers.app/help/shortcuts/
 */
export function resumeTimer(payload: JustTimersTimerTargetPayload) {
  return justTimersTimerActionUrl('resume', payload)
}
