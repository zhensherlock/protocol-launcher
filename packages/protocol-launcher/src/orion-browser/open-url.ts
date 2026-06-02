import { qs } from '@protocol-launcher/shared'

/**
 * Open URL definition.
 */
export interface OpenUrl {
  /**
   * The URL to open in Orion Browser for iOS.
   */
  url: string
}

/**
 * Open a URL in Orion Browser for iOS.
 *
 * @param payload Open URL command payload.
 * @returns Orion Browser URL with the specified URL.
 * @example
 * openUrl({ url: 'https://browser.kagi.com/' })
 * // => 'orion://open-url?url=https%3A%2F%2Fbrowser.kagi.com%2F'
 * @link https://browser.kagi.com/faq.html
 */
export function openUrl(payload: OpenUrl) {
  const { url } = payload
  const params = qs({ url })

  return `orion://open-url${params}`
}
