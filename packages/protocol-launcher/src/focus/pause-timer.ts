import { type FocusXCallback, focusCallbackParams, focusUrl } from './shared'

/**
 * Pause timer command payload definition.
 */
type PauseTimer = FocusXCallback

/**
 * Pause the current Focus timer.
 *
 * @param payload Pause timer command payload.
 * @returns Focus pause timer URL.
 * @example
 * pauseTimer()
 * // => 'focusapp://pause-timer'
 * @link https://meaningful-things.com/tutorial/2023/5/11/focus-url-scheme
 */
export function pauseTimer(payload: PauseTimer = {}) {
  const params = {
    ...focusCallbackParams(payload),
  }

  return focusUrl('pause-timer', params)
}
