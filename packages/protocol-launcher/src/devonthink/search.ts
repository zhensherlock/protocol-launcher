import type { DEVONthinkCommon } from './shared'
import { commandUrl, commonParams } from './shared'

/**
 * Search command payload definition.
 */
type Search = Pick<DEVONthinkCommon, 'hide'> & {
  /**
   * The query to search for.
   */
  query: string
}

/**
 * Initiate a search in the open DEVONthink databases.
 *
 * @param payload Search command payload.
 * @returns DEVONthink search URL.
 * @example
 * search({ query: 'invoice' })
 * // => 'x-devonthink://search?query=invoice'
 * @link https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html
 */
export function search(payload: Search) {
  const { query } = payload

  return commandUrl('search', {
    ...commonParams(payload),
    query,
  })
}
