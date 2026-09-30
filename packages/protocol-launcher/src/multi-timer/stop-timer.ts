import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams, hasCallbacks } from './callbacks'

/**
 * Stop timer command payload definition.
 */
type StopTimer = Callbacks & {
  /**
   * Timer label.
   */
  name: string
  /**
   * Board title (optional).
   */
  board?: string
}

/**
 * Stop timer in MultiTimer.
 *
 * @param payload Stop timer command payload.
 * @returns MultiTimer stop timer URL.
 * @example
 * stopTimer({ name: 'Lunch' })
 * // => 'multitimer://api/stop-timer?name=Lunch'
 * @example
 * stopTimer({ name: 'Lunch', board: 'Work' })
 * // => 'multitimer://api/stop-timer?name=Lunch&board=Work'
 * @link https://persapps.com/app/multitimer/url-scheme.php
 */
export function stopTimer(payload: StopTimer) {
  const { name, board } = payload
  const params = qs({
    name,
    ...(board ? { board } : {}),
    ...callbackParams(payload),
  })

  return `multitimer://${hasCallbacks(payload) ? 'x-callback-url' : 'api'}/stop-timer${params}`
}
