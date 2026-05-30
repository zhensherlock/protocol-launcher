import type { NotebooksDocumentPathPayload } from './shared'
import { encodeNotebooksPath } from './shared'

/**
 * Open a specific document in Notebooks using the documented `show` URL.
 *
 * @param payload Notebooks document path payload.
 * @returns Notebooks show document URL.
 * @example
 * openDocument({ path: 'escaped path to document' })
 * // => 'notebooks://show/escaped%20path%20to%20document'
 * @link https://www.notebooksapp.com/notebooks-url-schemes/
 */
export function openDocument(payload: NotebooksDocumentPathPayload) {
  const { path } = payload

  return `notebooks://show/${encodeNotebooksPath(path)}`
}
