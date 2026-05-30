/**
 * Force BusyCal on macOS to sync with all CalDAV servers.
 *
 * @returns BusyCal macOS CalDAV sync URL.
 * @example
 * syncCalDAV()
 * // => 'busycalsync://caldav'
 * @link https://www.busymac.com/docs/busycal/70621-url-handler/
 */
export function syncCalDAV() {
  return 'busycalsync://caldav'
}
