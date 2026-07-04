import { type TrustWalletUrlOptions, trustWalletUrl } from './shared'

/**
 * Open Trust Wallet price alerts.
 *
 * @param payload Optional Trust Wallet URL options.
 * @returns Trust Wallet price alerts deeplink.
 * @example
 * openPriceAlerts()
 * // => 'https://link.trustwallet.com/alerts'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function openPriceAlerts(payload: TrustWalletUrlOptions = {}) {
  return trustWalletUrl('alerts', payload)
}
