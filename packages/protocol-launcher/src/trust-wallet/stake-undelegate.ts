import { type TrustWalletUrlOptions, trustWalletUrl } from './shared'

export interface StakeUndelegatePayload extends TrustWalletUrlOptions {
  /**
   * SLIP-44 coin index.
   *
   * @example 118
   */
  coin: number | string
}

/**
 * Open Trust Wallet unstake/undelegate flow.
 *
 * @param payload Trust Wallet unstake/undelegate payload.
 * @returns Trust Wallet unstake/undelegate deeplink.
 * @example
 * stakeUndelegate({ coin: 118 })
 * // => 'https://link.trustwallet.com/stake_undelegate?coin=118'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function stakeUndelegate(payload: StakeUndelegatePayload) {
  return trustWalletUrl('stake_undelegate', payload)
}
