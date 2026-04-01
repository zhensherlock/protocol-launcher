import { qs } from '@protocol-launcher/shared'

/**
 * Edit entry payload definition.
 */
type EditEntry = {
  /**
   * The entry UUID to edit.
   *
   * @example '3415BB00651C4533B41F62544A775CCC'
   */
  entryId: string
}

/**
 * Open and edit a specific entry in Day One.
 *
 * @param payload Edit entry payload.
 * @returns Day One edit entry URL.
 * @example
 * editEntry({ entryId: '3415BB00651C4533B41F62544A775CCC' })
 * // => 'dayone://edit?entryId=3415BB00651C4533B41F62544A775CCC'
 * @link https://dayoneapp.com/guides/tips-and-tutorials/day-one-url-scheme/
 */
export function editEntry(payload: EditEntry) {
  const { entryId } = payload
  const params = qs({ entryId })

  return `dayone://edit${params}`
}
