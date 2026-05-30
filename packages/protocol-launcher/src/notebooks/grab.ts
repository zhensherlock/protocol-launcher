import type { NotebooksGrabPayload } from './shared'
import { notebooksAmpParams } from './shared'

/**
 * Import a document into Notebooks from a URL.
 *
 * @param payload Notebooks grab payload.
 * @returns Notebooks grab URL.
 * @example
 * grab({ url: 'URL', title: 'Title of document', parent: 'Path to target book' })
 * // => 'notebooks://grab/URL&title=Title%20of%20document&parent=Path%20to%20target%20book'
 * @link https://www.notebooksapp.com/notebooks-url-schemes/
 */
export function grab(payload: NotebooksGrabPayload) {
  const { url, title, parent } = payload

  return `notebooks://grab/${encodeURIComponent(url)}${notebooksAmpParams({ title, parent }, ['parent'])}`
}
