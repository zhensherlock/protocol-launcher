import { type TrustWalletUrlOptions, trustWalletUrl } from './shared'

/**
 * Open the Trust Wallet quest page.
 *
 * @param payload Optional Trust Wallet URL options.
 * @returns Trust Wallet quest deeplink.
 * @example
 * openQuest()
 * // => 'https://link.trustwallet.com/quest'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function openQuest(payload: TrustWalletUrlOptions = {}) {
  return trustWalletUrl('quest', payload)
}
