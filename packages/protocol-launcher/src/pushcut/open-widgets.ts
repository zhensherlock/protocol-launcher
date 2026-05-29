import { pushcutOpenUrl } from './shared'

/**
 * Open the Pushcut widgets view.
 *
 * @returns Pushcut widgets URL.
 * @example
 * openWidgets()
 * // => 'pushcut://open/widgets'
 *
 * @link https://www.pushcut.io/support/url-scheme
 */
export function openWidgets() {
  return pushcutOpenUrl('widgets')
}
