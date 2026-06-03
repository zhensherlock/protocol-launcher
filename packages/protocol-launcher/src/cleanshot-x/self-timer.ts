import { type CleanShotCaptureActionPayload, cleanShotUrl } from './shared'

/**
 * Self-timer payload definition.
 */
export type SelfTimer = CleanShotCaptureActionPayload

/**
 * Open CleanShot's Capture Area mode with self-timer.
 *
 * @param payload Self-timer payload.
 * @returns CleanShot self-timer URL.
 * @example
 * selfTimer()
 * // => 'cleanshot://self-timer'
 * @example
 * selfTimer({ action: 'pin' })
 * // => 'cleanshot://self-timer?action=pin'
 * @link https://cleanshot.com/docs-api
 */
export function selfTimer(payload: SelfTimer = {}) {
  return cleanShotUrl('self-timer', payload)
}
