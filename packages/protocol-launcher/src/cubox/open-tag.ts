import { qs } from '@protocol-launcher/shared'

/**
 * Open tag payload definition.
 */
type OpenTag = {
  /**
   * Tag name.
   *
   * @example 'important'
   */
  name: string
}

/**
 * Open a specific tag in Cubox.
 *
 * @param payload Open tag payload.
 * @returns Cubox tag URL.
 * @example
 * openTag({ name: 'important' })
 * // => 'cubox://tag?name=important'
 * @link https://help.cubox.pro/adv/97a6/
 */
export function openTag(payload: OpenTag) {
  const { name } = payload
  const params = qs({ name })

  return `cubox://tag${params}`
}
