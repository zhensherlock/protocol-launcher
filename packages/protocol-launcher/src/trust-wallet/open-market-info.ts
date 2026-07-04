import { type TrustWalletAssetId, type TrustWalletUrlOptions, trustWalletUrl } from './shared'

export interface OpenMarketInfoPayload extends TrustWalletUrlOptions {
  /**
   * Asset in UAI format.
   *
   * @example 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F'
   */
  asset: TrustWalletAssetId
}

/**
 * Open Trust Wallet market information for an asset.
 *
 * @param payload Trust Wallet market info payload.
 * @returns Trust Wallet market info deeplink.
 * @example
 * openMarketInfo({ asset: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F' })
 * // => 'https://link.trustwallet.com/market?asset=c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function openMarketInfo(payload: OpenMarketInfoPayload) {
  return trustWalletUrl('market', payload)
}
