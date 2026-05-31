import { sortedOpenUrl } from './shared'

/**
 * Open Sorted's Inbox view.
 *
 * @returns Sorted Inbox URL.
 * @example
 * openInbox()
 * // => 'sorted://x-callback-url/open?item=inbox'
 * @link https://www.sortedapp.com/blog/url-scheme
 */
export function openInbox() {
  return sortedOpenUrl({ item: 'inbox' })
}
