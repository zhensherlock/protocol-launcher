import type { NotebooksAddNotePayload } from './shared'
import { notebooksAmpParams } from './shared'

/**
 * Add text as a new plain text document in Notebooks.
 *
 * @param payload Notebooks add note payload.
 * @returns Notebooks addnote URL.
 * @example
 * addNote({ text: 'note body', title: 'Title is optional', parent: 'path to parent' })
 * // => 'notebooks://addnote/note%20body&title=Title%20is%20optional&parent=path%20to%20parent'
 * @link https://www.notebooksapp.com/notebooks-url-schemes/
 */
export function addNote(payload: NotebooksAddNotePayload) {
  const { text, title, parent } = payload

  return `notebooks://addnote/${encodeURIComponent(text)}${notebooksAmpParams({ title, parent }, ['parent'])}`
}
