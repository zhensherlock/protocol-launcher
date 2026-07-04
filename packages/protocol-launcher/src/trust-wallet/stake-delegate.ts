import { type TrustWalletUrlOptions, trustWalletUrl } from './shared'

export interface StakeDelegatePayload extends TrustWalletUrlOptions {
  /**
   * SLIP-44 coin index.
   *
   * @example 118
   */
  coin: number | string
  /**
   * Optional validator or delegator to be selected.
   *
   * @example 'cosmosvaloper156gqf9837u7d4c4678yt3rl4ls9c5vuursrrzf'
   */
  id?: string
}

/**
 * Open Trust Wallet stake/delegate flow.
 *
 * @param payload Trust Wallet stake/delegate payload.
 * @returns Trust Wallet stake/delegate deeplink.
 * @example
 * stakeDelegate({ coin: 118, id: 'cosmosvaloper156gqf9837u7d4c4678yt3rl4ls9c5vuursrrzf' })
 * // => 'https://link.trustwallet.com/stake_delegate?coin=118&id=cosmosvaloper156gqf9837u7d4c4678yt3rl4ls9c5vuursrrzf'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function stakeDelegate(payload: StakeDelegatePayload) {
  return trustWalletUrl('stake_delegate', payload)
}
