import { qs } from '@protocol-launcher/shared'

/**
 * Add item command payload definition.
 */
type AddItem = {
  /**
   * The shopping list name (or omit to use currently displayed list).
   */
  list?: string
  /**
   * The item name.
   */
  name: string
  /**
   * The item amount.
   */
  amount?: string
  /**
   * Whether the item is crossed ("yes" or "no").
   */
  crossed?: 'yes' | 'no'
}

/**
 * Add an item to a shopping list in Shopi.
 *
 * @param payload Add item command payload.
 * @returns Shopi add item URL.
 * @example
 * addItem({ list: 'groceries', name: 'milk', amount: '2' })
 * // => 'shopi://x-callback-url/add-item?list=groceries&name=milk&amount=2'
 * @example
 * addItem({ name: 'bread', crossed: 'no' })
 * // => 'shopi://x-callback-url/add-item?name=bread&crossed=no'
 * @link http://sapient-pair.com/shopi/automation.html
 */
export function addItem(payload: AddItem) {
  const { list, name, amount, crossed } = payload
  const params = qs({
    ...(list ? { list } : {}),
    name,
    ...(amount ? { amount } : {}),
    ...(crossed ? { crossed } : {}),
  })

  return `shopi://x-callback-url/add-item${params}`
}
