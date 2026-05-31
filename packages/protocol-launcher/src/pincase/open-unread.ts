import { pincaseOpenUrl } from './shared'

/**
 * Open unread personal bookmarks in Pincase.
 *
 * @returns Pincase personal unread URL.
 * @example
 * openUnread()
 * // => 'pincaseapp://x-callback-url/open?mode=personal_unread'
 * @link https://pincaseapp.com/api.html
 */
export function openUnread() {
  return pincaseOpenUrl({ mode: 'personal_unread' })
}
