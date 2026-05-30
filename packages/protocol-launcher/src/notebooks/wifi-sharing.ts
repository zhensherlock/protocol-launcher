import type { NotebooksBookPathPayload } from './shared'
import { encodeNotebooksPath } from './shared'

/**
 * Start WiFi Sharing in Notebooks for iPhone and iPad.
 *
 * @param payload Notebooks book path payload.
 * @returns Notebooks wifi_sharing URL.
 * @example
 * wifiSharing({ path: 'Path To Book To Share' })
 * // => 'notebooks://wifi_sharing/Path%20To%20Book%20To%20Share'
 * @link https://www.notebooksapp.com/notebooks-url-schemes/
 */
export function wifiSharing(payload: NotebooksBookPathPayload = {}) {
  const { path } = payload

  return `notebooks://wifi_sharing${path === undefined ? '' : `/${encodeNotebooksPath(path)}`}`
}
