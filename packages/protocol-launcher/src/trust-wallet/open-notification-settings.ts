import { type TrustWalletUrlOptions, trustWalletUrl } from './shared'

/**
 * Open Trust Wallet notification settings.
 *
 * @param payload Optional Trust Wallet URL options.
 * @returns Trust Wallet notification settings deeplink.
 * @example
 * openNotificationSettings()
 * // => 'https://link.trustwallet.com/notification_settings'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function openNotificationSettings(payload: TrustWalletUrlOptions = {}) {
  return trustWalletUrl('notification_settings', payload)
}
