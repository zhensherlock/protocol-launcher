import { qs } from '@protocol-launcher/shared'

/**
 * Pause timer command payload definition.
 */
type PauseTimer = {
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
 * Pause timer in MultiTimer.
 *
 * @param payload Pause timer command payload.
 * @returns MultiTimer pause timer URL.
 * @example
 * pauseTimer({ name: 'Lunch' })
 * // => 'multitimer://api/pause-timer?name=Lunch'
 * @example
 * pauseTimer({ name: 'Lunch', board: 'Work' })
 * // => 'multitimer://api/pause-timer?name=Lunch&board=Work'
 * @link https://persapps.com/app/multitimer/url-scheme.php
 */
export function pauseTimer(payload: PauseTimer) {
  const { name, board } = payload
  const params = qs({
    name,
    ...(board ? { board } : {}),
  })

  return `multitimer://api/pause-timer${params}`
}
