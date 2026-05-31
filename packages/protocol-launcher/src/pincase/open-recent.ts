import { pincaseOpenUrl } from './shared'

/**
 * Open recent personal bookmarks in Pincase.
 *
 * @returns Pincase personal recent URL.
 * @example
 * openRecent()
 * // => 'pincaseapp://x-callback-url/open?mode=personal_recent'
 * @link https://pincaseapp.com/api.html
 */
export function openRecent() {
  return pincaseOpenUrl({ mode: 'personal_recent' })
}
