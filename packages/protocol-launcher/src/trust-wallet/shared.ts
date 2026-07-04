import { qs } from '@protocol-launcher/shared'

export type TrustWalletUrlFormat = 'link' | 'scheme'

export type TrustWalletParameterValue = string | number

export type TrustWalletAssetId = string

export interface TrustWalletUrlOptions {
  /**
   * Use the documented `https://link.trustwallet.com` app link by default, or `trust://` for direct app deeplinks.
   *
   * @default 'link'
   */
  format?: TrustWalletUrlFormat
}

export type TrustWalletPayload = TrustWalletUrlOptions & Record<string, unknown>

export function trustWalletBaseUrl(format: TrustWalletUrlFormat = 'link') {
  return format === 'scheme' ? 'trust://' : 'https://link.trustwallet.com/'
}

export function trustWalletUrl<T extends TrustWalletUrlOptions & object>(route: string, payload: T = {} as T) {
  const { format, ...params } = payload as TrustWalletPayload

  return `${trustWalletBaseUrl(format)}${route}${qs(params)}`
}
