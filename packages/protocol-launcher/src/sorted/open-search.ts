import { sortedOpenUrl } from './shared'

/**
 * Open Sorted's Search view.
 *
 * @returns Sorted Search view URL.
 * @example
 * openSearch()
 * // => 'sorted://x-callback-url/open?item=search'
 * @link https://www.sortedapp.com/blog/url-scheme
 */
export function openSearch() {
  return sortedOpenUrl({ item: 'search' })
}
