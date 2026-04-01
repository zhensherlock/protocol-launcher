/**
 * Show the agenda in Beorg.
 *
 * @returns Beorg agenda URL.
 * @example
 * showAgenda()
 * // => 'beorg://x-callback-url/agenda'
 * @link https://www.beorgapp.com/manual/#url-scheme
 */
export function showAgenda() {
  return 'beorg://x-callback-url/agenda'
}
