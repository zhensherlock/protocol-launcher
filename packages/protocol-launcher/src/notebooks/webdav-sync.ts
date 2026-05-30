import type { NotebooksBookPathPayload } from './shared'
import { encodeNotebooksPath } from './shared'

/**
 * Start WebDAV Sync in Notebooks for iPhone and iPad.
 *
 * @param payload Notebooks book path payload.
 * @returns Notebooks webdav_sync URL.
 * @example
 * webdavSync({ path: 'Path To Book To Sync' })
 * // => 'notebooks://webdav_sync/Path%20To%20Book%20To%20Sync'
 * @link https://www.notebooksapp.com/notebooks-url-schemes/
 */
export function webdavSync(payload: NotebooksBookPathPayload = {}) {
  const { path } = payload

  return `notebooks://webdav_sync${path === undefined ? '' : `/${encodeNotebooksPath(path)}`}`
}
