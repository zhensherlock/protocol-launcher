import { pushcutOpenUrl } from './shared'

/**
 * Open the Pushcut notifications view.
 *
 * @returns Pushcut notifications URL.
 * @example
 * openNotifications()
 * // => 'pushcut://open/notifications'
 *
 * @link https://www.pushcut.io/support/url-scheme
 */
export function openNotifications() {
  return pushcutOpenUrl('notifications')
}
