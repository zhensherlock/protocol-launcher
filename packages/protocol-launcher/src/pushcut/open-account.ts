import { pushcutOpenUrl } from './shared'

/**
 * Open the Pushcut account view.
 *
 * @returns Pushcut account URL.
 * @example
 * openAccount()
 * // => 'pushcut://open/account'
 *
 * @link https://www.pushcut.io/support/url-scheme
 */
export function openAccount() {
  return pushcutOpenUrl('account')
}
