import { qs } from '@protocol-launcher/shared'

/**
 * Show list command payload definition.
 */
type ShowList = {
  /**
   * The shopping list name.
   */
  name: string
}

/**
 * Show the shopping list named list-name in Shopi.
 *
 * @param payload Show list command payload.
 * @returns Shopi show list URL.
 * @example
 * showList({ name: 'groceries' })
 * // => 'shopi://x-callback-url/show-list?name=groceries'
 * @link http://sapient-pair.com/shopi/automation.html
 */
export function showList(payload: ShowList) {
  const { name } = payload
  const params = qs({ name })

  return `shopi://x-callback-url/show-list${params}`
}
