import type { NotebooksParentPayload } from './shared'
import { notebooksAmpParams } from './shared'

/**
 * Create a new document in Notebooks.
 *
 * @param payload Notebooks parent book payload.
 * @returns Notebooks addNewDoc URL.
 * @example
 * newDocument({ parent: 'path to parent' })
 * // => 'notebooks://addNewDoc&parent=path%20to%20parent'
 * @link https://www.notebooksapp.com/notebooks-url-schemes/
 */
export function newDocument(payload: NotebooksParentPayload = {}) {
  const { parent } = payload

  return `notebooks://addNewDoc${notebooksAmpParams({ parent }, ['parent'])}`
}
