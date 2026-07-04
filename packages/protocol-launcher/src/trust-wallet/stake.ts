import { type TrustWalletUrlOptions, trustWalletUrl } from './shared'

export interface StakePayload extends TrustWalletUrlOptions {
  /**
   * SLIP-44 coin index.
   *
   * @example 118
   */
  coin: number | string
}

/**
 * Open Trust Wallet staking details.
 *
 * @param payload Trust Wallet staking payload.
 * @returns Trust Wallet stake details deeplink.
 * @example
 * stake({ coin: 118 })
 * // => 'https://link.trustwallet.com/stake?coin=118'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function stake(payload: StakePayload) {
  return trustWalletUrl('stake', payload)
}
