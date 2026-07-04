import { type TrustWalletAssetId, type TrustWalletUrlOptions, trustWalletUrl } from './shared'

export interface AddAssetPayload extends TrustWalletUrlOptions {
  /**
   * Asset in UAI format.
   *
   * @example 'c60_t0x514910771af9ca656af840dff83e8264ecf986ca'
   */
  asset: TrustWalletAssetId
}

/**
 * Add an asset to Trust Wallet local storage so it shows on the wallet screen.
 *
 * @param payload Trust Wallet asset payload.
 * @returns Trust Wallet add asset deeplink.
 * @example
 * addAsset({ asset: 'c60_t0x514910771af9ca656af840dff83e8264ecf986ca' })
 * // => 'https://link.trustwallet.com/add_asset?asset=c60_t0x514910771af9ca656af840dff83e8264ecf986ca'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function addAsset(payload: AddAssetPayload) {
  return trustWalletUrl('add_asset', payload)
}
