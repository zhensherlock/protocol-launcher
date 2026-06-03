import { cleanShotUrl } from './shared'

/**
 * Add Quick Access Overlay payload definition.
 */
export type AddQuickAccessOverlay = {
  /**
   * Path to the PNG, JPEG, or MP4 file to open.
   */
  filepath: string
}

/**
 * Open a new CleanShot Quick Access Overlay with the specified PNG, JPEG, or MP4 file.
 *
 * @param payload Add Quick Access Overlay payload.
 * @returns CleanShot add-quick-access-overlay URL.
 * @example
 * addQuickAccessOverlay({ filepath: '/Users/username/Desktop/my screenshot.png' })
 * // => 'cleanshot://add-quick-access-overlay?filepath=/Users/username/Desktop/my%20screenshot.png'
 * @link https://cleanshot.com/docs-api
 */
export function addQuickAccessOverlay(payload: AddQuickAccessOverlay) {
  return cleanShotUrl('add-quick-access-overlay', payload)
}
