import { qs } from '@protocol-launcher/shared'
import type { NfcUniversalLinkPayload } from './shared'

/**
 * Create the documented old-style Home Assistant NFC universal link.
 *
 * @param payload NFC universal link payload.
 * @returns Home Assistant old-style NFC universal link.
 * @example
 * nfcUniversalLink({ url: 'homeassistant://navigate/dashboard-mobile/my-subview' })
 * // => 'https://www.home-assistant.io/ios/nfc/?url=homeassistant%3A%2F%2Fnavigate%2Fdashboard-mobile%2Fmy-subview'
 *
 * @link https://companion.home-assistant.io/docs/integrations/universal-links/
 */
export function nfcUniversalLink(payload: NfcUniversalLinkPayload) {
  const { url } = payload

  return `https://www.home-assistant.io/ios/nfc/${qs({ url })}`
}
