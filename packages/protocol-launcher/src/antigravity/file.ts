import { isUndefined } from '@protocol-launcher/shared'

/**
 * Open file definition.
 */
type OpenFile = {
  /**
   * File path.
   */
  path: string

  /**
   * Line number.
   */
  line?: number

  /**
   * Column number.
   */
  column?: number

  /**
   * Whether to open the file in a new window.
   *
   * Defaults to `false`.
   */
  openInNewWindow?: boolean
}

/**
 * Open file in Antigravity.
 *
 * @param payload Open file definition.
 * @returns Antigravity open file URL.
 * @example
 * openFile({
 *   path: '/etc/hosts',
 *   line: 10,
 *   column: 5,
 * })
 * // => 'antigravity://file/etc/hosts:10:5'
 */
export function openFile(payload: OpenFile) {
  const { path, line, column, openInNewWindow = false } = payload
  return `antigravity://file${path}${isUndefined(line) ? '' : `:${line}`}${isUndefined(column) ? '' : `:${column}`}${openInNewWindow ? '?windowId=_blank' : ''}`
}
