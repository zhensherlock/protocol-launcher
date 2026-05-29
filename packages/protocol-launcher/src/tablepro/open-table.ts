import { tableproPathSegment, tableproUrl } from './shared'

export type OpenTableInCurrentDatabase = {
  /**
   * Saved TablePro connection UUID.
   */
  connectionId: string
  /**
   * Table name to open.
   */
  table: string
  database?: never
  schema?: never
}

export type OpenTableInDatabase = {
  /**
   * Saved TablePro connection UUID.
   */
  connectionId: string
  /**
   * Database name to select before opening the table.
   */
  database: string
  /**
   * Table name to open.
   */
  table: string
  schema?: never
}

export type OpenTableInSchema = {
  /**
   * Saved TablePro connection UUID.
   */
  connectionId: string
  /**
   * Database name to select before opening the table.
   */
  database: string
  /**
   * Schema name to select before opening the table.
   */
  schema: string
  /**
   * Table name to open.
   */
  table: string
}

export type OpenTable = OpenTableInCurrentDatabase | OpenTableInDatabase | OpenTableInSchema

/**
 * Open a TablePro table.
 *
 * @param payload TablePro table payload.
 * @returns TablePro table URL.
 * @example
 * openTable({
 *   connectionId: '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1',
 *   table: 'users',
 * })
 * // => 'tablepro://connect/9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1/table/users'
 * @example
 * openTable({
 *   connectionId: '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1',
 *   database: 'app',
 *   schema: 'reporting',
 *   table: 'daily_events',
 * })
 * // => 'tablepro://connect/9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1/database/app/schema/reporting/table/daily_events'
 * @link https://docs.tablepro.app/external-api/url-scheme
 */
export function openTable(payload: OpenTable) {
  const segments = ['connect', tableproPathSegment(payload.connectionId)]

  if (payload.database !== undefined) {
    segments.push('database', tableproPathSegment(payload.database))
  }

  if (payload.schema !== undefined) {
    segments.push('schema', tableproPathSegment(payload.schema))
  }

  segments.push('table', tableproPathSegment(payload.table))

  return tableproUrl(segments.join('/'))
}
