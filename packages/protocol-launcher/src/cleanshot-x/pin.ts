import { type CleanShotFilePathPayload, cleanShotUrl } from './shared'

/**
 * Pin payload definition.
 */
export type Pin = CleanShotFilePathPayload

/**
 * Open a specified PNG or JPEG file as a pinned screenshot, or ask the user to select a file.
 *
 * @param payload Pin payload.
 * @returns CleanShot pin URL.
 * @example
 * pin()
 * // => 'cleanshot://pin'
 * @example
 * pin({ filepath: '/Users/username/Desktop/my screenshot.png' })
 * // => 'cleanshot://pin?filepath=/Users/username/Desktop/my%20screenshot.png'
 * @link https://cleanshot.com/docs-api
 */
export function pin(payload: Pin = {}) {
  return cleanShotUrl('pin', payload)
}
