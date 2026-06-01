import { moovitFallbackLink } from './shared'
import type { MoovitFallbackLinkPayload } from './types'

/**
 * Create Moovit's documented Android app-store fallback link.
 *
 * @param payload Fallback link payload.
 * @returns Moovit Android fallback URL.
 * @example
 * androidFallbackLink({ c: 'YOUR_APP_NAME', af_dp: 'moovit://nearby?lat=40.758896&lon=-73.98513&partner_id=YOUR_APP_NAME' })
 * // => 'https://app.appsflyer.com/com.tranzmate?pid=DL&c=YOUR_APP_NAME&af_dp=moovit%3A%2F%2Fnearby%3Flat%3D40.758896%26lon%3D-73.98513%26partner_id%3DYOUR_APP_NAME'
 * @link https://moovit.com/developers/deeplinking/
 */
export function androidFallbackLink(payload: MoovitFallbackLinkPayload) {
  return moovitFallbackLink('com.tranzmate', payload)
}
