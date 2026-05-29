import { pushcutOpenUrl } from './shared'

/**
 * Open the Pushcut notificationsLog view.
 *
 * @returns Pushcut notificationsLog URL.
 * @example
 * openNotificationsLog()
 * // => 'pushcut://open/notificationsLog'
 *
 * @link https://www.pushcut.io/support/url-scheme
 */
export function openNotificationsLog() {
  return pushcutOpenUrl('notificationsLog')
}
