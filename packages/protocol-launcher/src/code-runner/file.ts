import { isUndefined } from '@protocol-launcher/shared'

/**
 * Open file definition.
 */
type OpenFile = {
  /**
   * File path.
   */
  path: string
}

/**
 * Open file in CodeRunner
 *
 * @param payload Open file definition.
 * @returns CodeRunner open file URL.
 * @example
 * openFile({
 *   path: '/etc/hosts',
 * })
 * // => 'coderunner:///etc/hosts'
 */
export function openFile(payload: OpenFile) {
  const { path } = payload
  return `coderunner://${path}`
}
