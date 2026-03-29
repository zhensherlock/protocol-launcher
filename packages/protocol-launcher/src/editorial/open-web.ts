/**
 * Open web URL payload definition.
 */
type OpenWeb = {
  /**
   * The web URL to open in Editorial's in-app browser.
   */
  url: string
}

/**
 * Open a web page in Editorial's in-app browser using editorial-http:// or editorial-https:// scheme.
 *
 * @param payload Open web URL payload.
 * @returns Editorial web browser URL.
 * @example
 * openWeb({ url: 'http://apple.com' })
 * // => 'editorial-http://apple.com'
 * @example
 * openWeb({ url: 'https://google.com' })
 * // => 'editorial-https://google.com'
 * @link https://omz-software.com/editorial/docs/ios/urlscheme.html
 */
export function openWeb(payload: OpenWeb) {
  const { url } = payload

  // Replace http:// or https:// with editorial-http:// or editorial-https://
  if (url.startsWith('https://')) {
    return `editorial-${url}`
  }

  if (url.startsWith('http://')) {
    return `editorial-${url}`
  }

  // If no protocol specified, assume https
  return `editorial-https://${url}`
}
