import { type TrustWalletUrlOptions, trustWalletBaseUrl } from './shared'

export interface ConnectWalletConnectPayload extends TrustWalletUrlOptions {
  /**
   * URL-encoded WalletConnect v2 URI generated from the WalletConnect Sign API.
   *
   * @example 'wc%3A1234abcd...%402%3FrelaySrotocol%3Dirn%26symKey%3D...'
   */
  uri: string
}

/**
 * Connect Trust Wallet to a WalletConnect session.
 *
 * @param payload WalletConnect payload.
 * @returns Trust Wallet WalletConnect deeplink.
 * @example
 * connectWalletConnect({ uri: 'wc%3A1234abcd...%402%3FrelaySrotocol%3Dirn%26symKey%3D...' })
 * // => 'https://link.trustwallet.com/wc?uri=wc%3A1234abcd...%402%3FrelaySrotocol%3Dirn%26symKey%3D...'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function connectWalletConnect(payload: ConnectWalletConnectPayload) {
  const { format, uri } = payload

  return `${trustWalletBaseUrl(format)}wc?uri=${uri}`
}
