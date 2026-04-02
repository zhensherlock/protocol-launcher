/**
 * Open the special group "Last 7 Days" (Recent) in Ulysses.
 *
 * Available on iOS since Ulysses 2.6 (API version 1), on Mac since Ulysses 2.8 (API version 2).
 *
 * @returns Ulysses open-recent URL.
 * @example
 * openRecent()
 * // => 'ulysses://x-callback-url/open-recent'
 * @link https://refined-github-html-preview.kidonng.workers.dev/softwarehistorysociety/UlyssesX-Callback-URL/raw/main/x-callback.html#open-all-open-recent-open-favorites
 */
export function openRecent() {
  return 'ulysses://x-callback-url/open-recent'
}
