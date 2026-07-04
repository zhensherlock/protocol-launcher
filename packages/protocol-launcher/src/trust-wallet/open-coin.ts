import { type TrustWalletAssetId, type TrustWalletUrlOptions, trustWalletUrl } from './shared'

export interface OpenCoinPayload extends TrustWalletUrlOptions {
  /**
   * Asset in UAI format.
   *
   * @example 'c60'
   */
  asset: TrustWalletAssetId
}

/**
 * Open a coin in Trust Wallet.
 *
 * @param payload Trust Wallet asset payload.
 * @returns Trust Wallet open coin deeplink.
 * @example
 * openCoin({ asset: 'c60' })
 * // => 'https://link.trustwallet.com/open_coin?asset=c60'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function openCoin(payload: OpenCoinPayload) {
  return trustWalletUrl('open_coin', payload)
}
