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
 * Open file in Atom.
 *
 * @param payload Open file definition.
 * @returns Atom open file URL.
 * @example
 * openFile({
 *   path: '/etc/hosts',
 *   line: 10,
 *   column: 5,
 * })
 * // => 'atom://core/open/file?filename=/etc/hosts&line=1&column=2'
 */
export function openFile(payload: OpenFile) {
  const { path, line, column } = payload
  return `atom://core/open/file?filename=${path}${isUndefined(line) ? '' : `&line=${line}`}${isUndefined(column) ? '' : `&column=${column}`}`
}
