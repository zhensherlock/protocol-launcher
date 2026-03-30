import { qs } from '@protocol-launcher/shared'

/**
 * Resume timer command payload definition.
 */
type ResumeTimer = {
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
 * Resume timer in MultiTimer.
 *
 * @param payload Resume timer command payload.
 * @returns MultiTimer resume timer URL.
 * @example
 * resumeTimer({ name: 'Lunch' })
 * // => 'multitimer://api/resume-timer?name=Lunch'
 * @example
 * resumeTimer({ name: 'Lunch', board: 'Work' })
 * // => 'multitimer://api/resume-timer?name=Lunch&board=Work'
 * @link https://persapps.com/app/multitimer/url-scheme.php
 */
export function resumeTimer(payload: ResumeTimer) {
  const { name, board } = payload
  const params = qs({
    name,
    ...(board ? { board } : {}),
  })

  return `multitimer://api/resume-timer${params}`
}
