import { cleanShotUrl } from './shared'

/**
 * Toggle Desktop icons visibility in CleanShot.
 *
 * @returns CleanShot toggle-desktop-icons URL.
 * @example
 * toggleDesktopIcons()
 * // => 'cleanshot://toggle-desktop-icons'
 * @link https://cleanshot.com/docs-api
 */
export function toggleDesktopIcons() {
  return cleanShotUrl('toggle-desktop-icons')
}
