import { qs } from '@protocol-launcher/shared'

/**
 * Open URL definition.
 */
type OpenUrl = {
  /**
   * The URL to open.
   */
  url: string
}

/**
 * Open a URL in iCab Mobile.
 *
 * @param payload Open URL command payload.
 * @returns iCab Mobile URL with the specified URL.
 * @example
 * openUrl({ url: 'https://www.example.com/' })
 * // => 'icabmobile://x-callback-url/open?url=https://www.example.com/'
 * @link http://www.icab.de/blog-archive/2012/07/01/icab-mobile-6-0-supports-x-callback-url/
 */
export function openUrl(payload: OpenUrl) {
  const { url } = payload
  const params = qs({ url })
  return `icabmobile://x-callback-url/open${params}`
}
