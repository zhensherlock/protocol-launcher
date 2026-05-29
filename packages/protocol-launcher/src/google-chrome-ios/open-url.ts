/**
 * Open URL definition.
 */
export interface OpenUrl {
  /**
   * The HTTP or HTTPS URL to open in Chrome for iOS.
   */
  url: string
}

/**
 * Open an HTTP or HTTPS URL in Chrome for iOS.
 *
 * @param payload Open URL command payload.
 * @returns Chrome for iOS URL with the official replacement scheme.
 * @throws When the URL scheme is not `http` or `https`.
 * @example
 * openUrl({ url: 'https://www.google.com/' })
 * // => 'googlechromes://www.google.com/'
 * @link https://chromium.googlesource.com/chromium/src/+/lkgr/docs/ios/opening_links.md
 */
export function openUrl(payload: OpenUrl) {
  const { url } = payload
  const schemeSeparatorIndex = url.indexOf(':')
  const scheme = schemeSeparatorIndex >= 0 ? url.slice(0, schemeSeparatorIndex) : undefined
  let chromeScheme: 'googlechrome' | 'googlechromes' | undefined

  if (scheme === 'http') {
    chromeScheme = 'googlechrome'
  }

  if (scheme === 'https') {
    chromeScheme = 'googlechromes'
  }

  if (chromeScheme) {
    return `${chromeScheme}${url.slice(schemeSeparatorIndex)}`
  }

  throw new Error('Unsupported Google Chrome iOS URL format.')
}
