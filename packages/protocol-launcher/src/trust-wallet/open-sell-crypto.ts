import { type TrustWalletAssetId, type TrustWalletUrlOptions, trustWalletUrl } from './shared'

export interface OpenSellCryptoPayload extends TrustWalletUrlOptions {
  /**
   * Asset in UAI format.
   *
   * @example 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F'
   */
  asset: TrustWalletAssetId
}

/**
 * Open Trust Wallet Sell Crypto.
 *
 * @param payload Trust Wallet sell crypto payload.
 * @returns Trust Wallet sell crypto deeplink.
 * @example
 * openSellCrypto({ asset: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F' })
 * // => 'https://link.trustwallet.com/sell?asset=c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function openSellCrypto(payload: OpenSellCryptoPayload) {
  return trustWalletUrl('sell', payload)
}
