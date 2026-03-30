import { qs } from '@protocol-launcher/shared'

/**
 * Start timer command payload definition.
 */
type StartTimer = {
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
 * Start timer in MultiTimer.
 *
 * @param payload Start timer command payload.
 * @returns MultiTimer start timer URL.
 * @example
 * startTimer({ name: 'Lunch' })
 * // => 'multitimer://api/start-timer?name=Lunch'
 * @example
 * startTimer({ name: 'Lunch', board: 'Work' })
 * // => 'multitimer://api/start-timer?name=Lunch&board=Work'
 * @link https://persapps.com/app/multitimer/url-scheme.php
 */
export function startTimer(payload: StartTimer) {
  const { name, board } = payload
  const params = qs({
    name,
    ...(board ? { board } : {}),
  })

  return `multitimer://api/start-timer${params}`
}
