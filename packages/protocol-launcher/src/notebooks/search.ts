import type { NotebooksSearchPayload } from './shared'
import { notebooksAmpParams } from './shared'

/**
 * Search in Notebooks.
 *
 * @param payload Notebooks search payload.
 * @returns Notebooks search URL.
 * @example
 * search({ term: 'term to search for', scope: 'book/to/search' })
 * // => 'notebooks://search/term%20to%20search%20for&scope=book/to/search'
 * @link https://www.notebooksapp.com/notebooks-url-schemes/
 */
export function search(payload: NotebooksSearchPayload) {
  const { term, scope } = payload

  return `notebooks://search/${encodeURIComponent(term)}${notebooksAmpParams({ scope }, ['scope'])}`
}
