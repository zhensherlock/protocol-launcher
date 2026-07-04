import { type TrustWalletUrlOptions, trustWalletUrl } from './shared'

/**
 * Open the Trust Wallet NFTs tab.
 *
 * @param payload Optional Trust Wallet URL options.
 * @returns Trust Wallet NFTs deeplink.
 * @example
 * openNfts()
 * // => 'https://link.trustwallet.com/nfts'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function openNfts(payload: TrustWalletUrlOptions = {}) {
  return trustWalletUrl('nfts', payload)
}
