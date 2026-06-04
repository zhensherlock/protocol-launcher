/**
 * OpenVPN Connect profile import payload definition.
 */
export interface OpenVPNConnectImportProfilePayload {
  /**
   * OpenVPN Access Server HTTPS token URL for a connection profile.
   *
   * @example 'https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN'
   */
  url: string
}

export function openVPNConnectImportProfileUrl(payload: OpenVPNConnectImportProfilePayload) {
  const { url } = payload

  if (!url.startsWith('https://')) {
    throw new Error('Unsupported OpenVPN Connect HTTPS token URL format.')
  }

  return `openvpn://import-profile/${url}`
}
