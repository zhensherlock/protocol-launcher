/**
 * Open the special group "Favorites" in Ulysses.
 *
 * Available on iOS since Ulysses 2.6 (API version 1), on Mac since Ulysses 2.8 (API version 2).
 *
 * @returns Ulysses open-favorites URL.
 * @example
 * openFavorites()
 * // => 'ulysses://x-callback-url/open-favorites'
 * @link https://refined-github-html-preview.kidonng.workers.dev/softwarehistorysociety/UlyssesX-Callback-URL/raw/main/x-callback.html#open-all-open-recent-open-favorites
 */
export function openFavorites() {
  return 'ulysses://x-callback-url/open-favorites'
}
