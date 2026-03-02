import { isUndefined } from '@protocol-launcher/shared'

/**
 * Arguments for opening a file.
 */
type OpenFile = {
  /**
   * The absolute path to the file to open.
   */
  path: string

  /**
   * Open the file to a specific line.
   */
  line?: number

  /**
   * Open the file to a specific column.
   */
  column?: number

  /**
   * Open the file in a specific syntax mode.
   */
  type?: string
}

/**
 * Open a specified file in Nova.
 *
 * @param payload Arguments for opening a file.
 * @returns Nova open file URL.
 * @example
 * openFile({
 *   path: '/etc/hosts',
 *   line: 10,
 *   column: 5,
 *   type: 'ini',
 * })
 * // => 'nova://open?path=/etc/hosts&line=10&column=5&type=ini'
 * @link https://help.nova.app/projects/url-schema/#open
 */
export function openFile(payload: OpenFile) {
  const { path, line, column, type } = payload
  return `nova://open?path=${path}${isUndefined(line) ? '' : `&line=${line}`}${isUndefined(column) ? '' : `&column=${column}`}${isUndefined(type) ? '' : `&type=${type}`}`
}
