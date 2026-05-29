export type OpenExternalBrowser = {
  /**
   * Target URL accessed from the LINE app.
   */
  url: string
}

export type OpenAndroidChromeCustomTab = OpenExternalBrowser

function urlWithLineBrowserParam(url: string, key: 'openExternalBrowser' | 'openInAppBrowser', value: '1' | '0') {
  const parsed = new URL(url)
  if (parsed.hostname === 'liff.line.me' || parsed.hostname === 'miniapp.line.me') {
    throw new Error("LINE external browser query parameters aren't supported on LIFF app URLs.")
  }

  parsed.searchParams.set(key, value)
  return parsed.toString()
}

/**
 * Add LINE's official query parameter for opening a target URL in an external browser.
 *
 * @param payload Target URL payload.
 * @returns URL with `openExternalBrowser=1`.
 * @example
 * openExternalBrowser({ url: 'https://example.com/' })
 * // => 'https://example.com/?openExternalBrowser=1'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-url-in-external-browser
 */
export function openExternalBrowser(payload: OpenExternalBrowser) {
  return urlWithLineBrowserParam(payload.url, 'openExternalBrowser', '1')
}

/**
 * Add LINE's official Android-only query parameter for opening a target URL in a Chrome custom tab.
 *
 * @param payload Target URL payload.
 * @returns URL with `openInAppBrowser=0`.
 * @example
 * openAndroidChromeCustomTab({ url: 'https://example.com/' })
 * // => 'https://example.com/?openInAppBrowser=0'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-url-in-external-browser
 */
export function openAndroidChromeCustomTab(payload: OpenAndroidChromeCustomTab) {
  return urlWithLineBrowserParam(payload.url, 'openInAppBrowser', '0')
}
