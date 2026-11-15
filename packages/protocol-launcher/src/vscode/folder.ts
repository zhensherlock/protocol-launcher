import { encodeEditorPath } from '@protocol-launcher/shared'

/**
 * Open folder definition.
 */
type OpenFolder = {
  /**
   * Folder path.
   */
  path: string

  /**
   * Whether to open the folder in a new window.
   *
   * Defaults to `false`.
   */
  openInNewWindow?: boolean
}

/**
 * Open folder in VS Code
 *
 * @param payload Open folder definition.
 * @returns VS Code open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'vscode://file/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path, openInNewWindow = false } = payload
  return `vscode://file${encodeEditorPath(path)}${openInNewWindow ? '?windowId=_blank' : ''}`
}
