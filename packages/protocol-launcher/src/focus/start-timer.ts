import { type FocusXCallback, focusCallbackParams, focusUrl } from './shared'

/**
 * Start timer command payload definition.
 */
type StartTimer = FocusXCallback & {
  /**
   * The type of session to start.
   */
  type?: 'focus' | 'break'

  /**
   * Duration in minutes.
   */
  duration?: number
}

/**
 * Start the Focus timer.
 *
 * @param payload Start timer command payload.
 * @returns Focus start timer URL.
 * @example
 * startTimer()
 * // => 'focusapp://start-timer'
 * @example
 * startTimer({ duration: 20 })
 * // => 'focusapp://start-timer?duration=20'
 * @example
 * startTimer({ type: 'focus', duration: 40 })
 * // => 'focusapp://start-timer?type=focus&duration=40'
 * @link https://meaningful-things.com/tutorial/2023/5/11/focus-url-scheme
 */
export function startTimer(payload: StartTimer = {}) {
  const { type, duration } = payload
  const params = {
    ...(type ? { type } : {}),
    ...(duration !== undefined ? { duration } : {}),
    ...focusCallbackParams(payload),
  }

  return focusUrl('start-timer', params)
}
