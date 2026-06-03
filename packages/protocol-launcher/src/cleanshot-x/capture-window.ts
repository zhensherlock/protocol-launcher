import { type CleanShotCaptureActionPayload, cleanShotUrl } from './shared'

/**
 * Capture window payload definition.
 */
export type CaptureWindow = CleanShotCaptureActionPayload

/**
 * Open CleanShot's Capture Window mode.
 *
 * @param payload Capture window payload.
 * @returns CleanShot capture-window URL.
 * @example
 * captureWindow()
 * // => 'cleanshot://capture-window'
 * @example
 * captureWindow({ action: 'upload' })
 * // => 'cleanshot://capture-window?action=upload'
 * @link https://cleanshot.com/docs-api
 */
export function captureWindow(payload: CaptureWindow = {}) {
  return cleanShotUrl('capture-window', payload)
}
