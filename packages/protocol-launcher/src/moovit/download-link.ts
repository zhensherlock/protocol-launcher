import { qs } from '@protocol-launcher/shared'
import type { MoovitDownloadLinkPayload } from './types'

/**
 * Create Moovit's documented download link.
 *
 * @param payload Download link payload.
 * @returns Moovit download URL.
 * @example
 * downloadLink({ c: 'YOUR_APP_NAME' })
 * // => 'https://moovit.onelink.me/3986059930?pid=Developers&c=YOUR_APP_NAME'
 * @link https://moovit.com/developers/deeplinking/
 */
export function downloadLink(payload: MoovitDownloadLinkPayload) {
  const { c } = payload

  return `https://moovit.onelink.me/3986059930${qs({
    pid: 'Developers',
    c,
  })}`
}
