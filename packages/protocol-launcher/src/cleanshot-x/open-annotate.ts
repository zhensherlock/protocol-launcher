import { type CleanShotFilePathPayload, cleanShotUrl } from './shared'

/**
 * Open Annotate payload definition.
 */
export type OpenAnnotate = CleanShotFilePathPayload

/**
 * Open a specified PNG or JPEG file in CleanShot Annotate, or ask the user to select a file.
 *
 * @param payload Open Annotate payload.
 * @returns CleanShot open-annotate URL.
 * @example
 * openAnnotate()
 * // => 'cleanshot://open-annotate'
 * @example
 * openAnnotate({ filepath: '/Users/username/Desktop/my screenshot.png' })
 * // => 'cleanshot://open-annotate?filepath=/Users/username/Desktop/my%20screenshot.png'
 * @link https://cleanshot.com/docs-api
 */
export function openAnnotate(payload: OpenAnnotate = {}) {
  return cleanShotUrl('open-annotate', payload)
}
