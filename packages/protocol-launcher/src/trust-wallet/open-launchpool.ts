import { type TrustWalletUrlOptions, trustWalletUrl } from './shared'

/**
 * Open the Trust Wallet Launchpool page.
 *
 * @param payload Optional Trust Wallet URL options.
 * @returns Trust Wallet Launchpool deeplink.
 * @example
 * openLaunchpool()
 * // => 'https://link.trustwallet.com/launchpool'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function openLaunchpool(payload: TrustWalletUrlOptions = {}) {
  return trustWalletUrl('launchpool', payload)
}
