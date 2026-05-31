import { buchenNavigationUrl } from './shared'

/**
 * Navigate to bookmarks in Buchen.
 *
 * @returns Buchen bookmarks URL.
 * @example
 * goBookmarks()
 * // => 'buchen://go-bookmarks'
 * @link https://www.borovia.co/buchen.support.html
 */
export function goBookmarks() {
  return buchenNavigationUrl('bookmarks')
}
