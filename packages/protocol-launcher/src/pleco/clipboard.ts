/**
 * Open the clipboard reader in Pleco.
 *
 * @returns Pleco clipboard reader URL.
 * @example
 * clipboard()
 * // => 'plecoapi://x-callback-url/clipboard'
 * @link https://iphone.pleco.com/manual/30200/vershist.html
 */
export function clipboard() {
  return 'plecoapi://x-callback-url/clipboard'
}
