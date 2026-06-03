import { cleanShotUrl } from './shared'

/**
 * Show Desktop icons in CleanShot.
 *
 * @returns CleanShot show-desktop-icons URL.
 * @example
 * showDesktopIcons()
 * // => 'cleanshot://show-desktop-icons'
 * @link https://cleanshot.com/docs-api
 */
export function showDesktopIcons() {
  return cleanShotUrl('show-desktop-icons')
}
