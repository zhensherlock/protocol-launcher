import { tableproPathSegment, tableproUrl } from './shared'

export type OpenQuery = {
  /**
   * Saved TablePro connection UUID.
   *
   * @example '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1'
   */
  connectionId: string
  /**
   * SQL to prefill in a new TablePro query tab.
   *
   * TablePro documents a 51,200-character cap.
   *
   * @example 'SELECT * FROM users LIMIT 10'
   */
  sql: string
}

/**
 * Open a new TablePro query tab with SQL pre-filled.
 *
 * TablePro shows a confirmation dialog before opening, and the query does not auto-execute.
 *
 * @param payload TablePro query payload.
 * @returns TablePro query URL.
 * @example
 * openQuery({
 *   connectionId: '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1',
 *   sql: 'SELECT * FROM users LIMIT 10',
 * })
 * // => 'tablepro://connect/9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1/query?sql=SELECT%20*%20FROM%20users%20LIMIT%2010'
 * @link https://docs.tablepro.app/external-api/url-scheme
 */
export function openQuery(payload: OpenQuery) {
  return tableproUrl(`connect/${tableproPathSegment(payload.connectionId)}/query`, {
    sql: payload.sql,
  })
}
