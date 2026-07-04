import { type TrustWalletUrlOptions, trustWalletUrl } from './shared'

export interface OpenHotTokensPayload extends TrustWalletUrlOptions {
  /**
   * Category identifier.
   *
   * @example 'hot'
   */
  categoryId?: string
  /**
   * Network identifier as a SLIP-44 index.
   *
   * @example 'c0'
   */
  network?: string
}

/**
 * Open the Hot Tokens tab on the Trust Wallet Swap page.
 *
 * @param payload Trust Wallet hot tokens payload.
 * @returns Trust Wallet hot tokens deeplink.
 * @example
 * openHotTokens({ categoryId: 'hot', network: 'c0' })
 * // => 'https://link.trustwallet.com/hot_tokens?category_id=hot&network=c0'
 * @link https://developer.trustwallet.com/developer/develop-for-trust/deeplinking
 */
export function openHotTokens(payload: OpenHotTokensPayload = {}) {
  const { categoryId, ...params } = payload

  return trustWalletUrl('hot_tokens', { category_id: categoryId, ...params })
}
