import type { OpenVPNConnectImportProfilePayload } from './shared'
import { openVPNConnectImportProfileUrl } from './shared'

/**
 * Import an OpenVPN Access Server token URL into OpenVPN Connect.
 *
 * @param payload OpenVPN Connect import profile payload.
 * @returns OpenVPN Connect profile import URL.
 * @example
 * importProfile({
 *   url: 'https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
 * })
 * // => 'openvpn://import-profile/https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN'
 * @link https://openvpn.net/as-docs/token-url.html
 */
export function importProfile(payload: OpenVPNConnectImportProfilePayload) {
  return openVPNConnectImportProfileUrl(payload)
}
