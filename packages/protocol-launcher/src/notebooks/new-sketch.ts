import type { NotebooksParentPayload } from './shared'
import { notebooksAmpParams } from './shared'

/**
 * Create a new sketch in Notebooks.
 *
 * @param payload Notebooks parent book payload.
 * @returns Notebooks addNewSketch URL.
 * @example
 * newSketch({ parent: 'path to parent' })
 * // => 'notebooks://addNewSketch&parent=path%20to%20parent'
 * @link https://www.notebooksapp.com/notebooks-url-schemes/
 */
export function newSketch(payload: NotebooksParentPayload = {}) {
  const { parent } = payload

  return `notebooks://addNewSketch${notebooksAmpParams({ parent }, ['parent'])}`
}
