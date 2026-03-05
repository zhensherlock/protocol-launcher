/**
 * Open folder definition.
 */
type OpenFolder = {
  /**
   * Folder path.
   */
  path: string
}

/**
 * Open folder in CodeRunner
 *
 * @param payload Open folder definition.
 * @returns CodeRunner open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'coderunner:///etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path } = payload
  return `coderunner://${path}`
}
