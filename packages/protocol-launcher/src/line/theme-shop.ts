import { lineRWithQuery } from './shared'

export type OpenTheme = {
  /**
   * Theme product ID.
   */
  productId: string
}

/**
 * Open a Theme info screen.
 *
 * @param payload Theme product ID payload.
 * @returns LINE Theme info URL.
 * @example
 * openTheme({ productId: '0bac8fed-4c75-40c5-9982-e9ecc3b9d191' })
 * // => 'https://line.me/R/shop/theme/detail?id=0bac8fed-4c75-40c5-9982-e9ecc3b9d191'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-the-theme-shop
 */
export function openTheme(payload: OpenTheme) {
  return lineRWithQuery('/shop/theme/detail', { id: payload.productId })
}
