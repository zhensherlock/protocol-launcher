import { tableproPathSegment, tableproUrl } from './shared'

export type Connect = {
  /**
   * Saved TablePro connection UUID.
   *
   * @example '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1'
   */
  connectionId: string
}

/**
 * Open a saved TablePro connection.
 *
 * @param payload TablePro connection payload.
 * @returns TablePro connection URL.
 * @example
 * connect({
 *   connectionId: '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1',
 * })
 * // => 'tablepro://connect/9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1'
 * @link https://docs.tablepro.app/external-api/url-scheme
 */
export function connect(payload: Connect) {
  return tableproUrl(`connect/${tableproPathSegment(payload.connectionId)}`)
}
