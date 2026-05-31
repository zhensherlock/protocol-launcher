import type { BuchenAddBookmarkPayload } from './shared'
import { buchenAddBookmarkUrl } from './shared'

/**
 * Add a bookmark in Buchen.
 *
 * @param payload Buchen add bookmark payload.
 * @returns Buchen add bookmark URL.
 * @example
 * addBookmark({
 *   name: 'Protocol Launcher',
 *   url: 'https://www.example.com/',
 * })
 * // => 'buchen://add?name=Protocol%20Launcher&url=https%3A%2F%2Fwww.example.com%2F'
 * @example
 * addBookmark({
 *   name: 'Protocol Launcher',
 *   url: 'https://www.example.com/',
 *   browser: 'firefox focus',
 * })
 * // => 'buchen://add?name=Protocol%20Launcher&url=https%3A%2F%2Fwww.example.com%2F&browser=firefox%20focus'
 * @link https://www.borovia.co/buchen.support.html
 */
export function addBookmark(payload: BuchenAddBookmarkPayload) {
  return buchenAddBookmarkUrl(payload)
}
