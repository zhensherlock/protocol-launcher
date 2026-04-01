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
  const { url } = payload
  const params = qs({ url })

  return `cubox://add${params}`
}
