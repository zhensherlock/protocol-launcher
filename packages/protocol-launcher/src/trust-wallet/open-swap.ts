import { type TrustWalletAssetId, type TrustWalletUrlOptions, trustWalletUrl } from './shared'

export interface OpenSwapPayload extends TrustWalletUrlOptions {
  /**
   * Source asset in UAI format.
   *
   * @example 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F'
   */
  from: TrustWalletAssetId
  /**
   * Destination asset in UAI format.
   *
   * @example 'c60'
   */
  to: TrustWalletAssetId
}

/**
 * Open Trust Wallet Swap.
 *
 * @param payload Trust Wallet swap payload.
 * @returns Trust Wallet swap deeplink.
 * @example
 * openSwap({ from: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F', to: 'c60' })
 * // => 'https://link.trustwallet.com/swap?from=c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F&to=c60'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function openSwap(payload: OpenSwapPayload) {
  return trustWalletUrl('swap', payload)
}
