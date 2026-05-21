/**
 * Copy a link from the pasteboard as Markdown on macOS.
 *
 * @returns Anybox copy-pasteboard-link-as-markdown URL.
 * @example
 * copyPasteboardLinkAsMarkdown()
 * // => 'anybox://copy-pasteboard-link-as-markdown'
 * @link https://anybox.app/url-schemes
 */
export function copyPasteboardLinkAsMarkdown() {
  return 'anybox://copy-pasteboard-link-as-markdown'
}
