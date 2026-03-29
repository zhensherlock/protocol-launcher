import { qs } from '@protocol-launcher/shared'

/**
 * Search action payload definition.
 */
type Search = {
  /**
   * Initial text to use in the search.
   */
  query?: string
  /**
   * Tag to use to filter the query.
   */
  tag?: string
  /**
   * If provided, select the associated folder tab in the draft list.
   */
  folder?: 'inbox' | 'archive' | 'flagged' | 'all' | 'trash'
}

/**
 * Open drafts directly to the draft search field.
 *
 * @param payload Search action payload.
 * @returns Drafts search URL.
 * @example
 * search({ query: 'QUERY-TEXT' })
 * // => 'drafts:///search?query=QUERY-TEXT'
 * @example
 * search({ query: 'meeting', tag: 'work', folder: 'inbox' })
 * // => 'drafts:///search?query=meeting&tag=work&folder=inbox'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function search(payload: Search = {}) {
  const { query, tag, folder } = payload

  const params = qs({
    ...(query ? { query } : {}),
    ...(tag ? { tag } : {}),
    ...(folder ? { folder } : {}),
  })

  return `drafts:///search${params}`
}
