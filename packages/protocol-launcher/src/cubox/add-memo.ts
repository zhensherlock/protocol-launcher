import { qs } from '@protocol-launcher/shared'

/**
 * Add memo payload definition.
 */
type AddMemo = {
  /**
   * Memo content to add to Cubox.
   *
   * @example 'Remember to buy groceries'
   */
  memo: string
}

/**
 * Add a memo to Cubox.
 *
 * @param payload Add memo payload.
 * @returns Cubox add URL.
 * @example
 * addMemo({ memo: 'Remember to buy groceries' })
 * // => 'cubox://add?memo=Remember%20to%20buy%20groceries'
 * @link https://help.cubox.pro/adv/97a6/
 */
export function addMemo(payload: AddMemo) {
  const { memo } = payload
  const params = qs({ memo })

  return `cubox://add${params}`
}
