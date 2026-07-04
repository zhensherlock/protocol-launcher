import { type TrustWalletUrlOptions, trustWalletUrl } from './shared'

/**
 * Open Trust Wallet notifications.
 *
 * @param payload Optional Trust Wallet URL options.
 * @returns Trust Wallet notifications deeplink.
 * @example
 * openNotifications()
 * // => 'https://link.trustwallet.com/notifications'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function openNotifications(payload: TrustWalletUrlOptions = {}) {
  return trustWalletUrl('notifications', payload)
}
