import { qs } from '@protocol-launcher/shared'

/**
 * Show store product details command payload definition.
 */
type ShowStoreProductDetails = {
  /**
   * Numeric iTunes identifier for the product.
   *
   * @example '989565871'
   */
  id: string | number
}

/**
 * Show the details of an iTunes product within Opener in an SKStoreProductViewController or an iOS store app.
 *
 * @param payload Show store product details command payload.
 * @returns Opener show-store-product-details URL.
 * @example
 * showStoreProductDetails({
 *   id: '989565871',
 * })
 * // => 'opener://x-callback-url/show-store-product-details?id=989565871'
 * @example
 * showStoreProductDetails({
 *   id: 989565871,
 * })
 * // => 'opener://x-callback-url/show-store-product-details?id=989565871'
 * @link https://www.opener.link/api.html
 */
export function showStoreProductDetails(payload: ShowStoreProductDetails) {
  const { id } = payload
  const params = qs({
    id: String(id),
  })

  return `opener://x-callback-url/show-store-product-details${params}`
}
