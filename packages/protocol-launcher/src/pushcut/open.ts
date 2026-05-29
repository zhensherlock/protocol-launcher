import { pushcutOpenUrl } from './shared'

/**
 * Open Pushcut.
 *
 * @returns Pushcut open URL.
 * @example
 * open()
 * // => 'pushcut://open/'
 *
 * @link https://www.pushcut.io/support/url-scheme
 */
export function open() {
  return pushcutOpenUrl()
}
