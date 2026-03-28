import { qs } from '@protocol-launcher/shared'

/**
 * Create category command payload definition.
 */
type CreateCategory = {
  /**
   * The title of the category.
   *
   * @example 'New Category'
   */
  title: string
}

/**
 * Create a category with the given title.
 *
 * @param payload Create category command payload.
 * @returns Agenda create category URL.
 * @example
 * createCategory({ title: 'New Category' })
 * // => 'agenda://x-callback-url/create-category?title=New%20Category'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function createCategory(payload: CreateCategory) {
  const { title } = payload
  const params = qs({ title })

  return `agenda://x-callback-url/create-category${params}`
}
