import { qs } from '@protocol-launcher/shared'

/**
 * Filter by tag payload definition.
 */
type FilterByTag = {
  /**
   * The tag name to filter by.
   *
   * @example 'work'
   */
  tag?: string
}

/**
 * Open Day One and apply a tag filter.
 *
 * @param payload Filter by tag payload.
 * @returns Day One filter URL.
 * @example
 * filterByTag({ tag: 'work' })
 * // => 'dayone://filter?tag=work'
 * @link https://dayoneapp.com/guides/tips-and-tutorials/day-one-url-scheme/
 */
export function filterByTag(payload: FilterByTag = {}) {
  const { tag } = payload
  const params = qs({
    ...(tag ? { tag } : {}),
  })

  return `dayone://filter${params}`
}
