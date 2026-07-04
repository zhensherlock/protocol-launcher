import { type TrustWalletAssetId, type TrustWalletUrlOptions, trustWalletUrl } from './shared'

export interface SendPaymentPayload extends TrustWalletUrlOptions {
  /**
   * Asset in UAI format.
   *
   * @example 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F'
   */
  asset: TrustWalletAssetId
  /**
   * Recipient address.
   *
   * @example '0x650b5e446edabad7eba7fa7bb2f6119b2630bfbb'
   */
  address: string
  /**
   * Optional payment amount.
   *
   * @example '1'
   */
  amount?: string | number
  /**
   * Optional memo.
   *
   * @example 'test'
   */
  memo?: string
  /**
   * Optional data.
   */
  data?: string
}

/**
 * Generate a Trust Wallet send payment deeplink.
 *
 * @param payload Trust Wallet payment payload.
 * @returns Trust Wallet send payment deeplink.
 * @example
 * sendPayment({
 *   asset: 'c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F',
 *   address: '0x650b5e446edabad7eba7fa7bb2f6119b2630bfbb',
 *   amount: 1,
 *   memo: 'test',
 * })
 * // => 'https://link.trustwallet.com/send?asset=c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F&address=0x650b5e446edabad7eba7fa7bb2f6119b2630bfbb&amount=1&memo=test'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function sendPayment(payload: SendPaymentPayload) {
  return trustWalletUrl('send', payload)
}
