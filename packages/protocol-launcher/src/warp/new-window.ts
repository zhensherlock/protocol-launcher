import type { WarpSchemePayload } from './shared'
import { warpUrl } from './shared'

/**
 * Open new window payload definition.
 */
type NewWindow = WarpSchemePayload & {
  /**
   * Folder path.
   *
   * @example 'path_to_folder'
   */
  path: string
}

/**
 * Open a new Warp window in a folder.
 *
 * @param payload Open new window payload.
 * @returns Warp new window URL.
 * @example
 * newWindow({
 *   path: 'path_to_folder',
 * })
 * // => 'warp://action/new_window?path=path_to_folder'
 * @example
 * newWindow({
 *   path: 'path_to_folder',
 *   scheme: 'warppreview',
 * })
 * // => 'warppreview://action/new_window?path=path_to_folder'
 * @link https://docs.warp.dev/terminal/more-features/uri-scheme
 */
export function newWindow(payload: NewWindow) {
  const { path, scheme = 'warp' } = payload

  return warpUrl('action/new_window', { path }, scheme)
}
