import { sortedOpenUrl } from './shared'

/**
 * Open Sorted's New view.
 *
 * @returns Sorted New URL.
 * @example
 * openNew()
 * // => 'sorted://x-callback-url/open?item=new'
 * @link https://www.sortedapp.com/blog/url-scheme
 */
export function openNew() {
  return sortedOpenUrl({ item: 'new' })
}
