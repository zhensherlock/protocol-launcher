import { type TrustWalletAssetId, type TrustWalletUrlOptions, trustWalletUrl } from './shared'

export interface OpenBuyCryptoPayload extends TrustWalletUrlOptions {
  /**
   * Asset in UAI format.
   *
   * @example 'c60'
   */
  asset: TrustWalletAssetId
  /**
   * Fiat ramp provider.
   *
   * @example 'moonpay'
   */
  provider?: string
  /**
   * Payment method.
   *
   * @example 'digital_wallet'
   */
  paymentMethod?: string
  /**
   * Sub payment method.
   *
   * @example 'paypal'
   */
  subPaymentMethod?: string
  /**
   * Currency for the amount.
   *
   * @example 'USD'
   */
  fiatCurrency?: string
  /**
   * Default quantity of the asset to buy.
   *
   * @example 300
   */
  fiatQuantity?: string | number
}

/**
 * Open Trust Wallet Buy Crypto.
 *
 * @param payload Trust Wallet buy crypto payload.
 * @returns Trust Wallet buy crypto deeplink.
 * @example
 * openBuyCrypto({
 *   asset: 'c60',
 *   provider: 'moonpay',
 *   paymentMethod: 'digital_wallet',
 *   subPaymentMethod: 'paypal',
 *   fiatCurrency: 'USD',
 *   fiatQuantity: 300,
 * })
 * // => 'https://link.trustwallet.com/buy?asset=c60&provider=moonpay&payment_method=digital_wallet&sub_payment_method=paypal&fiat_currency=USD&fiat_quantity=300'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function openBuyCrypto(payload: OpenBuyCryptoPayload) {
  const { paymentMethod, subPaymentMethod, fiatCurrency, fiatQuantity, ...params } = payload

  return trustWalletUrl('buy', {
    ...params,
    payment_method: paymentMethod,
    sub_payment_method: subPaymentMethod,
    fiat_currency: fiatCurrency,
    fiat_quantity: fiatQuantity,
  })
}
