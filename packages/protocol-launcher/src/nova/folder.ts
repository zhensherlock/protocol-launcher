/**
 * Arguments for opening a folder.
 */
type OpenFolder = {
  /**
   * The absolute path to the folder to open.
   */
  path: string
}

/**
 * Open a specified folder in Nova.
 *
 * @param payload Arguments for opening a folder.
 * @returns Nova open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'nova://open?path=/etc'
 * @link https://help.nova.app/projects/url-schema/#open
 */
export function openFolder(payload: OpenFolder) {
  const { path } = payload
  return `nova://open?path=${path}`
}
