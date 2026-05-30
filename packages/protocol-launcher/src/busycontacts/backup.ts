/**
 * Create a BusyContacts backup in the configured default backup location.
 *
 * @returns BusyContacts backup URL.
 * @example
 * backup()
 * // => 'busycontacts://backup'
 * @link https://www.busymac.com/docs/busycontacts/56235-url-handler
 */
export function backup() {
  return 'busycontacts://backup'
}
