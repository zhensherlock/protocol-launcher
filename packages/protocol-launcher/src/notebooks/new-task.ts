import type { NotebooksParentPayload } from './shared'
import { notebooksAmpParams } from './shared'

/**
 * Create a new task in Notebooks.
 *
 * @param payload Notebooks parent book payload.
 * @returns Notebooks addNewTask URL.
 * @example
 * newTask({ parent: 'path to parent' })
 * // => 'notebooks://addNewTask&parent=path%20to%20parent'
 * @link https://www.notebooksapp.com/notebooks-url-schemes/
 */
export function newTask(payload: NotebooksParentPayload = {}) {
  const { parent } = payload

  return `notebooks://addNewTask${notebooksAmpParams({ parent }, ['parent'])}`
}
