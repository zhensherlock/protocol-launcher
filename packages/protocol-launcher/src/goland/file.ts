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
 * Open file in GoLand
 *
 * @param payload Open file definition.
 * @returns GoLand open file URL.
 * @example
 * openFile({
 *   path: '/etc/hosts',
 *   line: 10,
 *   column: 5,
 * })
 * // => 'goland://open?file=/etc/hosts&line=10&column=5'
 */
export function openFile(payload: OpenFile) {
  const { path, line, column } = payload
  return `goland://open?file=${path}${isUndefined(line) ? '' : `&line=${line}`}${isUndefined(column) ? '' : `&column=${column}`}`
}
