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
 * Open file in TextMate
 *
 * @param payload Open file definition.
 * @returns TextMate Open File URL.
 * @example
 * openFile({
 *   path: '/etc/hosts',
 *   line: 10,
 *   column: 5,
 * })
 * // => 'txmt://open?url=file:///etc/hosts&line=10&column=5'
 */
export function openFile(payload: OpenFile) {
  const { path, line, column } = payload
  return `txmt://open?url=file://${path}${isUndefined(line) ? '' : `&line=${line}`}${isUndefined(column) ? '' : `&column=${column}`}`
}
