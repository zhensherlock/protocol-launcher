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
}

/**
 * Open file in Zed.
 *
 * @param payload Open file definition.
 * @returns Zed open file URL.
 * @example
 * openFile({
 *   path: '/etc/hosts',
 *   line: 10,
 *   column: 5,
 * })
 * // => 'zed://file/etc/hosts:10:5'
 * @link https://github.com/zed-industries/zed/blob/main/crates/zed/src/zed/open_listener.rs#L104
 */
export function openFile(payload: OpenFile) {
  const { path, line, column } = payload
  return `zed://file${path}${isUndefined(line) ? '' : `:${line}`}${isUndefined(column) ? '' : `:${column}`}`
}
