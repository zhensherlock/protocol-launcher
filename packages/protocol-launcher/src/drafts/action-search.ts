import { qs } from '@protocol-launcher/shared'

/**
 * ActionSearch action payload definition.
 */
type ActionSearch = {
  /**
   * Initial text to use in the search.
   */
  query?: string
}

/**
 * Open drafts directly to search of the action list.
 *
 * @param payload ActionSearch action payload.
 * @returns Drafts actionSearch URL.
 * @example
 * actionSearch({ query: 'QUERY-TEXT' })
 * // => 'drafts:///actionSearch?query=QUERY-TEXT'
 * @example
 * actionSearch()
 * // => 'drafts:///actionSearch'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function actionSearch(payload: ActionSearch = {}) {
  const { query } = payload

  const params = qs({
    ...(query ? { query } : {}),
  })

  return `drafts:///actionSearch${params}`
}
