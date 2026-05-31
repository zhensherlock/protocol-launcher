import { sortedOpenUrl } from './shared'

/**
 * Open Sorted's Today view.
 *
 * @returns Sorted Today URL.
 * @example
 * openToday()
 * // => 'sorted://x-callback-url/open?item=today'
 * @link https://www.sortedapp.com/blog/url-scheme
 */
export function openToday() {
  return sortedOpenUrl({ item: 'today' })
}
