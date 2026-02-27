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
 * Open file in Lingma
 *
 * @param payload Open file definition.
 * @returns Lingma open file URL.
 * @example
 * openFile({
 *   path: '/etc/hosts',
 *   line: 10,
 *   column: 5,
 * })
 * // => 'lingma://file/etc/hosts:10:5'
 */
export function openFile(payload: OpenFile) {
  const { path, line, column, openInNewWindow = false } = payload
  return `lingma://file${path}${isUndefined(line) ? '' : `:${line}`}${isUndefined(column) ? '' : `:${column}`}${openInNewWindow ? '?windowId=_blank' : ''}`
}
