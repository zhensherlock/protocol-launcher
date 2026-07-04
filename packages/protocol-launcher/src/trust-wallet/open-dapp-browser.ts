import { type TrustWalletUrlOptions, trustWalletBaseUrl } from './shared'

export interface OpenDappBrowserPayload extends TrustWalletUrlOptions {
  /**
   * SLIP-44 coin index.
   *
   * @example 60
   */
  coinId: number | string
  /**
   * Website URL to open in the DApp browser.
   *
   * @example 'https://compound.finance'
   */
  url: string
}

/**
 * Open the Trust Wallet DApp browser with a specific URL and network.
 *
 * @param payload Trust Wallet DApp browser payload.
 * @returns Trust Wallet DApp browser deeplink.
 * @example
 * openDappBrowser({ coinId: 60, url: 'https://compound.finance' })
 * // => 'https://link.trustwallet.com/open_url?coin_id=60&url=https://compound.finance'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function openDappBrowser(payload: OpenDappBrowserPayload) {
  const { coinId, url, format } = payload

  return `${trustWalletBaseUrl(format)}open_url?coin_id=${coinId}&url=${url}`
}
