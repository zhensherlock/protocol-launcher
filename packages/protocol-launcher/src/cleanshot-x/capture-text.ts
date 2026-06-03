import { type CleanShotArea, type CleanShotFilePathPayload, cleanShotUrl } from './shared'

/**
 * Capture text payload definition.
 */
export type CaptureText = CleanShotArea &
  CleanShotFilePathPayload & {
    /**
     * Keep or remove line breaks from copied text.
     */
    linebreaks?: boolean
  }

/**
 * Open CleanShot's Text Recognition tool, extract text from a PNG or JPEG file, or capture text from an area.
 *
 * @param payload Capture text payload.
 * @returns CleanShot capture-text URL.
 * @example
 * captureText()
 * // => 'cleanshot://capture-text'
 * @example
 * captureText({ filepath: '/Users/username/Desktop/my screenshot.png' })
 * // => 'cleanshot://capture-text?filepath=/Users/username/Desktop/my%20screenshot.png'
 * @example
 * captureText({ x: 100, y: 120, width: 200, height: 150, display: 1 })
 * // => 'cleanshot://capture-text?x=100&y=120&width=200&height=150&display=1'
 * @link https://cleanshot.com/docs-api
 */
export function captureText(payload: CaptureText = {}) {
  return cleanShotUrl('capture-text', payload)
}
