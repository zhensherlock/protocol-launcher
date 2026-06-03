import { type CleanShotArea, cleanShotUrl } from './shared'

/**
 * Scrolling capture payload definition.
 */
export type ScrollingCapture = CleanShotArea & {
  /**
   * Automatically start capture.
   */
  start?: boolean
  /**
   * Enable auto-scroll mode.
   */
  autoscroll?: boolean
}

/**
 * Open CleanShot's Scrolling Capture mode.
 *
 * @param payload Scrolling capture payload.
 * @returns CleanShot scrolling-capture URL.
 * @example
 * scrollingCapture()
 * // => 'cleanshot://scrolling-capture'
 * @example
 * scrollingCapture({ x: 100, y: 120, width: 200, height: 150, start: true, autoscroll: true })
 * // => 'cleanshot://scrolling-capture?x=100&y=120&width=200&height=150&start=true&autoscroll=true'
 * @link https://cleanshot.com/docs-api
 */
export function scrollingCapture(payload: ScrollingCapture = {}) {
  return cleanShotUrl('scrolling-capture', payload)
}
