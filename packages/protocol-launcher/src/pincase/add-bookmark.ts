import type { PincaseAddBookmarkPayload } from './shared'
import { pincaseAddBookmarkUrl } from './shared'

/**
 * Create a bookmark in Pincase.
 *
 * @param payload Pincase add bookmark payload.
 * @returns Pincase add bookmark URL.
 * @example
 * addBookmark({
 *   url: 'https://www.example.com/',
 *   title: 'Protocol Launcher',
 *   noui: 'yes',
 *   toread: 'yes',
 * })
 * // => 'pincaseapp://x-callback-url/add?url=https%3A%2F%2Fwww.example.com%2F&title=Protocol%20Launcher&toread=yes&noui=yes'
 * @example
 * addBookmark({
 *   url: 'http://pincaseapp.com/',
 *   title: 'Pincase - A simple, elegant and powerful Pinboard.in client for iOS',
 *   noui: 'yes',
 *   later: 'yes',
 * })
 * // => 'pincaseapp://x-callback-url/add?url=http%3A%2F%2Fpincaseapp.com%2F&title=Pincase%20-%20A%20simple%2C%20elegant%20and%20powerful%20Pinboard.in%20client%20for%20iOS&noui=yes&later=yes'
 * @link https://pincaseapp.com/api.html
 */
export function addBookmark(payload: PincaseAddBookmarkPayload) {
  return pincaseAddBookmarkUrl(payload)
}
