import { cleanShotUrl } from './shared'

/**
 * Hide Desktop icons in CleanShot.
 *
 * @returns CleanShot hide-desktop-icons URL.
 * @example
 * hideDesktopIcons()
 * // => 'cleanshot://hide-desktop-icons'
 * @link https://cleanshot.com/docs-api
 */
export function hideDesktopIcons() {
  return cleanShotUrl('hide-desktop-icons')
}
