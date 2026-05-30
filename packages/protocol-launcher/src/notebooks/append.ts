import type { NotebooksAppendPayload } from './shared'
import { notebooksAmpParams } from './shared'

/**
 * Append text to an existing Notebooks document.
 *
 * @param payload Notebooks append payload.
 * @returns Notebooks append URL.
 * @example
 * append({ text: 'text to add', doc: 'path to document.txt' })
 * // => 'notebooks://append/text%20to%20add&doc=path%20to%20document.txt'
 * @link https://www.notebooksapp.com/notebooks-url-schemes/
 */
export function append(payload: NotebooksAppendPayload) {
  const { text, doc } = payload

  return `notebooks://append/${encodeURIComponent(text)}${notebooksAmpParams({ doc }, ['doc'])}`
}
