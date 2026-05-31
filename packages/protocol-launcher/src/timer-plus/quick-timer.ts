import {
  hasTimerPlusCallback,
  type TimerPlusXCallback,
  timerPlusAppUrl,
  timerPlusCallbackParams,
  timerPlusXCallbackUrl,
} from './shared'

/**
 * Quick timer command payload definition.
 */
type QuickTimer = TimerPlusXCallback & {
  /**
   * Number of hours. Timer+ accepts whole numbers.
   */
  hours?: number

  /**
   * Number of minutes. Timer+ accepts whole numbers.
   */
  minutes?: number

  /**
   * Number of seconds. Timer+ accepts whole numbers.
   */
  seconds?: number

  /**
   * Name of the timer.
   */
  name?: string
}

/**
 * Set and start a quick timer in Timer+.
 *
 * Quick timers are deleted after they complete. Timer+ accepts any combination of
 * `hours`, `minutes`, and `seconds`, with a documented total duration limit of 100 hours.
 *
 * @param payload Quick timer command payload.
 * @returns Timer+ quick timer URL.
 * @example
 * quickTimer({ hours: 1, minutes: 23, seconds: 45 })
 * // => 'timerplus://app/quick-timers/new?hours=1&minutes=23&seconds=45'
 * @example
 * quickTimer({ minutes: 50, name: 'Laundry' })
 * // => 'timerplus://app/quick-timers/new?minutes=50&name=Laundry'
 * @example
 * quickTimer({ minutes: 5, name: 'Tea', xSource: 'Shortcuts', xSuccess: 'shortcuts://callback' })
 * // => 'timerplus://x-callback-url/quick-timers/new?minutes=5&name=Tea&x-source=Shortcuts&x-success=shortcuts%3A%2F%2Fcallback'
 * @link https://www.timerplusapp.com/help/BkG3d6F_d-/
 */
export function quickTimer(payload: QuickTimer = {}) {
  const { hours, minutes, seconds, name } = payload
  const params = {
    ...(hours !== undefined ? { hours } : {}),
    ...(minutes !== undefined ? { minutes } : {}),
    ...(seconds !== undefined ? { seconds } : {}),
    ...(name !== undefined ? { name } : {}),
  }

  if (hasTimerPlusCallback(payload)) {
    return timerPlusXCallbackUrl('quick-timers/new', {
      ...params,
      ...timerPlusCallbackParams(payload),
    })
  }

  return timerPlusAppUrl('quick-timers/new', params)
}
