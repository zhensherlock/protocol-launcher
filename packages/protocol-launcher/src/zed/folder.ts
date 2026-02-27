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
 * Open folder in Zed.
 *
 * @param payload Open folder definition.
 * @returns Zed open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'zed://file/etc'
 * @link https://github.com/zed-industries/zed/blob/main/crates/zed/src/zed/open_listener.rs#L104
 */
export function openFolder(payload: OpenFolder) {
  const { path } = payload
  return `zed://file${path}`
}
