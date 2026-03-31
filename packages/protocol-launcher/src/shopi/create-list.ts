import { qs } from '@protocol-launcher/shared'

/**
 * Create list command payload definition.
 */
type CreateList = {
  /**
   * The new shopping list name.
   */
  name: string
}

/**
 * Create a new shopping list named list-name in Shopi.
 *
 * @param payload Create list command payload.
 * @returns Shopi create list URL.
 * @example
 * createList({ name: 'weekly shopping' })
 * // => 'shopi://x-callback-url/create-list?name=weekly%20shopping'
 * @link http://sapient-pair.com/shopi/automation.html
 */
export function createList(payload: CreateList) {
  const { name } = payload
  const params = qs({ name })

  return `shopi://x-callback-url/create-list${params}`
}
