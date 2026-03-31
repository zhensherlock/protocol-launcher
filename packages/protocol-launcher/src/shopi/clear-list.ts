import { qs } from '@protocol-launcher/shared'

/**
 * Clear list command payload definition.
 */
type ClearList = {
  /**
   * The shopping list name.
   */
  name: string
  /**
   * Clear only crossed items when "yes".
   */
  crossedOnly?: 'yes' | 'no'
}

/**
 * Clear items from a shopping list in Shopi.
 *
 * @param payload Clear list command payload.
 * @returns Shopi clear list URL.
 * @example
 * clearList({ name: 'groceries' })
 * // => 'shopi://x-callback-url/clear-list?name=groceries'
 * @example
 * clearList({ name: 'groceries', crossedOnly: 'yes' })
 * // => 'shopi://x-callback-url/clear-list?name=groceries&crossedOnly=yes'
 * @link http://sapient-pair.com/shopi/automation.html
 */
export function clearList(payload: ClearList) {
  const { name, crossedOnly } = payload
  const params = qs({
    name,
    ...(crossedOnly ? { crossedOnly } : {}),
  })

  return `shopi://x-callback-url/clear-list${params}`
}
