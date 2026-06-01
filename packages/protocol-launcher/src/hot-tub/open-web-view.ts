import { type HotTubOpenWebViewPayload, hotTubUrl } from './shared'

/**
 * Open a web page within Hot Tub's built-in browser.
 *
 * @param payload Web view payload.
 * @returns Hot Tub web view URL.
 * @example
 * openWebView({ url: 'https://help.example.com' })
 * // => 'hottub://webview?url=https%3A%2F%2Fhelp.example.com'
 * @link https://docs.hottubapp.io/developers/url-schemes/
 */
export function openWebView(payload: HotTubOpenWebViewPayload) {
  const { url, privacy } = payload

  return hotTubUrl('webview', {
    url,
    privacy,
  })
}
