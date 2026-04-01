import { qs } from '@protocol-launcher/shared'

/**
 * Create entry payload definition.
 */
type CreateEntry = {
  /**
   * The entry text content.
   */
  entry?: string
  /**
   * Tags for the entry (comma separated).
   */
  tags?: string
  /**
   * Journal name to create the entry in.
   */
  journal?: string
  /**
   * Use clipboard image (set to 1 to enable).
   */
  imageClipboard?: number
}

/**
 * Create and open a new entry in Day One.
 *
 * @param payload Create entry payload.
 * @returns Day One create entry URL.
 * @example
 * createEntry({ entry: 'Hello World' })
 * // => 'dayone://post?entry=Hello%20World'
 * @example
 * createEntry({ entry: 'Hello', tags: 'work, test' })
 * // => 'dayone://post?entry=Hello&tags=work%2C%20test'
 * @example
 * createEntry({ entry: 'Hello', journal: 'Day One' })
 * // => 'dayone://post?entry=Hello&journal=Day%20One'
 * @example
 * createEntry({ entry: 'Hello', imageClipboard: 1 })
 * // => 'dayone://post?entry=Hello&imageClipboard=1'
 * @link https://dayoneapp.com/guides/tips-and-tutorials/day-one-url-scheme/
 */
export function createEntry(payload: CreateEntry = {}) {
  const { entry, tags, journal, imageClipboard } = payload
  const params = qs({
    ...(entry ? { entry } : {}),
    ...(tags ? { tags } : {}),
    ...(journal ? { journal } : {}),
    ...(imageClipboard ? { imageClipboard } : {}),
  })

  return `dayone://post${params}`
}
