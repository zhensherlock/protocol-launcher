import type { WarpSchemePayload } from './shared'
import { warpUrl } from './shared'

/**
 * Open new tab payload definition.
 */
type NewTab = WarpSchemePayload & {
  /**
   * Folder path.
   *
   * @example 'path_to_folder'
   */
  path: string
}

/**
 * Open a new Warp tab in a folder.
 *
 * @param payload Open new tab payload.
 * @returns Warp new tab URL.
 * @example
 * newTab({
 *   path: 'path_to_folder',
 * })
 * // => 'warp://action/new_tab?path=path_to_folder'
 * @link https://docs.warp.dev/terminal/more-features/uri-scheme
 */
export function newTab(payload: NewTab) {
  const { path, scheme = 'warp' } = payload

  return warpUrl('action/new_tab', { path }, scheme)
}
