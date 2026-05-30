/**
 * Force BusyCal on macOS to sync with all WebDAV servers.
 *
 * @returns BusyCal macOS WebDAV sync URL.
 * @example
 * syncWebDAV()
 * // => 'busycalsync://webdav'
 * @link https://www.busymac.com/docs/busycal/70621-url-handler/
 */
export function syncWebDAV() {
  return 'busycalsync://webdav'
}
