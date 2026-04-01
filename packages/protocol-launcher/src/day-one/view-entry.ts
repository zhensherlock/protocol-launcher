import { qs } from '@protocol-launcher/shared'

/**
 * View entry payload definition.
 */
type ViewEntry = {
  /**
   * The entry UUID to view.
   *
   * @example '22B178B33B2A4149538280F9C34102C5'
   */
  entryId: string
}

/**
 * Open and view a specific entry in Day One.
 *
 * @param payload View entry payload.
 * @returns Day One view entry URL.
 * @example
 * viewEntry({ entryId: '22B178B33B2A4149538280F9C34102C5' })
 * // => 'dayone://view?entryId=22B178B33B2A4149538280F9C34102C5'
 * @link https://dayoneapp.com/guides/tips-and-tutorials/day-one-url-scheme/
 */
export function viewEntry(payload: ViewEntry) {
  const { entryId } = payload
  const params = qs({ entryId })

  return `dayone://view${params}`
}
