import { type CleanShotCaptureActionPayload, cleanShotUrl } from './shared'

/**
 * Capture fullscreen payload definition.
 */
export type CaptureFullscreen = CleanShotCaptureActionPayload

/**
 * Take a fullscreen screenshot in CleanShot.
 *
 * @param payload Capture fullscreen payload.
 * @returns CleanShot capture-fullscreen URL.
 * @example
 * captureFullscreen()
 * // => 'cleanshot://capture-fullscreen'
 * @example
 * captureFullscreen({ action: 'save' })
 * // => 'cleanshot://capture-fullscreen?action=save'
 * @link https://cleanshot.com/docs-api
 */
export function captureFullscreen(payload: CaptureFullscreen = {}) {
  return cleanShotUrl('capture-fullscreen', payload)
}
