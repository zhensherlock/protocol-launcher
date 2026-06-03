import { type CleanShotArea, type CleanShotCaptureActionPayload, cleanShotUrl } from './shared'

/**
 * Capture area payload definition.
 */
export type CaptureArea = CleanShotArea & CleanShotCaptureActionPayload

/**
 * Open CleanShot's Capture Area mode, or capture instantly when area parameters are supplied.
 *
 * @param payload Capture area payload.
 * @returns CleanShot capture-area URL.
 * @example
 * captureArea()
 * // => 'cleanshot://capture-area'
 * @example
 * captureArea({ action: 'annotate' })
 * // => 'cleanshot://capture-area?action=annotate'
 * @example
 * captureArea({ x: 100, y: 120, width: 200, height: 150, display: 1 })
 * // => 'cleanshot://capture-area?x=100&y=120&width=200&height=150&display=1'
 * @link https://cleanshot.com/docs-api
 */
export function captureArea(payload: CaptureArea = {}) {
  return cleanShotUrl('capture-area', payload)
}
