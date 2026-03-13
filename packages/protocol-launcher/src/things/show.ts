import { qs } from '@protocol-launcher/shared'

/**
 * Show command payload definition.
 */
type Show = {
  /**
   * The ID of an area, project, tag or to-do to show; or one of the built-in list IDs.
   * Takes precedence over query.
   */
  id?: string

  /**
   * The name of an area, project, tag or a built-in list to show.
   * Ignored if id is also set.
   */
  query?: string

  /**
   * Comma separated strings corresponding to the titles of tags that the list should be filtered by.
   */
  filter?: string
}

/**
 * Show command payload with at least one parameter.
 */
type ShowPayload =
  | (Pick<Required<Show>, 'id'> & Omit<Show, 'id'>)
  | (Pick<Required<Show>, 'query'> & Omit<Show, 'query'>)
  | (Pick<Required<Show>, 'filter'> & Omit<Show, 'filter'>)

/**
 * Show an area, project, tag or to-do in Things, or one of the built-in lists.
 *
 * @param payload Show command payload.
 * @returns Things show URL.
 * @example
 * show({ id: 'today' })
 * // => 'things:///show?id=today'
 * @example
 * show({ id: 'GJJVZHE7SNu7xcVuH2xDDh' })
 * // => 'things:///show?id=GJJVZHE7SNu7xcVuH2xDDh'
 * @example
 * show({ query: 'vacation' })
 * // => 'things:///show?query=vacation'
 * @example
 * show({ query: 'vacation', filter: 'errand' })
 * // => 'things:///show?query=vacation&filter=errand'
 * @link https://culturedcode.com/things/support/articles/2803573/#show
 */
export function show(payload: ShowPayload = { id: 'today' }) {
  const { id, query, filter } = payload
  const params = qs({
    ...(id ? { id } : {}),
    ...(!id && query ? { query } : {}),
    ...(filter ? { filter } : {}),
  })

  return `things:///show?${params}`
}
