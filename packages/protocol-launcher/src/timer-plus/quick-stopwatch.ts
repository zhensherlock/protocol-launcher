import {
  hasTimerPlusCallback,
  type TimerPlusXCallback,
  timerPlusAppUrl,
  timerPlusCallbackParams,
  timerPlusXCallbackUrl,
} from './shared'

/**
 * Quick stopwatch command payload definition.
 */
type QuickStopwatch = TimerPlusXCallback & {
  /**
   * Name of the quick stopwatch.
   */
  name?: string
}

/**
 * Start a quick stopwatch in Timer+.
 *
 * Quick stopwatches are deleted after they are used.
 *
 * @param payload Quick stopwatch command payload.
 * @returns Timer+ quick stopwatch URL.
 * @example
 * quickStopwatch()
 * // => 'timerplus://app/quick-stopwatches/new'
 * @example
 * quickStopwatch({ name: 'Plank' })
 * // => 'timerplus://app/quick-stopwatches/new?name=Plank'
 * @example
 * quickStopwatch({ name: 'Plank', xSource: 'Shortcuts', xSuccess: 'shortcuts://callback' })
 * // => 'timerplus://x-callback-url/quick-stopwatch/new?name=Plank&x-source=Shortcuts&x-success=shortcuts%3A%2F%2Fcallback'
 * @link https://www.timerplusapp.com/help/BkG3d6F_d-/
 */
export function quickStopwatch(payload: QuickStopwatch = {}) {
  const { name } = payload
  const params = {
    ...(name !== undefined ? { name } : {}),
  }

  if (hasTimerPlusCallback(payload)) {
    return timerPlusXCallbackUrl('quick-stopwatch/new', {
      ...params,
      ...timerPlusCallbackParams(payload),
    })
  }

  return timerPlusAppUrl('quick-stopwatches/new', params)
}
