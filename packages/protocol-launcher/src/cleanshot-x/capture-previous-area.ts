import { type CleanShotCaptureActionPayload, cleanShotUrl } from './shared'

/**
 * Capture previous area payload definition.
 */
export type CapturePreviousArea = CleanShotCaptureActionPayload

/**
 * Repeat the last screenshot in CleanShot.
 *
 * @param payload Capture previous area payload.
 * @returns CleanShot capture-previous-area URL.
 * @example
 * capturePreviousArea()
 * // => 'cleanshot://capture-previous-area'
 * @example
 * capturePreviousArea({ action: 'copy' })
 * // => 'cleanshot://capture-previous-area?action=copy'
 * @link https://cleanshot.com/docs-api
 */
export function capturePreviousArea(payload: CapturePreviousArea = {}) {
  return cleanShotUrl('capture-previous-area', payload)
}
