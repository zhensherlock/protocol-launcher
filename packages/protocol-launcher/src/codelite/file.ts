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
}

/**
 * Open file in CodeLite
 *
 * @param payload Open file definition.
 * @returns CodeLite open file URL.
 * @example
 * openFile({
 *   path: '/etc/hosts',
 *   line: 10,
 * })
 * // => 'codelite://open?url=file:///etc/hosts&line=10'
 * @link https://github.com/eranif/codelite/blob/master/Runtime/codelite-url-handler
 */
export function openFile(payload: OpenFile) {
  const { path, line } = payload
  return `codelite://open?url=file://${path}${isUndefined(line) ? '' : `&line=${line}`}`
}
