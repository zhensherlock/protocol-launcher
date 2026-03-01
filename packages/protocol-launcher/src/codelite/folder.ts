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
 * Open folder in CodeLite
 *
 * @param payload Open folder definition.
 * @returns CodeLite open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'codelite://open?url=file:///etc'
 * @link https://github.com/eranif/codelite/blob/master/Runtime/codelite-url-handler
 */
export function openFolder(payload: OpenFolder) {
  const { path } = payload
  return `codelite://open?url=file://${path}`
}
