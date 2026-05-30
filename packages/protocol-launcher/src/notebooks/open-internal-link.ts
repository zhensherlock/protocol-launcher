import type { NotebooksDocumentPathPayload } from './shared'
import { encodeNotebooksPath } from './shared'

/**
 * Open a Notebooks internal document link using the direct path URL format.
 *
 * @param payload Notebooks document path payload.
 * @returns Notebooks direct document URL.
 * @example
 * openInternalLink({ path: 'escaped path to document' })
 * // => 'notebooks://escaped%20path%20to%20document'
 * @link https://www.notebooksapp.com/notebooks-url-schemes/
 */
export function openInternalLink(payload: NotebooksDocumentPathPayload) {
  const { path } = payload

  return `notebooks://${encodeNotebooksPath(path)}`
}
