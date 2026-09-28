import { qs } from '@protocol-launcher/shared'

/**
 * Add link payload definition.
 */
type AddLink = {
  /**
   * URL to add to Cubox.
   *
   * @example 'https://example.com/article'
   */
  url: string
  xSuccess?: string
  xCancel?: string
}

/**
 * Add a link to Cubox.
 *
 * @param payload Add link payload.
 * @returns Cubox add URL.
 * @example
 * addLink({ url: 'https://example.com/article' })
 * // => 'cubox://add?url=https%3A%2F%2Fexample.com%2Farticle'
 * @link https://help.cubox.pro/adv/97a6/
 */
export function addLink(payload: AddLink) {
  const { url, xSuccess, xCancel } = payload
  const params = qs({ url, 'x-success': xSuccess, 'x-cancel': xCancel })

  return `cubox://${xSuccess !== undefined || xCancel !== undefined ? 'x-callback-url/' : ''}add${params}`
}
