import { type TrustWalletUrlOptions, trustWalletUrl } from './shared'

export interface StakeClaimRewardsPayload extends TrustWalletUrlOptions {
  /**
   * SLIP-44 coin index.
   *
   * @example 118
   */
  coin: number | string
}

/**
 * Open Trust Wallet claim rewards flow.
 *
 * @param payload Trust Wallet claim rewards payload.
 * @returns Trust Wallet claim rewards deeplink.
 * @example
 * stakeClaimRewards({ coin: 118 })
 * // => 'https://link.trustwallet.com/stake_claim_rewards?coin=118'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function stakeClaimRewards(payload: StakeClaimRewardsPayload) {
  return trustWalletUrl('stake_claim_rewards', payload)
}
