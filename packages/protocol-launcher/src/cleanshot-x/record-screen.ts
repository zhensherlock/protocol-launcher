import { type CleanShotArea, cleanShotUrl } from './shared'

/**
 * Record screen payload definition.
 */
export type RecordScreen = CleanShotArea

/**
 * Open CleanShot's Record Screen mode.
 *
 * @param payload Record screen payload.
 * @returns CleanShot record-screen URL.
 * @example
 * recordScreen()
 * // => 'cleanshot://record-screen'
 * @example
 * recordScreen({ x: 100, y: 120, width: 200, height: 150, display: 1 })
 * // => 'cleanshot://record-screen?x=100&y=120&width=200&height=150&display=1'
 * @link https://cleanshot.com/docs-api
 */
export function recordScreen(payload: RecordScreen = {}) {
  return cleanShotUrl('record-screen', payload)
}
